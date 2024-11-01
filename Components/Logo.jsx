import React from "react";

const Logo = ({ color }) => {
  return (
    <svg
      class={`w-8 ${color} text-teal-accent-400`}
      viewBox="0 0 24 24"
      strokeLinejoin="round"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      stroke="currentColor"
      fill="none"
    >
      {/* Circle 1 */}
      <circle cx="8" cy="8" r="5" stroke="currentColor" fill="none" />
      
      {/* Circle 2 - Interconnected with Circle 1 */}
      <circle cx="16" cy="8" r="5" stroke="currentColor" fill="none" />
      
      {/* Circle 3 - Interconnected with Circle 2 */}
      <circle cx="12" cy="16" r="5" stroke="currentColor" fill="none" />
    </svg>
  );
};

export default Logo;
