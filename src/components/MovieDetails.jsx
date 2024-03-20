import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = function () {
  const [movieObject, setMovieObject] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
};
export default MovieDetails;
