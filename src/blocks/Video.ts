import { Block } from 'payload/types'

const Video: Block = {
	slug: 'video',
	labels: {
		singular: 'Video',
		plural: 'Videos',
	},
	fields: [
		{
			name: 'video',
			label: 'Video',
			type: 'upload',
			relationTo: 'media',
		},
	],
}

export default Video
