import { gameQuery } from '@/sanity/queries';
import { cachedFetch } from '@/sanity/util';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
export const instant = false;

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Game({ params }: Props) {
    const { slug } = await params;
    const games = await cachedFetch(gameQuery, { slug });
    const game = games[0];

    return (
        <main className="flex flex-col lg:flex-row pt-6">
            <div className="w-full lg:w-[1150px] bg-black p-6 rounded-xl h-auto lg:h-[1189px] mb-6 lg:mb-0 lg:mr-12">
                <Header />
                <section>
                    <Hero mobileImage={game.thumbnail} desktopImage={game.hero} location="home" />
                    <h2 className="text-sky-400 text-3xl mt-8">Where Little Minds Make Big Discoveries!</h2>
                    <p className="text-xl mt-4">
                        At TinkerBot, we believe curiosity is the beginning of every great adventure.
                    </p>
                    <p className="text-xl mt-4">
                        We create imaginative educational games that turn everyday learning into playful discoveries. From solving curious puzzles and exploring distant planets to running a bustling bakery, every adventure invites young minds to think creatively, solve problems, and discover something new.
                    </p>
                    <p className="text-xl mt-4">
                        Because learning is more fun when you're playing!
                    </p>
                </section>
            </div>
        </main>
    );
}
