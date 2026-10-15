import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from "next/image";
import React, { useCallback, useEffect, useState } from "react";

import imgDefault from "@/assets/images/common/img-default.jpg";

type Src = string | StaticImageData;

export interface ImageWithFallbackProps
  extends Omit<NextImageProps, "src" | "onError"> {
  src?: Src | null;
  alt: string;
  fallbackSrc?: Src;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (e: any) => void;
  placeholderProp?: "blur" | "empty";
}

function resolveSrc(src?: Src | null, fallback: Src = imgDefault): Src {
  if (!src || (typeof src === "string" && !src.trim())) return fallback;
  return src;
}

const Image: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = imgDefault,
  className,
  onError,
  placeholderProp,
  fill,
  width,
  height,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<Src>(() =>
    resolveSrc(src, fallbackSrc)
  );
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setCurrentSrc(resolveSrc(src, fallbackSrc));
    setErrored(false);
  }, [src, fallbackSrc]);

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
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      placeholder={placeholderProp}
      fill={fill}
      {...(!fill && {
        width: width ?? 400,
        height: height ?? 600,
      })}
      {...rest}
    />
  );
};

export default Image;
