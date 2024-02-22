import { Block } from 'payload/types'

const RichText: Block = {
	slug: 'richText',
	labels: {
		singular: 'Rich Text',
		plural: 'Rich Texts',
	},
	fields: [
		{
			name: 'text',
			label: 'Text',
			type: 'richText',
		},
	],
}

export default RichText
