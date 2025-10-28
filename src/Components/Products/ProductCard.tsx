import Image from "next/image";
import { StaticImageData } from "next/image";
import RoundedActionButton from "../Common/Button";

interface ProductCardProps {
	id: string;
	img: StaticImageData;
	title: string;
	desc: string;
	outfitClassName: string;
}

const ProductCard = ({
	id,
	img,
	title,
	desc,
	outfitClassName,
}: ProductCardProps) => {
	return (
		<div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border-b-6 black">
			<div className="relative w-full h-52">
				<Image
					src={img}
					alt={title}
					fill
					className="object-cover rounded-t-2xl"
				/>
			</div>
			<div className="p-6 flex flex-col justify-between h-[260px]">
				<div>
					<h3
						className={`text-lg md:text-2xl font-bold mb-3 text-gray-900 ${outfitClassName}`}
					>
						{title}
					</h3>
					<p
						className={`text-sm text-[#37393C] leading-relaxed ${outfitClassName} font-normal line-clamp-5`}
					>
						{desc}
					</p>
				</div>
				<div
					className={`mt-4 inline-flex items-center text-sm font-medium text-[#000000] hover:text-black transition ${outfitClassName} w-full flex justify-center md:justify-start`}
				>
					<RoundedActionButton
						text="Read More"
						textColor="text-black"
						borderColor="border-black"
						url={`/product/${id}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
