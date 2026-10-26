import { defineField, defineType } from 'sanity';

export const home = defineType({
    name: 'home',
    title: 'Homepage',
    type: 'document',
    fields: [
        defineField({
            name: 'thumbnail',
            title: 'Homepage Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: 'hero',
            title: 'Homepage Hero',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],

    preview: {
        select: {
            media: 'thumbnail',
        },
        prepare({ media }) {
            return {
                title: 'Homepage Images',
                media,
            };
        },
    },
});