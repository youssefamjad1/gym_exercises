
export const exerciseOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'b2de16a621msh88249c62e32741ap152e38jsnf9c4e1a13519'
  }
};




export const fetchData = async (url, options) => {
const response= await fetch (url, options);
const data = await response.json();
return data;

}