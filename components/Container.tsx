import { cn } from "@/libs/utils"

type Props = {
  variant?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

const Container = ({ variant, children, className }: Props) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5",
        {
          "max-w-[1240px]": variant === "sm",
          "max-w-[1400px]": variant === "md",
          "max-w-[2240px]": variant === "lg",
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
