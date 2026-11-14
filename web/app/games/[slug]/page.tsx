import { gameQuery } from '@/sanity/queries';
import { cachedFetch } from '@/sanity/util';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PillList from '@/components/PillList';
import { PortableText } from '@portabletext/react';
export const instant = false;

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Game({ params }: Props) {
    const { slug } = await params;
    const games = await cachedFetch(gameQuery, { slug });
    const game = games.find((game: any) => game.slug === slug);

    const components = {
        block: {
            normal: ({ children }: any) => (
                <p className="text-lg text-white mb-6">
                    {children}
                </p>
            ),
            h2: ({ children }: any) => (
                <h2 className="mb-4 mt-8 text-2xl font-bold">
                    {children}
                </h2>
            ),
            h3: ({ children }: any) => (
                <h3 className="mb-3 mt-6 text-xl font-semibold">
                    {children}
                </h3>
            ),
        },
    };

    const GameStory = ({ value }: any) => {
        return <PortableText value={value} components={components} />;
    };

    return (
        <main className="flex flex-col lg:flex-row pt-6">
            <div className="w-full w-[1632px] bg-black p-6 rounded-xl h-auto mb-6 lg:mb-0">
                <Header />
                <section>
                    <aside className="flex">
                        <div className="w-full w-[1150px]">
                            <Hero mobileImage={game.thumbnail} desktopImage={game.hero} location="home" />
                        </div>
                        <div className="w-full max-w-[440px] ml-6">
                            <h2 className="text-2xl text-sky-400 mb-6">What you'll learn:</h2>
                            <PillList skills={game.skills} />
                        </div>
                    </aside>
                    <section>
                        <h3 className="text-sky-400 text-3xl mt-8 mb-6">{game.title}</h3>
                        <p className="text-xl mt-4 mb-6">
                            {game.tagline}
                        </p>
                        <GameStory value={game.story} />
                    </section>
                </section>
            </div>
        </main >
    );
}
