import Image from 'next/image';

const styles = {
  imgWidth: 350,
  imgHeight: 100,
  logo: 'w-[375px] print:w-[300px] h-auto cursor-pointer print:text-black print:mx-auto hide-on-print'
};

export type LogoProps = {
  src?: string;
  width?: number;
  height?: number;
  className?: string;
};

const logo = '/images/lia.png';

export function Logo(props: Readonly<LogoProps>) {
  const {className, width, height, src} = props;

  return (
    <Image
      priority
      alt="LIA Logo"
      src={src ?? logo}
      width={width ?? styles.imgWidth}
      height={height ?? styles.imgHeight}
      className={className ?? styles.logo}
      onClick={() => (window.location.href = '/')}
    />
  );
}
