import { Block } from 'payload/types'

const SubHeading: Block = {
	slug: 'subHeading',
	labels: {
		singular: 'Sub Heading',
		plural: 'Sub Headings',
	},
	fields: [
		{
			name: 'text',
			label: 'Text',
			type: 'text',
		},
	],
}

export default SubHeading
