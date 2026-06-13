import Image, { ImageProps } from 'next/image';

interface IAutoHeightImage extends Omit<ImageProps, 'width' | 'height'> {
  alt: string;
}

export default function AutoHeightImage({ alt = '', ...props }: IAutoHeightImage) {
  return (
    <Image
      {...props}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
