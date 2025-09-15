import type { SVGProps } from "react";

interface SearchProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const France = ({ className = "", ...props }: SearchProps) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clip-path="url(#clip0_1_14206)">
        <path
          d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
          fill="#F0F0F0"
        />
        <path
          d="M35.9999 17.9999C35.9999 10.2606 31.1151 3.66278 24.2607 1.11951V34.8804C31.1151 32.3371 35.9999 25.7393 35.9999 17.9999Z"
          fill="#D80027"
        />
        <path
          d="M0.000610352 18.0011C0.000610352 25.7405 4.88543 32.3383 11.7398 34.8815V1.1207C4.88543 3.66397 0.000610352 10.2617 0.000610352 18.0011Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_14206">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default France;
