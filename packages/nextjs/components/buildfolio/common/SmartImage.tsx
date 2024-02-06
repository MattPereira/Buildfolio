import { useMemo } from "react";
import Image from "next/image";

interface SmartImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Component to render images using next Image if the src is from an allowed domain
 * because will cause failure to build if you pass in src that is not from an allowed domain
 *
 * @dev make sure allowedDomains matches next.config.js image.domains configuration
 */

const allowedDomains = ["ipfs.io", "assets.poap.xyz", "storage.googleapis.com", "prod-metadata.s3.amazonaws.com"];

export const SmartImage = ({ src, alt, width, height }: SmartImageProps) => {
  const useNextImage = useMemo(() => {
    try {
      const url = new URL(src);
      return allowedDomains.includes(url.hostname);
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
