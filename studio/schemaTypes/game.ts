import { defineField, defineType } from 'sanity';

export const gameType = defineType({
    name: 'game',
    title: 'Games',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Game Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),

        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: 'storyline',
            title: 'Storyline',
            type: 'text',
            rows: 8,
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
            media: 'heroImage',
        },
    },
});