"use client";

import Navbar from "@/components/features/Navbar";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Modal from "../../../components/ui/Modal";

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromMembershipPage = searchParams.get("from") === "membership";

  const [showTermsAndConditionsModal, setShowTermsAndConditionsModal] =
    useState(false);

  return (
    <>
      <Navbar />
      <main
        id="signup"
        className="bg-primary-main w-full m-auto overflow-hidden"
      >
        <div className="flex md:flex-row flex-col items-center justify-between w-full min-h-[90vh]">
          <section className="md:px-[100px] bg-light-secondary py-[100px] rounded-xl m-auto">
            <div className="w-full md:w-[400px]">
              <h3 className="text-dark-main md:mt-4 text-2xl font-semibold text-center">
                Welcome!
              </h3>
              <p className="text-dark-main text-md font-regular mt-1 text-center">
                Sign In to see your emergency fund updates
              </p>
              <div className="my-7">
                <button
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: fromMembershipPage
                        ? "/membership"
                        : "/dashboard",
                    })
                  }
                  className="rounded-md bg-white w-full border border-neutral-300 z-[5] mt-4 relative flex gap-3 hover:opacity-80 text-white bg-main-purple px-8 py-3 w-[300px] items-center justify-center"
                >
                  <FcGoogle className="text-2xl bg-white rounded-full p-[2px]" />
                  <span className="text-sm text-black">
                    Sign in with Google
                  </span>
                </button>
              </div>
              <div className="gap-2 mt-5 text-center">
                <p className="text-dark-main font-light md:text-md text-sm">
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
          <div className="w-[90%] h-[550px] md:w-[500px] md:h-[700px] border border-neutral-800 bg-dark-bg p-7 overflow-auto m-auto">
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
