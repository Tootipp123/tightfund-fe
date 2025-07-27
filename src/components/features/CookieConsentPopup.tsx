"use client";
import { useEffect, useState } from "react";

export default function CookieConsentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "accepted") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    // Trigger any cookie initialization here
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
    // Remove any non-essential cookies here
    // test
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-[#000] shadow-lg border-t border-gray-600">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h3 className="text-lg font-semibold text-gray-50">
                  We value your privacy
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  We use cookies to enhance your browsing experience and analyze
                  our traffic. By clicking "Accept All", you consent to our use
                  of cookies.
                </p>
              </div>
              <div className="flex flex-shrink-0 space-x-4">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
