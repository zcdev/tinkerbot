import { PortableText } from '@portabletext/react';

const components = {
    block: {
        normal: ({ children }: any) => (
            <p className="text-lg mb-6">
                {children}
            </p>
        ),
        h2: ({ children }: any) => (
            <h2 className="mb-4 mt-8 text-2xl font-bold">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="my-4 text-xl font-semibold">
                {children}
            </h3>
        ),
    },
};

export default function PortableTextBlock({ value }: any) {
    return <PortableText value={value} components={components} />;
};