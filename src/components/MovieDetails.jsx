import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = function () {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=a73390c1&i=` + params.movieId);
        if (!response.ok) {
          throw new Error("Response was not ok.");
        }
        const movieData = await response.json();
        setMovie(movieData);
        const commentsResponse = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + params.movieId, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZiMDM5ODcxNzQ3YjAwMWExYjAzMjIiLCJpYXQiOjE3MTA5NDkyNzIsImV4cCI6MTcxMjE1ODg3Mn0.L6UQmdjlfF8O9mWZrheBtlGywgpODbYNPNY58nIweuo",
          },
        });
        if (!commentsResponse.ok) {
          throw new Error("Unable to fetch comments.");
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        navigate("/notfound");
      }
    };

    fetchMovieDetails();
  }, [params.movieId, navigate]);

  // if (isLoading) {
  //   return <Spinner animation="border"></Spinner>;
  // }

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
            <Card.Title>Comments</Card.Title>
            <Card.Text>
              <div>
                <ul>
                  {comments.map((comment, i) => (
                    <li key={i}>{comment.comment}</li>
                  ))}
                </ul>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
