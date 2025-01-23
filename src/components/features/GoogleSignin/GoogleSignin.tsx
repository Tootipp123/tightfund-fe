"use client";

import { loginGoogle } from "@/app/api/User";
import Button from "@/components/ui/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "react-query";

export default function GoogleSignin() {
  const router = useRouter();
  const { data, status }: any = useSession();

  const loginGoogleMutation = useMutation(loginGoogle, {
    onSuccess: async (res: any) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("userId", res.userId);
      localStorage.setItem("email", res.email);
      localStorage.setItem(
        "thumbnailImage",
        res.profileImage?.thumbnailImage || ""
      );
      if (!res.username) {
        window.location.href = "/profile/complete";
      } else {
        window.location.href = "/";
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      const fullname = data.user.name;
      const words = fullname.split(" ");
      loginGoogleMutation.mutateAsync({
        ...data.user,
        firstName: words[0],
        lastName: words[words.length - 1],
        id_token: data.accessToken,
        type: "google",
        isVerified: 1,
      });
    }
  }, [status]);

  return (
    <div>
      <Button
        variant="tertiary"
        onClick={() => {
          signIn("google");
        }}
        className="w-full"
        startIcon={<FcGoogle />}
        disabled={status === "loading" || loginGoogleMutation.isLoading}
        loading={status === "loading" || loginGoogleMutation.isLoading}
      >
        Sign in with Google
      </Button>
    </div>
  );
}
