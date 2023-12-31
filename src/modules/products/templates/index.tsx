"use client"

import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import React, { useRef } from "react"
import ImageGallery from "../components/image-gallary"
import MobileActions from "../components/mobile-actions"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const info = useRef<HTMLDivElement>(null)

  const inView = useIntersection(info, "0px")

  return (
    <ProductProvider product={product}>
      <div className="content-container flex flex-col small:flex-row small:items-center small:justify-between py-6 relative max-w-1920 m-auto space-x-20">
        <div className="flex flex-col gap-y-8 w-1/2">
          <ImageGallery images={product?.images || []} />
        </div>
        <div
          className="small:sticky small:top-20 w-full py-8 small:py-0 flex flex-col gap-y-12"
          ref={info}
        >
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
      </div>
      <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} />
      </div>
      <MobileActions product={product} show={!inView} />
    </ProductProvider>
  )
}

export default ProductTemplate
