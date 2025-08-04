"use client;";
type LeetCodeIconProps = React.SVGProps<SVGSVGElement>;

export const LeetCodeIcon = ({ className, ...props }: LeetCodeIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M20.5 7.4L4.9 23.2c-.5.5-.5 1.3 0 1.8L20.5 41l2.1-2.1-14.3-14 14.3-14L20.5 7.4zm6.7 0L44.1 23.2c.5.5.5 1.3 0 1.8L27.2 41l-2.1-2.1 14.3-14-14.3-14L27.2 7.4z" />
  </svg>
);
