import Image from "next/image";

export default function AffiliateFooter() {
  return (
    <div className="w-full py-5 px-7 fixed bottom-0 bg-[#1B1B29] border-t border-neutral-700">
      <h4 className="text-white font-semibold">
        Best products to play Marvel Rivals
      </h4>
      <a href="https://amzn.to/40BXyEm"></a>
      <Image
        unoptimized
        src="https://c.media-amazon.com/images/I/8189uwDnMkL._AC_SX466_.jpg"
        alt="Next"
        width={300}
        height={300}
      />
    </div>
  );
}
