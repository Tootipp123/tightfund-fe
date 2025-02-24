"use client";

import { cancelMembershipApi } from "@/api/Membership";
import { useUserStore } from "@/store/User";
import { useState } from "react";
import Button from "../ui/Button";

interface Props {
  onClose: () => void;
  persist?: boolean;
}

export default function CancelMembershipModal({
  onClose,
  persist = false,
}: Props) {
  const { subscriptionId } = useUserStore();
  const [reasons, setReasons] = useState([
    { label: "No longer need", selected: false },
    { label: "Too expensive", selected: false },
    { label: "Found another tool", selected: false },
    { label: "Purchased accidentally", selected: false },
    { label: "Others", selected: false },
  ]);

  const [otherReason, setOtherReason] = useState(""); // Store user input for "Others"
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [successCancel, setSuccessCancel] = useState(false);

  const handleSelection = (index: number) => {
    setReasons((prevReasons) =>
      prevReasons.map((reason, i) => ({
        ...reason,
        selected: i === index, // Set selected to true only for the clicked one
      }))
    );

    // Reset "Others" input if it's not selected
    if (reasons[index].label !== "Others") {
      setOtherReason("");
    }
  };

  const handleCancelMembership = async () => {
    setLoadingCancel(true);
    try {
      let reason = "";
      const selectedReason: any = reasons.find((r) => r.selected === true);

      if (selectedReason?.label !== "Other") {
        reason = selectedReason.label;
      } else {
        reason = otherReason;
      }

      const res = await cancelMembershipApi(subscriptionId, reason);

      if (res) {
        setSuccessCancel(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingCancel(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full bg-black bg-neutral-900 opacity-60 z-[600]"
        onClick={() => !persist && onClose()}
      ></div>
      <div className="w-[85%] md:w-[500px] z-[700] overflow-auto bg-[#1B1B29] rounded-md shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="px-7 py-9 w-full">
          {!successCancel ? (
            <>
              <h2 className="text-2xl font-semibold text-neutral-100">
                Cancel Membership
              </h2>
              <p className="text-neutral-300 mt-2">
                Thank you for choosing Peak Rivals, we're sorry to see you go.
                Before you cancel, please specify your reason for cancellation
                below.
              </p>
              <div className="pt-5">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center">
                      <input
                        id={`radio-${index}`}
                        type="radio"
                        name="cancel-reason"
                        checked={reason.selected}
                        onChange={() => handleSelection(index)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`radio-${index}`}
                        className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                      >
                        {reason.label}
                      </label>
                    </div>

                    {/* Show text input if "Others" is selected */}
                    {reason.label === "Others" && reason.selected && (
                      <input
                        type="text"
                        placeholder="Please specify your reason..."
                        value={otherReason}
                        onChange={(e) => setOtherReason(e.target.value)}
                        className="mt-2 p-2 w-full border border-neutral-700 rounded-md bg-transparent text-white"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="actions py-4 flex items-center gap-2 w-full">
                <Button variant="tertiary" className="w-full">
                  Go Back
                </Button>
                <Button
                  className="w-full"
                  loading={loadingCancel}
                  onClick={handleCancelMembership}
                >
                  Cancel Subscription
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-neutral-100">
                Success!
              </h2>
              <p className="text-neutral-300 mt-2">
                Your membership has been successfully canceled. We're sorry to
                see you go! If you ever decide to return, we'll be here to
                welcome you back.
              </p>
              <div className="actions py-4 flex items-center gap-2 w-full">
                <Button variant="tertiary" className="w-full" onClick={onClose}>
                  Close
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
