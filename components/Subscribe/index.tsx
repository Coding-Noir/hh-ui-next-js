"use client"
import Image from "next/image"
import Container from "../Container"
import Button from "../Button"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

type Props = {}

const Subscribe = (props: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    const body = document.querySelector("body")

    if (isInView) {
      body?.classList.add("bg-black")
    } else {
      body?.classList.remove("bg-black")
    }
    console.log("Subscribe is in view: ", isInView)
  }, [isInView])

  return (
    <section id="subscribe" ref={ref}>
      <Container variant="sm" className="flex items-center gap-14">
        <div className="shrink-0">
          <Image
            src="https://dummyimage.com/442x642.png/d1d1d1d/000000"
            alt=""
            width={442}
            height={642}
          />
        </div>

        <div>
          <h2 className="text-7xl font-bold mb-6">Section Title</h2>
          <p className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            ea itaque commodi vero ipsum! Dolorum sit molestiae aperiam aliquid
            beatae.
          </p>

          <Button label="Hello" className="mt-12" />
        </div>
      </Container>
    </section>
  )
}

export default Subscribe
