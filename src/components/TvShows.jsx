import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Component } from "react";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const TvShows = (props) => {
  // state = {
  //   movies: [],
  //   isLoading: true,
  //   isError: false,
  // };

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=a73390c1&s=` + props.searchSaga)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Response was not ok.");
      })
      .then((data) => {
        if (data && data.Search) {
          const movies = data.Search.slice(0, 6);
          setMovies(movies);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
        setIsError(true);
      });
  }, [props.searchSaga]);

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <Container fluid>
      {isLoading === true && (
        <div>
          <Spinner animation="border" />
        </div>
      )}
      {isError === true && (
        <div>
          <Alert variant="danger">Something went wrong</Alert>
        </div>
      )}
      <h4>{props.searchSaga}</h4>
      <Row className="g-1 mb-4">
        {movies.map((movie, movieIndex) => (
          <Col key={movieIndex} className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 mb-2 text-center px-2">
            <div id="imgcontainer">
              <Link to={"/details/" + movie.imdbID}>
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TvShows;
