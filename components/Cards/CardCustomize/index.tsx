import Button from "@/components/Button"
import Image from "next/image"
import React from "react"

type Props = {}

const CardCustomize = (props: Props) => {
  return (
    <div className="text-center">
      <div className="mb-10">
        <Image
          src="https://dummyimage.com/353x400.png/d1d1d1d/000000"
          alt=""
          width={353}
          height={400}
          className="border-[10px] mx-auto h-full object-cover border-black"
        />
      </div>

      <h3 className="text-4xl font-bold uppercase mb-5">Title</h3>
      <p className="text-lg"> Lorem ipsum dolor sit amet.</p>
      <Button label="Hello" className="mt-7" />
    </div>
  )
}

export default CardCustomize
