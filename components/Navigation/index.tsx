import Link from "next/link"
import { FaAngleDown } from "react-icons/fa6"

const defaultMenu = [
  {
    label: "Dropdown",
    url: "#",
    subMenu: true,
  },
  {
    label: "Link",
    url: "#",
    subMenu: false,
  },
  {
    label: "Link",
    url: "#",
    subMenu: false,
  },
  {
    label: "Link",
    url: "#",
    subMenu: false,
  },
]

type Props = {}

const Navigation = (props: Props) => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {defaultMenu.map((link, index) => (
          <li key={index}>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm bg-black text-white px-5 py-2 rounded-full hover:opacity-80 transition-all duration-300 ease-in-out leading-[1]"
            >
              {link.label}

              {link.subMenu && (
                <span className="pt-[2px]">
                  <FaAngleDown className="w-2" />
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
