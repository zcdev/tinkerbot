import PortableTextBlock from "./PortableTextBlock";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
export default function GameplayHighlight({ highlights }: any) {
    return (
        <div>
            {highlights.map((highlight: any) => (
                <div key={highlight.title} className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-12">
                    <div className="w-full aspect-6/2 overflow-hidden rounded-xl mb-12">
                        <Image
                            src={urlFor(highlight.image).auto("format").url()}
                            alt={highlight.title}
                            width={1619}
                            height={917}
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                    </div>
                    <div className="text-black">
                        <h6 className="text-2xl mt-2">{highlight.title}</h6>
                        <PortableTextBlock value={highlight.description} />
                    </div>
                </div>
            ))}
        </div>
    );
}