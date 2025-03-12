"use client";

interface Props {
  onClose: () => void;
  persist?: boolean;
}

export default function ReadDescriptionModal({
  onClose,
  persist = false,
}: Props) {
  return (
    <>
      <div
        className="fixed inset-0 w-full h-full bg-black bg-neutral-900 opacity-60 z-[600]"
        onClick={() => !persist && onClose()}
      ></div>
      <div className="w-[85%] md:w-[500px] z-[700] overflow-auto bg-[#1B1B29] rounded-md shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="px-7 py-9 w-full">asdasd</div>
      </div>
    </>
  );
}
