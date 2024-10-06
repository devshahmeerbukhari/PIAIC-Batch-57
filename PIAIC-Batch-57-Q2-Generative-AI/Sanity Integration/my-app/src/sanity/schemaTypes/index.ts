import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from '../schema/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType],
}
