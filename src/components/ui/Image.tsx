import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from "next/image";
import React, { useCallback, useState } from "react";

import imgDefault from "@/assets/images/common/img-default.jpg";

type Src = string | StaticImageData;

export interface ImageWithFallbackProps
  extends Omit<NextImageProps, "src" | "onError"> {
  src: Src;
  alt: string;
  fallbackSrc?: Src;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (e: any) => void;
  placeholderProp?: "blur" | "empty";
}

const DEFAULT_FALLBACK = "/images/fallback.png";

const Image: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className,
  onError,
  placeholderProp,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<Src>(src);
  const [errored, setErrored] = useState(false);

  const handleError = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e?: any) => {
      if (!errored) {
        setErrored(true);
        setCurrentSrc(fallbackSrc);
      }
      if (onError) onError(e);
    },
    [errored, fallbackSrc, onError]
  );

  return (
    <NextImage
      src={currentSrc || imgDefault}
      alt={alt}
      className={className}
      onError={handleError}
      placeholder={placeholderProp}
      {...rest}
    />
  );
};

export default Image;
