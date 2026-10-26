import Link from "next/link";
import { urlFor } from "@/sanity/image";

type CardProps = {
    url: string;
    label: string;
    image?: {
        asset?: {
            _ref: string;
            _type: "reference";
        };
        _type: "image";
    };
};

export default function GameCard({ game }: any) {
    //const thumbnail = urlFor(game.thumbnail).width(2000).url();
    console.log(game, "game");
    return (
        <div className="relative mx-auto w-full max-w-sm pt-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            {/*             <img
                src={thumbnail}
                alt={game.title}
                className="relative z-20 w-full object-cover"
            /> */}
            <div className="w-full"><Link href={game.slug}>{game.title}</Link></div>
        </div>
    );
}