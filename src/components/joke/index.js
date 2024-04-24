import React, { useEffect, useState } from "react";
import { getJoke } from "../../api/jokes";

export function Joke() {
  const [joke, setJoke] = useState();


  useEffect(() => {
    if(!joke){
    getJoke().then((joke) => {
      setJoke(joke);
    })}
  }, [joke]);

  return (
    <>
      {joke ? (
        <>
          <h1>{joke.setup}</h1>
          <h1>{joke.punchline}</h1>
        </>
      ) : (
        <img src="https://i.gifer.com/ZZ5H.gif" alt="loader" />
      )}
      <button onClick={()=>{
        setJoke('');
      }}>Refresh</button>
    </>
  );
}
