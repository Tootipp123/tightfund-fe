export default function CircleSvg() {
  return (
    <svg
      width="500"
      height="209"
      viewBox="0 0 500 209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_g_56_829)">
        <circle
          cx="150"
          cy="150"
          r="150"
          transform="matrix(1 0 0 -1 100 400)"
          fill="#A5C8C2"
        />
      </g>
      <defs>
        <filter
          id="filter0_g_56_829"
          x="0"
          y="0"
          width="500"
          height="500"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2 2"
            numOctaves="3"
            seed="8248"
          />
          <feDisplacementMap
            in="shape"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect1_texture_56_829">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
