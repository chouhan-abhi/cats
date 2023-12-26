import React, { useState } from "react";
import { IDirectories } from "./MockData";

const Directories = (props: {directories: IDirectories[] | null}) => {
	const { directories } = props;

	const File = (param: {directory: IDirectories}) => <li>{param?.directory?.title}</li>

	const Folder = (param: {directory: IDirectories}) => {
		const [isExpand, setIsExpand] = useState(false);
		const handleOnClick = () => setIsExpand(prev => !prev)
		return (
			<div>
				<li onClick={handleOnClick}>
					{isExpand ? "-" : '+'}
					<b>{param.directory.title}</b>
				</li>
				{isExpand && <Directories directories={param.directory.subfolders} />}
			</div>
		)
	}

	const handleDirectoryType = (directory: IDirectories) => {
		return directory.isFolder ? <Folder directory={directory} /> : <File directory={directory} />;
	}

	if(directories === null) return <></>;
	if(!directories) return 'Loading...';
	return directories?.map(directory => <li>{handleDirectoryType(directory)}</li>)
}
export default Directories;