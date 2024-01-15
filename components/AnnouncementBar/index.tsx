import Link from "next/link"
import { IoMdClose } from "react-icons/io"
import Container from "../Container"

type Props = {
  text: string
  dismissable?: boolean
  linkable?: boolean
}

const AnnouncementBar = ({ text, dismissable, linkable }: Props) => {
  return (
    <div className="bg-[#1b8cde] text-white py-3 text-center relative">
      <Container variant="md">
        <p>
          {linkable ? (
            <Link href="/">
              {text || "This is a linkable announcement bar"}
            </Link>
          ) : (
            text || "This is a normal announcement bar"
          )}
        </p>

        {dismissable && (
          <button className="absolute top-0 right-3 w-8 h-full flex items-center justify-center">
            <IoMdClose />
          </button>
        )}
      </Container>
    </div>
  )
}

export default AnnouncementBar
