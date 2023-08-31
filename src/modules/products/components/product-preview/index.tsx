import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Image from "next/image"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <div className="flex flex-col items-center justify-center bg-white text-black text-xl space-y-3 py-8">
        {thumbnail !== null ? (
          <div className="w-[250px] h-[250px]">
            <Image
              src={thumbnail}
              alt="Image picture"
              width={250}
              height={250}
              className=" object-cover"
            />
          </div>
        ) : null}
        <h4 className=" text-xl">{title}</h4>
        <p className=" text-base text-[#636363]">Duration</p>
        <div className="flex items-center gap-x-2 mt-1">
          {price ? (
            <>
              {price.price_type === "sale" && (
                <span className="line-through text-base text-[#636363]">
                  {price.original_price}
                </span>
              )}
              <span
                className={clsx("text-base text-[#636363]", {
                  "text-rose-500": price.price_type === "sale",
                })}
              >
                {price.calculated_price}
              </span>
            </>
          ) : (
            <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
          )}
        </div>

        <p className="bg-button-secondary rounded-full px-8 py-4 text-white">
          Add to Cart
        </p>
      </div>
    </Link>
  )
}

export default ProductPreview
