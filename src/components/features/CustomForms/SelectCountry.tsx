"use client";

import Button from "@/components/ui/Button";
import COUNTRY_OPTIONS from "@/config/countries.json";
import { useGlobalStore } from "@/store/useGlobalStore";
import { useRef, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function SelectCountry() {
  const dropdownRef = useRef<any>(null);
  const { setCurrency, setShowCountrySelection } = useGlobalStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = searchTerm
    ? COUNTRY_OPTIONS.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : COUNTRY_OPTIONS;

  // Function to handle proceeding after country selection
  const handleCountrySelectionComplete = () => {
    if (!selectedCountry) {
      alert("Please select your country to proceed.");
      return;
    }

    setCurrency({
      country: selectedCountry.code,
      currency: selectedCountry.currency,
      symbol: selectedCountry.symbol,
    });

    setShowCountrySelection(false);
  };

  return (
    <>
      <h2 className="text-dark-main font-bold text-2xl md:text-[32px] text-center px-5 leading-none">
        Select your country
      </h2>
      <p className="text-dark-main font-regular mt-2 opacity-[0.9] text-sm md:text-[16px] text-center px-5 leading-none">
        Please select your current country of residence.
      </p>
      <div className="flex items-center flex-col gap-y-4 mt-[80px]">
        {/* Custom Country Selection Dropdown */}
        <div className="relative w-full bg-light-main" ref={dropdownRef}>
          {/* <input
            type="text"
            placeholder="Search for a country..."
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-dark-main text-lg"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);

              setIsDropdownOpen(true); // Open dropdown on input

              setSelectedCountry(null); // Clear selection when typing
            }}
            onFocus={() => setIsDropdownOpen(true)} // Open on focus
          /> */}
          <input
            type="text"
            placeholder="Search for a country"
            className="block w-full pr-12 text-center px-4 bg-light-main py-3 border-b border-dark-main text-dark-main text-lg placeholder:text-[#869e94]"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);

              setIsDropdownOpen(true); // Open dropdown on input

              setSelectedCountry(null); // Clear selection when typing
            }}
            onFocus={() => setIsDropdownOpen(true)} // Open on focus
          />

          {/* Dropdown Icon */}
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
              // If opening, ensure input is focused for typing
              if (!isDropdownOpen && dropdownRef.current) {
                const inputElement = dropdownRef.current.querySelector("input");
                if (inputElement) {
                  inputElement.focus();
                }
              }
            }}
            tabIndex={-1} // Prevent button from being tab-focused
          >
            {isDropdownOpen ? (
              <IoChevronUp
                className="h-5 w-5 text-[#869e94]"
                aria-hidden="true"
              />
            ) : (
              <IoChevronDown
                className="h-5 w-5 text-[#869e94]"
                aria-hidden="true"
              />
            )}
          </button>

          {isDropdownOpen && filteredCountries.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 shadow-lg mt-1 max-h-60 overflow-y-auto">
              {filteredCountries.map((country: any) => (
                <div
                  key={country.code}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => {
                    setSelectedCountry(country);

                    setSearchTerm(country.name); // Set input to selected country name

                    setIsDropdownOpen(false); // Close dropdown
                  }}
                >
                  <span>
                    {country.name} ({country.symbol})
                  </span>

                  {selectedCountry?.code === country.code && (
                    <span className="text-blue-500">✓</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {isDropdownOpen &&
            filteredCountries.length === 0 &&
            searchTerm !== "" && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 shadow-lg mt-1 px-4 py-2 text-gray-500">
                No countries found.
              </div>
            )}
        </div>

        {/* Next Button for Country Selection */}
        <Button
          className="w-full mt-10 py-3"
          onClick={handleCountrySelectionComplete}
          disabled={!selectedCountry}
        >
          <p className="text-lg">Next</p>
        </Button>
      </div>
    </>
  );
}
