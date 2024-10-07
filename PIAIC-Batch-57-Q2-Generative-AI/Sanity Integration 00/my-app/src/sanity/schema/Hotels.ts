import { defineField, defineType } from "sanity";


export const hotelsType = defineType({
    name: "Hotels",                        /**[_type == "Hotels"]*/
    title: "Hotels",
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
            name: "Phone",
            type: "string"
        }),
        defineField({
            name: "Image",
            type: "image"
        }),
    ]
})