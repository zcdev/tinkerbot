import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row items-center pt-10 pb-8">
            <Image src="/tinkerbot-logo.png" alt="TinkerBot logo" width="200" height="200" loading="eager" />
            <div>
                <h1 className="text-sky-400 text-5xl">TinkerBot: Little Games. Big Ideas.</h1>
                <p className="text-xl mt-2">Kick off a learning journey led by curiosity and imagination. Pick a game and let the fun begin!</p>
            </div>
        </header>
    );
}