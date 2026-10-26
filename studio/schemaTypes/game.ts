import { defineField, defineType } from 'sanity';

export const game = defineType({
    name: 'game',
    title: 'Game',
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
            name: 'story',
            title: 'story',
            type: 'text',
            rows: 8,
        }),

        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: 'skills',
            title: 'Learning Adventures',
            description: 'Skills children develop through gameplay.',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.min(1).max(5),
        }),
    ],
});