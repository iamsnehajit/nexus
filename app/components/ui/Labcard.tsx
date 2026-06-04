import Image, { StaticImageData } from "next/image";

interface LabCardProps {
  discount: string;
  price: number;
  oldPrice: number;
  title: string;
  description: string;
  image: string;
}

export default function LabCard({
  discount,
  price,
  oldPrice,
  title,
  description,
  image,
}: LabCardProps) {
  return (
    <div className="bg-[#FFFBE4] relative p-4 rounded-xl overflow-hidden min-h-45">
      <div className="flex justify-between items-center">
        <label className="text-[16px] bg-[#F47527] py-1 px-3 rounded-[4px] text-white font-medium overflow-hidden">
          {discount}
        </label>

        <p className="dark text-[18px] font-semibold">
          ₹ {price}
          <span className="text-sm text-[#798383] line-through ml-1">
            ₹ {oldPrice}
          </span>
        </p>
      </div>

      <div className="w-[70%] z-20 relative">
        <h3 className="dark text-[16px] font-medium leading-[1.2] mb-2 mt-6">
          {title}
        </h3>

        <p className="gray3 text-sm font-medium leading-[1.2]">
          {description}
        </p>
      </div>

      <Image
            src={image}
            width={100}
            height={100}
            alt={title}
            className="absolute right-0 bottom-0 z-10 w-auto h-auto"
            />
    </div>
  );
}