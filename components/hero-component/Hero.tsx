import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <div className=" banner">
      <div className="hero">
        <div className="text">
          <h1 className="font-montserrat text-[#000000]  ">Making Real Estate More Accessible to All</h1>
          <p className="font-dm-sans">
            Bringing a better and faster means for developers to raise funds,
            while giving individual investors fractional ownership of real world assets.
          </p>
          <div className="button-holder">
            <Link
              href="#"
              className="invest-button font-dm-sans"
            >
              Invest
            </Link>
            <Link
              href="#"
              className="develop-button font-dm-sans"
            >
              Develop
            </Link>
          </div>
        </div>

        <div className="main-img">
          <Image
            src="/hero-section/stream-hero-img.webp"
            alt="Stream Property"
            width={500}
            height={400}
            className="object-cover rounded-2xl"
            priority
          />
          <div className="label">
            <h4>STREAM</h4>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="asset-card assetcard1">
          <Image
            src="/hero-section/jos-estate-hero-img.webp"
            alt="Jos Estate"
            width={200}
            height={200}
            className="object-cover"
          />
          <h4>JOS ESTATE</h4>
          <h5>Port Harcourt, Nigeria</h5>
        </div>

        <div className="asset-card assetcard2">
          <Image
            src="/hero-section/moneyland-hero-img.webp"
            alt="Money Land"
            width={200}
            height={200}
            className="object-cover"
          />
          <h4>MONEYLAND</h4>
          <h5>Calabar, Nigeria</h5>
        </div>

        <div className="asset-card assetcard3">
          <Image
            src="/hero-section/everclear-hero-img.webp"
            alt="Everclear"
            width={200}
            height={200}
            className="object-cover"
          />
          <h4>EVERCLEAR</h4>
          <h5>Delta, Nigeria</h5>
        </div>

        <div className="asset-card assetcard4">
          <Image
            src="/hero-section/hola-hero-img.webp"
            alt="Hola"
            width={200}
            height={200}
            className="object-cover"
          />
          <h4>HOLA</h4>
          <h5>Lagos, Nigeria</h5>
        </div>
      </div>
    </div>
  );
}