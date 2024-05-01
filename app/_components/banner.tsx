import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
}
const Banner = ({ src, alt }: BannerProps) => {
  return (
    <div className="h-auto w-full">
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={0}
        height={0}
        className="fill h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
};

export default Banner;
