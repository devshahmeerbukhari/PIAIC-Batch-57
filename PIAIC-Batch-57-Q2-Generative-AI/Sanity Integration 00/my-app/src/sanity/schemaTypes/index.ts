import { type SchemaTypeDefinition } from 'sanity'
import { hotelsType } from '../schema/Hotels'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hotelsType],
}
