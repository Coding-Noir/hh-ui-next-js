import Container from "../Container"
import CardCustomize from "../Cards/CardCustomize"

type Props = {}

const Customize = (props: Props) => {
  return (
    <section>
      <Container variant="md" className="flex flex-col gap-28">
        <div className="text-center">
          <h2 className="text-7xl font-bold mb-6 gap">
            Customize Your Adventure
          </h2>
        </div>

        <div className="flex items-start justify-center gap-16">
          <CardCustomize />
          <CardCustomize />
          <CardCustomize />
        </div>
      </Container>
    </section>
  )
}

export default Customize
