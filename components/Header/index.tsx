import Image from "next/image"
import Link from "next/link"
import Navigation from "../Navigation"
import { twMerge } from "tailwind-merge"
import { FaCircleUser } from "react-icons/fa6"
import { IoSearchSharp } from "react-icons/io5"
import Button from "../Button"
import { IoBagHandle } from "react-icons/io5"
import { IoIosMenu } from "react-icons/io"
import Container from "../Container"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="h-20 flex justify-center items-center">
      <Container
        variant="lg"
        className="flex items-center justify-between gap-4"
      >
        <ul
          className={twMerge(
            "flex items-center text-lg lg:hidden",
            "[&_button]:h-10 [&_button]:w-10 [&_button]:p-2 [&_button]:items-center [&_button]:justify-center [&_button]:flex"
          )}
        >
          <button>
            <IoIosMenu className="text-2xl" />
          </button>
          <button>
            <IoSearchSharp className="text-lg" />
          </button>
        </ul>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 lg:inline-block lg:relative lg:translate-x-0  lg:left-0"
        >
          <Image
            src="https://dummyimage.com/110x50.png/d1d1d1d/000000"
            alt="Logo"
            width={110}
            height={50}
          />
        </Link>

        <div className="hidden lg:block">
          <Navigation />
        </div>

        <div className="flex items-center gap-2">
          <Button
            label="Button"
            className="text-sm leading-[1] px-5 py-2 hidden lg:block"
          />

          <ul
            className={twMerge(
              "flex items-center text-lg",
              "[&_button]:h-10 [&_button]:w-10 [&_button]:p-2 [&_button]:items-center [&_button]:justify-center [&_button]:flex"
            )}
          >
            <li>
              <button>
                <FaCircleUser />
              </button>
            </li>

            <li className="hidden lg:block">
              <button>
                <IoSearchSharp />
              </button>
            </li>

            <li>
              <Link
                href="#"
                className="flex relative p-2 h-10 w-10 items-center justify-center"
              >
                <IoBagHandle />
                <span className="absolute top-0 right-1 font-semibold text-xs">
                  0
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header
