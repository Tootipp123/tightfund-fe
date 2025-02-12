"use client";

import GoogleSignin from "@/components/features/GoogleSignin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import { useMutation } from "react-query";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import { signupUser } from "../../api/User";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [showTermsAndConditionsModal, setShowTermsAndConditionsModal] =
    useState(false);

  const signupMutation = useMutation(signupUser, {
    onSuccess: async (res: any) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("userId", res.userId);
      localStorage.setItem("username", res.username ?? "");
      localStorage.setItem("email", res.email);
      localStorage.setItem("thumbnailImage", res.profileImage.thumbnailImage);
      router.push("/profile/complete");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const createAccount = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setSignupError("Please enter a valid email address");
      return;
    }

    // Check other required fields
    if (!password || !confirmPassword) {
      setSignupError("All fields are required");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setSignupError("Password and confirm password did not match");
      return;
    }

    // Call the signup mutation
    signupMutation.mutateAsync({
      email,
      username,
      password,
    });
  };

  return (
    <>
      <main
        id="signup"
        className="bg-[#1B1B29] w-full m-auto h-[100vh] overflow-hidden"
      >
        <button
          onClick={() => router.push("/")}
          className="flex gap-2 items-center p-3"
        >
          <MdKeyboardBackspace className="w-4 h-4 dark:text-neutral-100 text-neutral-500" />
          <h2 className="dark:text-neutral-100 text-neutral-500 font-semibold text-sm">
            Back
          </h2>
        </button>
        <div className="flex md:flex-row flex-col items-center justify-between w-full min-h-[90vh]">
          <section className="md:px-[100px] px-5 m-auto">
            <div className="w-full md:w-[400px]">
              <h3 className="text-neutral-200 md:mt-4 text-2xl font-semibold text-center">
                Sign in to Peak Rivals
              </h3>
              <div className="my-5">
                <GoogleSignin />
                <button
                  onClick={async () => {
                    window.location.href = process.env
                      .NEXT_PUBLIC_DISCORD_CALLBACK_URL as string;
                  }}
                  className="rounded-md w-full z-[5] mt-4 relative flex gap-3 hover:opacity-80 shadow shadow-lg text-white bg-main-purple px-8 py-3 w-[300px] items-center justify-center"
                >
                  <FaDiscord className="text-2xl" />
                  <span className="text-sm">Sign in with Discord</span>
                </button>
              </div>
              <div className="gap-2 mt-5 text-center">
                <p className="text-neutral-300 font-light md:text-md text-sm">
                  By joining, you agree to our
                  <b
                    onClick={() => setShowTermsAndConditionsModal(true)}
                    className="font-semibold cursor-pointer"
                  >
                    &nbsp;Terms and Conditions
                  </b>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {showTermsAndConditionsModal && (
        <Modal onClose={() => setShowTermsAndConditionsModal(false)}>
          <div className="w-[90%] h-[550px] md:w-[500px] md:h-[700px] border border-neutral-800 bg-neutral-950 bg-white p-7 overflow-auto m-auto">
            <h1 className="text-neutral-200 text-xl font-bold">
              PRIVACY POLICY
            </h1>
            <section className="mt-10">
              <h2 className="text-neutral-200 font-semibold text-xl">
                User Data Privacy
              </h2>
              <p className="text-neutral-200 text-md font-light mt-3">
                We respect your privacy, and we are committed to protecting any
                personal information you provide to us. We do not store or
                retain your personal data, including but not limited to your
                name, email address, phone number, or any other personally
                identifiable information, without your explicit consent.
              </p>
              <p className="dark:text-neutral-200 text-md font-light mt-3">
                Any data you share with us for the purpose of using our services
                will only be used for the intended purpose and will not be
                stored beyond what is necessary.
              </p>
            </section>
            <section className="mt-7">
              <h2 className="dark:text-neutral-200 font-semibold text-xl">
                Security
              </h2>
              <p className="dark:text-neutral-200 text-md font-light mt-3">
                We employ reasonable security measures to safeguard your data.
                However, we cannot guarantee the absolute security of your data
                transmitted to us.
              </p>
              <p className="dark:text-neutral-200 text-md font-light mt-3">
                You are responsible for maintaining the confidentiality of any
                account or login information associated with our website.
              </p>
            </section>
            <section className="mt-7">
              <h2 className="dark:text-neutral-200 font-semibold text-xl">
                Changes
              </h2>
              <p className="dark:text-neutral-200 text-md font-light mt-3">
                We will update this Privacy Policy occasionally and as required
                by legal, regulatory or operational modifications. We will
                notify such changes (including the effective date) as required
                by law.
              </p>
            </section>
          </div>
        </Modal>
      )}
    </>
  );
}
