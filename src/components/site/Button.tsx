import type { ButtonHTMLAttributes } from "react";

export function SiteButton({ type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} {...props} />;
}