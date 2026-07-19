import { FC, useState } from 'react';

import Image, { ImageProps } from 'next/image';

import { blurDataURL } from '@config/bigContents';

interface IProps extends ImageProps {
  fallbackSrc: string;
}

const ImageFallback: FC<IProps> = (props) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(false);
  const [oldSrc, setOldSrc] = useState(src);

  const onError = () => setImgSrc(true);

  if (oldSrc !== src) {
    setImgSrc(false);
    setOldSrc(src);
  }

  return (
    <Image
      {...{ ...rest, alt, blurDataURL, onError }}
      src={imgSrc ? fallbackSrc : src}
      placeholder="blur"
    />
  );
};

export default ImageFallback;
