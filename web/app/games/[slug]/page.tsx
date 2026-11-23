import { gameQuery } from '@/sanity/queries';
import { cachedFetch } from '@/sanity/util';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PillList from '@/components/PillList';
import PortableTextBlock from '@/components/PortableTextBlock';
import CharacterCard from '@/components/CharacterCard';
import GameplayHighlight from '@/components/GameplayHighlight';
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

    return (
        <main>
            <section className="flex flex-col lg:flex-row pt-6">
                <section>
                    <section className="w-full w-[1632px] bg-black p-6 rounded-xl h-auto mb-6 lg:mb-0">
                        <Header />
                        <section>
                            <aside className="flex">
                                <div className="w-full w-[1150px]">
                                    <Hero mobileImage={game.thumbnail} desktopImage={game.hero} location="home" />
                                </div>
                                <div className="w-full max-w-[440px] ml-6">
                                    <h2 className="text-2xl text-sky-400">Learning Through Play:</h2>
                                    <PillList skills={game.skills} />
                                </div>
                            </aside>
                            <section>
                                <h3 className="text-sky-400 text-3xl mt-8 mb-6">{game.title}</h3>
                                <p className="text-xl mt-4 mb-6">
                                    {game.tagline}
                                </p>
                                <PortableTextBlock value={game.story} />
                            </section>
                        </section>
                    </section>
                    <section className="flex flex-col w-full w-[1632px] mt-12">
                        <h4 className='text-3xl text-black mb-6'>Meet the Characters</h4>
                        <CharacterCard characters={game.gameCharacters} />
                        <h5 className='text-3xl text-black mb-6'>Gameplay Highlights</h5>
                        <GameplayHighlight highlights={game.gameplayHighlights} />
                    </section>
                </section>
            </section>
        </main>
    );
}
