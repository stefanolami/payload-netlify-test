import { Block } from 'payload/types'

const Paragraph: Block = {
	slug: 'paragraph',
	labels: {
		singular: 'Paragraph',
		plural: 'Paragraphs',
	},
	fields: [
		{
			name: 'text',
			label: 'Text',
			type: 'textarea',
		},
	],
}

export default Paragraph
