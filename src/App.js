import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


function App() {
  //constant with API key
  const apiKey ="4d5e870f"
 
  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to get movies
  const getMovie = async(searchTerm) => {
  //Make fetch request and store the response
   const response =await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
   );
   //Parse Json response into a JavaScript object
   const data = await response.json();
   //Set the Movie state to the received data
   setMovie(data);
  };


  //We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay />
    </div>
  );
}

export default App;