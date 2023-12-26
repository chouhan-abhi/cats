import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightPanel from './RightPanel.tsx';
import Directories from './LeftPanel.tsx';

const HomeComponent = () => {

	const LeftPanelStyles = {
		height: '100vh',
		backgroundColor: '#282c34',
		color: 'white',
		padding: '6px',
	}

	const RightPanelStyles = {
		height: '100vh',
		padding: '6px',
		overflowY: 'auto',
	}

	return (
		<Container fluid>
			<Row>
				<Col style={LeftPanelStyles} sm={3}><Directories /></Col>
				<Col style={RightPanelStyles} sm={9}><RightPanel /></Col>
			</Row>
		</Container>
	)
}

export default HomeComponent;