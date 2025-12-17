import Image from "next/image";

export default function HeroBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Image
        src="/hero-img.jpg"
        alt="Graffix Studio Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        style={{ width: '100%', height: '100%', opacity: 0.6 }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)',
        }}
      />
    </div>
  );
}
