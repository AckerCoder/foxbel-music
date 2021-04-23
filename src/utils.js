import axios from 'axios';

const searchTrack = (track)=>{
	// let result;
	return axios({
		"method":"GET",
		"url":"https://deezerdevs-deezer.p.rapidapi.com/search",
		"headers":{
			"content-type":"application/octet-stream",
			"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key":"3b6d4af59emsh5688f38f2582b5fp1abdb4jsn9c759fba24fa",
			"useQueryString":true
		},
		"params":{
		"q":track
		}
		})
		.then((response)=>{
			return response;
		})
		.catch((error)=>{
		console.log(error)
		})

	// return result;
}

export default searchTrack;