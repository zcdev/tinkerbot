import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { ComponentPropsWithoutRef } from "react";

const components = {
    block: {
        normal: ({ children }: ComponentPropsWithoutRef<"p">) => (
            <p className="text-lg mb-6">
                {children}
            </p>
        ),
        h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
            <h2 className="mb-4 mt-8 text-2xl font-bold">
                {children}
            </h2>
        ),
        h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
            <h3 className="my-4 text-xl font-semibold">
                {children}
            </h3>
        ),
    },
};

export default function PortableTextDisplay({ value }: { value: PortableTextBlock[]; }) {
    return <PortableText value={value} components={components} />;
};