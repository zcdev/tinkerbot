import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { getImageDimensions } from '@sanity/asset-utils';

export default function Hero({ mobileImage, desktopImage, alt, location }: any) {

    const { width: mobileWidth, height: mobileHeight } = getImageDimensions(mobileImage);

    const { width: desktopWidth, height: desktopHeight } = getImageDimensions(desktopImage);

    return (
        <>
            {location === "home" ? (
                <Image
                    src={urlFor(desktopImage).auto("format").url()}
                    width={desktopWidth}
                    height={desktopHeight}
                    alt="TinkerBot Homepage Hero"
                    className="hero rounded-xl"
                    loading="eager"
                />
            ) : (
                <>
                    <Image
                        src={urlFor(mobileImage).auto("format").url()}
                        width={mobileWidth}
                        height={mobileHeight}
                        alt={alt}
                        className="hero md:hidden rounded-xl"
                    />

                    <Image
                        src={urlFor(desktopImage).auto("format").url()}
                        width={desktopWidth}
                        height={desktopHeight}
                        alt={alt}
                        className="hero hidden md:block rounded-xl"
                    />
                </>
            )}
        </>
    );
}