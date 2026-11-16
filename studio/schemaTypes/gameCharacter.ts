import { defineField, defineType } from "sanity";

export const gameCharacter = defineType({
    name: 'gameCharacter',
    title: 'Game Character',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Character Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'description',
            title: 'Character Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),

        defineField({
            name: 'image',
            title: 'Character Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
    ]
});