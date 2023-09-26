"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"
import icon from "../../../../../public/header/icon_231.svg"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div className="bg-white">
      <div className="bg-[#222222]"><p className="text-white text-center">ris orci dignissim nisl, id </p></div>
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group bg-white", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto bg-transparent border-b border-transparent duration-200 max-w-1920"
        )}
      >
        <nav
          className={clsx(
            "bg-white text-black flex items-center justify-between w-full h-full text-small-regular"
          )}
        >
          <div className="flex items-center h-full flex-1">
            <Link href="/" className="text-xl-semi uppercase">
              <Image src={icon} alt="" />
            </Link>
          </div>

          <div className="h-full flex items-center justify-center text-black flex-1">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <DropdownMenu />
            </div>
          </div>

          <div className="flex items-center gap-x-6 h-full justify-end text-black flex-1">
            {/* <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">Account</Link>
            </div> */}
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
    </div>
  )
}

export default Nav
