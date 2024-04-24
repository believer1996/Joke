export async function getJoke(){
const data= await fetch('https://official-joke-api.appspot.com/random_joke')
const response=await data.json();

return response;
}