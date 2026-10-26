import { gameQuery, homeQuery } from '@/sanity/queries';
import { cachedFetch } from '@/sanity/util';
import Hero from '@/components/Hero';
import GameCard from '@/components/GameCard';
import Header from '@/components/Header';

export default async function Home() {
  const home = await cachedFetch(homeQuery);

  const games = await cachedFetch(gameQuery);

  return (
    <main className="flex my-3">
      <section className="max-w-6xl bg-black my-10 mr-10 p-6 rounded-xl h-[1189px]">
        <Header />
        <section>
          <Hero mobileImage={home.thumbnail} desktopImage={home.hero} />
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
      </section>
      <section className="mt-10 h-[1189px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {games.map((game: any) => (
          <GameCard key={game._id} game={game} />
        ))}
      </section>
    </main>
  );
}
