import { gameQuery, homeQuery } from '@/sanity/queries';
import { cachedFetch } from '@/sanity/util';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GameCard from '@/components/GameCard';

export default async function Home() {
  const home = await cachedFetch(homeQuery);
  const games = await cachedFetch(gameQuery, {
    slug: null,
  });

  return (
    <main className="flex flex-col lg:flex-row pt-6">
      <div className="w-full lg:w-[1150px] bg-black p-6 rounded-xl h-auto lg:h-[1189px] mb-6 lg:mb-0 lg:mr-12">
        <Header />
        <section>
          <Hero mobileImage={home.thumbnail} desktopImage={home.hero} location="home" />
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
      <aside className="w-full lg:max-w-[440px] h-auto lg:h-[1189px] overflow-none lg:overflow-y-auto lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
        {games.map((game: any) => (
          <GameCard key={game._id} game={game} location="home" />
        ))}
      </aside>
    </main>
  );
}
