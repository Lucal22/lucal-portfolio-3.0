import Links from '../Links';

export type ImageProps = {
  link?: string;
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
};

export default function Images({ link, src, alt, width, height }: ImageProps) {
  return (
    <Links link={link}>
      <img
        placeholder="blur"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Links>
  );
}
