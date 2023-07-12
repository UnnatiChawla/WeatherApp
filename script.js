
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b4e5a75d23mshaa132a54be9f379p1f377ejsn9715c9a2ef2b',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}