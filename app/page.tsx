import ColorBGWrapper from "@/components/ColorBGWrapper"
import Customize from "@/components/Customize"
import Hero from "@/components/Hero"
import Magazines from "@/components/Magazines"
import Marquee from "@/components/Marquee"
import Subscribe from "@/components/Subscribe"

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee text="Lorem Ipsom Text Here" />
      <Subscribe />

      <Customize />
      <Magazines />
    </>
  )
}
