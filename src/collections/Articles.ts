import { CollectionConfig } from 'payload/types'

import Heading from '../blocks/Heading'
import SubHeading from '../blocks/SubHeading'
import Paragraph from '../blocks/Paragraph'
import Image from '../blocks/Image'
import Quote from '../blocks/Quote'
import RichText from '../blocks/RichText'
import Video from '../blocks/Video'

const Articles: CollectionConfig = {
	slug: 'articles',
	labels: {
		singular: 'Article',
		plural: 'Articles',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			label: 'Slug',
			type: 'text',
			required: true,
		},
		{
			name: 'layout',
			label: 'Layout',
			type: 'blocks',
			blocks: [
				Heading,
				SubHeading,
				Paragraph,
				Image,
				Quote,
				RichText,
				Video,
			],
		},
	],
}

export default Articles
