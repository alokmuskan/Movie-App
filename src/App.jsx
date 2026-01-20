import React, { useState } from "react"; 
import Search from "./Components/Search.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <main>
      <div className="pattern" />
      
      {/*This will wrap our header tag */}
      <div className="wrapper"> 
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle</h1>
        </header>

        {/* State fields can also be passed as props(inputs that you pass into a component) */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App;