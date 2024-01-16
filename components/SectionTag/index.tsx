import { twMerge } from "tailwind-merge"

type Props = {
  text: string
  className?: string
}

const SectionTag = ({ text, className }: Props) => {
  return (
    <div
      className={twMerge(
        "py-1 px-5 bg-black inline-block text-white uppercase text-base font-semibold mb-4",
        className
      )}
    >
      <p>{text}</p>
    </div>
  )
}

export default SectionTag
