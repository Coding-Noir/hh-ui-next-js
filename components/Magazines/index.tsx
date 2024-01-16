import Container from "../Container"
import CardCustomize from "../Cards/CardCustomize"
import Button from "../Button"
import SectionTag from "../SectionTag"

type Props = {}

const Magazines = (props: Props) => {
  return (
    <section>
      <Container variant="sm" className="max-w-[690px]">
        <div className="text-center flex flex-col items-center gap-9">
          <SectionTag text="Text" />

          <h2 className="text-7xl font-bold gap">Where History Comes Alive</h2>
          <p className="text-3xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            ea itaque commodi vero ipsum! Dolorum sit molestiae aperiam aliquid
            beatae.
          </p>
          <Button label="Hello" />

          <SectionTag text="Text" />
        </div>
      </Container>
    </section>
  )
}

export default Magazines
