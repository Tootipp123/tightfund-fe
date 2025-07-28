export default function LogoSvg({
  width = 64,
  height = 53,
}: {
  width?: number | string;
  height?: number | string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="16.6846" width="19" height="53" rx="2" fill="#FF6B61" />
      <rect
        y="35.9553"
        width="19.1454"
        height="31.7749"
        rx="2"
        transform="rotate(-89.5489 0 35.9553)"
        fill="#FF6B61"
      />
      <path
        d="M25.7464 34.8918L25.5794 16.8248C30.5257 18.3945 33.4021 18.4825 38.7495 16.9938C48.6209 14.1628 53.5296 13.3691 59.4599 15.5299L59.5952 33.75C55.0796 32.0934 52.1357 31.831 45.53 33.5555C36.9665 36.322 32.3616 37.3468 25.7464 34.8918Z"
        fill="#0C3C26"
        stroke="#FAF3EA"
        strokeWidth="5"
      />
      <path
        d="M57.6846 14.3333C52.4798 13.1104 48.6118 13.2497 37.6846 17C44.1966 12.5697 48.4393 10.86 57.6846 10V14.3333Z"
        fill="#0C3C26"
      />
      <circle cx="42.6846" cy="25" r="3" fill="#FAF3EA" />
    </svg>
  );
}
