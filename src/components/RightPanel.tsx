import React, { useState, useEffect, Suspense } from "react";
import { fetchRequest } from "./utilComponents/utils.ts";
import Shimmer from "./utilComponents/Shimmer.tsx";
import { Spinner } from "react-bootstrap";

const GenericCard = React.lazy(() => import("./utilComponents/Card.tsx"));

const RightPanel = () => {
	const [dataSet, setDataSet] = useState<any[]>();

	useEffect(() => {
		const setData = async () => {
			const getFacts = fetchRequest('https://cat-fact.herokuapp.com/facts');
			const getImages = fetchRequest('https://api.thecatapi.com/v1/images/search?limit=5');
			const [facts, images] = await Promise.all([getFacts, getImages]);
			const augmentedFacts = facts?.map((fact, index) => ({ ...fact, url: images?.[index]?.url })) ?? undefined;
			console.log(augmentedFacts);
			setDataSet(augmentedFacts);
		};
		setData();
	}, []);

	if (dataSet?.length) return dataSet.map((data, index) =>
		<Suspense fallback={<Shimmer />}>
			<GenericCard title={`Fact: ${index + 1}`} text={data.text} url={data.url} />
		</Suspense>
	)
	return <span>
		<Spinner animation="grow" variant="primary" />
		<Spinner animation="grow" variant="primary" />
		<Spinner animation="grow" variant="primary" />
	</span>;
}

export default RightPanel;