"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import Image from "next/image"
import { useState } from "react"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <div className="flex flex-col">
      {/* <RefinementList refinementList={params} setRefinementList={setParams} /> */}
      <Image
        src="/store/store_hero.jpg"
        alt="Store hero"
        width={1920}
        height={340}
      />
      <InfiniteProducts params={params} />
    </div>
  )
}

export default StoreTemplate
