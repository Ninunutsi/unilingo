import { type SVGProps } from "react";

interface SearchProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const ArtBoard = ({ className = "", ...props }: SearchProps) => {
  return (
    <svg
      width="1132"
      height="397"
      viewBox="0 0 1132 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <g filter="url(#filter0_f_1_14183)">
          <ellipse
            cx="433.292"
            cy="-4.88652"
            rx="293.292"
            ry="129.113"
            fill="#F79009"
          />
        </g>
        <g filter="url(#filter1_f_1_14183)">
          <ellipse
            cx="896.631"
            cy="8.02432"
            rx="243.37"
            ry="117.376"
            fill="#FDA29B"
          />
        </g>
        <g filter="url(#filter2_f_1_14183)">
          <ellipse
            cx="652.48"
            cy="95.4676"
            rx="267.551"
            ry="101.53"
            fill="#F97066"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_1_14183"
          x="-60"
          y="-334"
          width="986.583"
          height="658.227"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_1_14183"
          />
        </filter>
        <filter
          id="filter1_f_1_14183"
          x="453.262"
          y="-309.352"
          width="886.739"
          height="634.752"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_1_14183"
          />
        </filter>
        <filter
          id="filter2_f_1_14183"
          x="184.93"
          y="-206.062"
          width="935.101"
          height="603.06"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_1_14183"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArtBoard;
