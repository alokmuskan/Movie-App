import React, { useEffect, useState } from "react"; 
import Search from "./Components/Search.jsx";

// API - Application Programming Interface - a set of rules that allows one software application to talk to another

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS ={
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState(" ");

  const fetchMovies = async () => {
    try{
      const endpoints = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoints, API_OPTIONS);

      if(!response.ok) {
        throw new Error(`Failed to fetch movies`);
      }

      const data = await response.json();
      //console.log(data);

      if(data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
      }

    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    }
  }

  useEffect( () => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      
      {/*This will wrap our header tag */}
      <div className="wrapper"> 
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle</h1>

          {/* State fields can also be passed as props(inputs that you pass into a component) */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>

      </div>
    </main>
  )
}

export default App;