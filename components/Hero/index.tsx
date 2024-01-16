import Image from "next/image"
import Button from "../Button"
import Container from "../Container"
import { cn } from "@/libs/utils"

const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn(className)}>
      <Container variant="md" className="flex items-center">
        <div className="max-w-[800px]">
          <div className="py-1 px-5 bg-black inline-block text-white uppercase text-base font-semibold mb-4">
            <p>Text</p>
          </div>

          <h1 className="text-balance text-8xl text-white leading-[1] text-shadow font-bold mb-6">
            Section Title
          </h1>

          <p className="text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            molestias blanditiis placeat magnam sequi eligendi libero explicabo
            earum molestiae nulla.
          </p>

          <div className="flex items-center gap-5 mt-12">
            <Button label="Link" />
            <Button label="Link" />
            <Button label="Link" />
          </div>
        </div>
        <div className=" flex flex-1 p-5">
          <div className="shadow-[20px_20px_0px_0px_rgba(69,69,69,1)]">
            <Image
              src="https://dummyimage.com/1300x1300.png/d1d1d1d/000000"
              height={650}
              width={650}
              className="w-full border-4 border-black rounded-tl-[120px]"
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
