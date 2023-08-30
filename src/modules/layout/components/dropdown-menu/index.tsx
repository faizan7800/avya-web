import { Popover, Transition } from "@headlessui/react"
import {
  useFeaturedProductsQuery,
  useNavigationCollections,
} from "@lib/hooks/use-layout-data"
import repeat from "@lib/util/repeat"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import clsx from "clsx"
import { chunk } from "lodash"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const DropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()
  const { data: collections, isLoading: loadingCollections } =
    useNavigationCollections()
  const { data: products, isLoading: loadingProducts } =
    useFeaturedProductsQuery()

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-full"
    >
      <div className="flex items-center h-full space-x-4">
        <Link href="/" className="" passHref>
          Home
        </Link>
        <Link href="/" className="" passHref>
          Downloads
        </Link>
        <Link href="/" className="" passHref>
          About Us
        </Link>
        <Link href="/" className="" passHref>
          Blogs
        </Link>
        <Link href="/" className="" passHref>
          FAQs
        </Link>
      </div>
    </div>
  )
}

export default DropdownMenu
