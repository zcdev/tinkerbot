import PortableTextBlock from "./PortableTextBlock";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

export default function characterCard({ characters }: any) {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,288px))] gap-12">
            {characters.map((character: any) => (
                <div key={character.name} className="text-black">
                    <div className="w-full aspect-square overflow-hidden rounded-xl">
                        <Image
                            src={urlFor(character.image).auto("format").url()}
                            alt={character.name}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                    </div>
                    <h3 className="text-2xl mt-2">{character.name}</h3>
                    <PortableTextBlock value={character.description} />
                </div>
            ))}
        </div>
    );
}