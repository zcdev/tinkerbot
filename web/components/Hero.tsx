import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { getImageDimensions } from '@sanity/asset-utils';

export default function Hero({ mobileImage, desktopImage, location }: any) {

    const { width: mobileWidth, height: mobileHeight } = getImageDimensions(mobileImage);

    const { width: desktopWidth, height: desktopHeight } = getImageDimensions(desktopImage);

    return (
        <>
            <Image
                src={urlFor(mobileImage).width(600).auto("format").url()}
                width={mobileWidth}
                height={mobileHeight}
                alt="TinkerBot Homepage Hero"
                sizes="100%"
                className="md:hidden"
            />

            <Image
                src={urlFor(desktopImage).width(1200).auto("format").url()}
                width={desktopWidth}
                height={desktopHeight}
                alt="TinkerBot Homepage Hero"
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="hidden md:block rounded-xl"
            />
        </>
    );
}