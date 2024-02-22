import { Block } from 'payload/types'

const Heading: Block = {
	slug: 'heading',
	labels: {
		singular: 'Heading',
		plural: 'Headings',
	},
	fields: [
		{
			name: 'text',
			label: 'Text',
			type: 'text',
		},
	],
}

export default Heading
