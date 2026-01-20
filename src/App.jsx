import React from "react"; 

const App = () => {
  return (

    <main>
      <div className="pattern" />
      
      {/*This will wrap our header tag */}
      <div className="wrapper"> 
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle</h1>
        </header>

        <p>Search</p>

      </div>
    </main>
  )
}

export default App;