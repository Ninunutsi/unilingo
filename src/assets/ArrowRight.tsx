import type { SVGProps } from "react";

interface SearchProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const ArrowRight = ({ className = "", ...props }: SearchProps) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.66669 7.00002H13.3334M13.3334 7.00002L7.50002 1.16669M13.3334 7.00002L7.50002 12.8334"
        stroke="currentColor"
        strokeWidth="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
