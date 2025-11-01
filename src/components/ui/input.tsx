import * as React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full rounded-xl bg-neutral-800/60 border border-neutral-700 text-white text-sm px-3 py-2 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-neutral-500 ${className}`}
      {...props}
    />
  );
});
Input.displayName = "Input";
