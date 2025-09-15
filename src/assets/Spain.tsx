import type { SVGProps } from "react";

interface SearchProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const Spain = ({ className = "", ...props }: SearchProps) => {
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
      <g clip-path="url(#clip0_1_14205)">
        <path
          d="M0 17.9989C0 20.2007 0.39607 22.3098 1.11959 24.2597L18 25.825L34.8804 24.2597C35.6039 22.3098 36 20.2007 36 17.9989C36 15.7971 35.6039 13.6881 34.8804 11.7381L18 10.1729L1.11959 11.7381C0.39607 13.6881 0 15.7971 0 17.9989Z"
          fill="#FFDA44"
        />
        <path
          d="M34.8827 11.7386C32.3394 4.88427 25.7416 -0.000549316 18.0022 -0.000549316C10.2629 -0.000549316 3.6651 4.88427 1.12183 11.7386H34.8827Z"
          fill="#D80027"
        />
        <path
          d="M1.12036 24.261C3.66363 31.1153 10.2614 36.0001 18.0008 36.0001C25.7401 36.0001 32.3379 31.1153 34.8812 24.261H1.12036Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_14205">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Spain;
