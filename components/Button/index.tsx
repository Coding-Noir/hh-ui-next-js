import Link from "next/link"
import { twMerge } from "tailwind-merge"

type Props = {
  label: string
  url?: string
  className?: string
}

const Button = ({ label, url, className }: Props) => {
  return (
    <Link
      href={url || ""}
      className={twMerge(
        "bg-primary text-xl px-10 py-4 rounded-full uppercase leading-[1] shadow-[-4px_4px_#000] transition-all duration-300 ease-in-out hover:opacity-80 hover:rotate-[-3deg] hover:scale-[1.1]",
        className
      )}
    >
      {label || "Link"}
    </Link>
  )
}

export default Button
