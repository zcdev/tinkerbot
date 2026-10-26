import Link from "next/link";
import Hero from "./Hero";

export default function GameCard({ game }: any) {

    return (
        <div className="w-full max-w-md mb-4 flex flex-col">
            <Link href={game.slug}>
                <Hero mobileImage={game.thumbnail} desktopImage={game.hero} />
            </Link>
            <div className="flex justify-between pt-2">
                <h3 className="text-black text-xl inline">{game.title}</h3>
                <Link href={game.slug} className="bg-black text-white text-sm font-bold text-right rounded-lg px-2 py-1">Play now</Link>
            </div>
            <p className="text-black">{game.description}</p>
        </div>
    );
}