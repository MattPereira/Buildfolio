import { useMemo } from "react";
import Image from "next/image";
import { allowedImageDomains } from "~~/utils/constants";

// Define an interface for the component props
interface SmartImageProps {
  src: string;
  alt: string;
  width: number; // Allowing string to accommodate CSS values like "100%"
  height: number; // Allowing string for CSS values as well
}

export const SmartImage = ({ src, alt, width, height }: SmartImageProps) => {
  const useNextImage = useMemo(() => {
    try {
      const url = new URL(src);
      return allowedImageDomains.includes(url.hostname);
    } catch (error) {
      return false;
    }
  }, [src]);

  if (useNextImage) {
    return <Image src={src} alt={alt} width={width} height={height} />;
  } else {
    return <img src={src} alt={alt} style={{ width: "100%", height: "auto" }} />;
  }
};
