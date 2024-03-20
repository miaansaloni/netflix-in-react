import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = function () {
  const [movie, setmovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=a73390c1&i=` + params.imdbID);
        if (!response.ok) {
          throw new Error("Response was not ok.");
        }
        const data = await response.json();
        setmovie(data);
      } catch (error) {
        // navigate("/notfound");
      }
    };

    fetchMovieDetails();
  }, [params.imdbID]);

  if (isLoading) {
    return <Spinner animation="border"></Spinner>;
  }

  return (
    <div>
      {!movie && (
        <div className="text-center mt-3">
          <Spinner animation="border" />
        </div>
      )}
      {movie && (
        <Card>
          <Card.Img src={movie.Poster} alt="movie poster" />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Plot}</Card.Text>
            <Card.Text>Released in: {movie.Released}</Card.Text>
            <Card.Text>Genre: {movie.Genre}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
