import { ImHome3 } from "react-icons/im";
import Link from "next/link";

export default function Nav({ games }: any) {
    return (
        <nav className="flex flex-col lg:flex-row items-center">
            <ImHome3 style={{ fontSize: 50, color: 'black', marginRight: 12 }} />
            {games.map((game: any) => (
                <Link key={game._id} href={game.slug} className="link text-black text-xl font-bold block lg:inline py-1 md:px-6 underline">{game.title}</Link>
            ))}
        </nav>
    );
}