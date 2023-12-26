const fetchRequest = async (requestUrl: string) => {
	try {
		const request = await fetch(requestUrl);
		const response = await request.json();
		return response;
	} catch (err) {
		console.log(err);
		return null;
	}
}

export { fetchRequest };