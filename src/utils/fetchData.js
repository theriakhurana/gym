export const exerciseOptions = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': 'f2e8fed517msh75d69d02777162fp150515jsn324afcd513be',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) =>{
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}