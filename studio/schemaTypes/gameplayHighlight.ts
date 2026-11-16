import { defineField, defineType } from "sanity";

export const gamePlayHighlight = defineType({
    name: 'gameplayHighlight',
    title: 'Gameplay Highlight',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Gameplay Highlight Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'description',
            title: 'Gameplay Highlight Description',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'image',
            title: 'Gameplay Highlight Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        })
    ]
});