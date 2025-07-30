import AnimatedLoadingIcon from "@/components/ui/AnimatedLoadingIcon";
import { Suspense } from "react";

export default function SigninLayout({ children }: any) {
  const LoadingState = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <AnimatedLoadingIcon size="xl" />
        </div>
      </div>
    );
  };

  return <Suspense fallback={<LoadingState />}>{children}</Suspense>;
}
