import { defineType, defineField } from "sanity";

export const blogType = defineType({
    name: "Blog",
    title: "Blog",
    type: "document",
    fields: [
        defineField({
            name: "Name",
            type: "string"
        }),
        defineField({
            name: "Address",
            type: "string"
        }),
        defineField({
            name: "PhoneNumber",
            type: "string"
        }),
        defineField({
            name: "Image",
            type: "image"
        })
    ]
})