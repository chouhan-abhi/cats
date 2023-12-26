export type IDirectories = {
	isFolder: boolean,
	title: string,
	description: string,
	subfolders: IDirectories[] | null
}

const directories: IDirectories[] = [
	{
		title: 'File 1',
		description: 'File 1',
		subfolders: null,
		isFolder: false
	},
	{
		title: 'Folder 1',
		description: 'Folder 1',
		subfolders: [
			{
				title: 'File 1.2',
				description: 'File 2',
				subfolders: null,
				isFolder: false
			},
			{
				title: 'Folder 1.2',
				description: 'Folder 2',
				subfolders: null,
				isFolder: true
			},
			{
				title: 'File 1.3',
				description: 'File 3',
				subfolders: null,
				isFolder: false
			},
		],
		isFolder: true
	},
	{
		title: 'File 2',
		description: 'File 1',
		subfolders: null,
		isFolder: false
	},
	{
		title: 'File 3',
		description: 'File 1',
		subfolders: null,
		isFolder: false
	},
	{
		title: 'File 4',
		description: 'File 1',
		subfolders: null,
		isFolder: false
	},
	{
		title: 'Folder 2',
		description: 'Folder 1',
		subfolders: [
			{
				title: 'File 2.2',
				description: 'File 2',
				subfolders: null,
				isFolder: false
			},
			{
				title: 'Folder 2.2',
				description: 'Folder 2',
				subfolders: [{
					title: 'Folder 1',
					description: 'Folder 1',
					subfolders: [
						{
							title: 'File 2.2.1',
							description: 'File 2',
							subfolders: null,
							isFolder: false
						},
						{
							title: 'Folder 2.2.2',
							description: 'Folder 2',
							subfolders: null,
							isFolder: true
						},
						{
							title: 'File 2.2.3',
							description: 'File 3',
							subfolders: null,
							isFolder: false
						},
					],
					isFolder: true
				}],
				isFolder: true
			},
			{
				title: 'File 1.3',
				description: 'File 3',
				subfolders: null,
				isFolder: false
			},
		],
		isFolder: true
	},
];

export default directories;