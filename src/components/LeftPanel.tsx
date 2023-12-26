import React from 'react';
import directories from './utilComponents/MockData.ts';
import Directories from './utilComponents/Directories.tsx';

function LeftPanel() {
	return <div style={{ listStyleType: 'none' }}>
		<Directories directories={directories} /> 
	</div>;
}

export default LeftPanel;