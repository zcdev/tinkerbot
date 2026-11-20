import { defineField, defineType } from "sanity";

export const gameCharacter = defineType({
    name: 'gameCharacter',
    title: 'Game Character',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Game Character Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'description',
            title: 'Game Character Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),

        defineField({
            name: 'image',
            title: 'Game Character Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        })
    ]
});