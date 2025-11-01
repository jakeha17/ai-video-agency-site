import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  className?: string;
};

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<string, string> = {
    default: "bg-white text-black hover:bg-neutral-200",
    outline:
      "border border-neutral-700 bg-neutral-900/40 text-neutral-200 hover:bg-neutral-800 hover:text-white"
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
