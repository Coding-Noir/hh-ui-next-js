import { cn } from "@/libs/utils"

type Props = {
  text: string
  variant?: "yellow" | "black" | "transparent"
  bgColor?: string
}

const Marquee = ({ text, variant = "yellow" }: Props) => {
  return (
    <div
      className={cn(
        "group overflow-hidden py-3  relative whitespace-nowrap border-t-4  border-b-4",
        "before:left-0 before:absolute before:top-0 before:w-[250px] before:h-full before:content-[''] before:z-[2] before:from-transparent before:bg-gradient-to-l after:right-0 after:absolute after:top-0 after:w-[250px] after:h-full after:content-[''] after:z-[2] after:bg-gradient-to-r after:from-transparent",
        "",
        {
          "bg-transparent border-t-transparent border-b-transparent text-black":
            variant === "transparent",
        },
        {
          "bg-yellow text-black border-t-black  border-b-black before:to-yellow  after:to-yellow":
            variant === "yellow",
          "bg-black text-white border-t-black  border-b-black before:to-black after:to-black":
            variant === "black",
        }
      )}
    >
      <ul className="marquee-items group-hover:[animation-play-state:paused] flex animate-[35s_slide_infinite_linear]">
        {Array.from({ length: 30 }).map((_, i) => (
          <li
            key={i}
            className="text-3xl relative after:content-[''] after:absolute after:w-2  after:h-2 after:bg-black after:mx-5 after:top-1/2 after:-translate-y-1/2 after:rounded-full pr-12"
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Marquee
