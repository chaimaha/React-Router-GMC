import React, { useState } from "react";

import "./App.css";

import { moviesData } from "./data";

import Footer from "./Component/Footer/Footer";
import MovieList from "./Component/MovieList/MovieList";
import Navbar from "./Component/Navbar/Navbar";
import AddMovie from "./Component/AddMovie/AddMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Trailer from "./Component/Trailer/Trailer";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <Navbar
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
        searchRating={searchRating}
      />
      <Switch>
        <Route path="/trailer" component={Trailer}></Route>
        <Route exact path="/">
          <div
            style={{
              display: "flex",
              alignContent: "flex-start",
              marginTop: "5%",
            }}
          >
            <AddMovie handleMovie={handleMovie} />
            <MovieList
              movies={movies}
              searchTitle={searchTitle}
              searchRating={searchRating}
            />
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
