import { Block } from 'payload/types'

const Quote: Block = {
	slug: 'quote',
	labels: {
		singular: 'Quote',
		plural: 'Quotes',
	},
	fields: [
		{
			name: 'text',
			label: 'Text',
			type: 'textarea',
		},
	],
}

export default Quote
