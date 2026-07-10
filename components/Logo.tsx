import Image from "next/image";
import Link from "next/link";

export default function Logo({
  variant = "color",
  className = "",
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  return (
    <Link href="/" className={`flex items-center ${className}`} aria-label="Dermato Planet home">
      <Image
        src="/logo.png"
        alt="Dermato Planet"
        width={5282}
        height={1868}
        priority
        className={`h-11 w-auto ${variant === "white" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
