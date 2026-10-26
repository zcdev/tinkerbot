import { client } from '@/sanity/client';
import { gameQuery } from '@/sanity/queries';
import Hero from '@/components/Hero';
import GameCard from '@/components/GameCard';
export default async function Home() {
  const games = await client.fetch(gameQuery);

  return (
    <main className="bg-black flex flex-col max-w-6xl">
      <Hero />
      <h2 className="text-sky-400 text-2xl mt-8">Where Little Minds Make Big Discoveries!</h2>
      <p className="text-xl mt-4">
        At TinkerBot, we believe curiosity is the beginning of every great adventure.
      </p>
      <p className="text-xl mt-4">
        We create imaginative educational games that turn everyday learning into playful discoveries. From solving curious puzzles and exploring distant planets to running a bustling bakery, every adventure invites young minds to think creatively, solve problems, and discover something new.
      </p>
      <p className="text-xl mt-4">
        Because learning is more fun when you're playing!
      </p>
      {games.map((game: any) => (
        <GameCard key={game._id} game={game} />
      ))}
    </main>
  );
}
