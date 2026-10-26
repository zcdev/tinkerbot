import Image from "next/image";

export default function Hero() {
    return (
        <Image src="/tinkerbot-homepage-hero.png" alt="Game logo" width="1200" height="200" className="full-width rounded-xl" loading="eager" />
    );
}