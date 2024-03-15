import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";

class TrendingNow extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=a73390c1&s=${this.props.searchSaga}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Response was not ok.");
      })
      .then((data) => {
        if (data && data.Search) {
          const movies = data.Search.slice(0, 6);
          this.setState({ movies });
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        this.setState({ isError: true });
      });
  }

  render() {
    const { movies, isError } = this.state;

    if (isError) {
      return <div>Error: {isError}</div>;
    }

    return (
      <Container fluid>
        <h4>{this.props.searchSaga}</h4>
        <Row className="g-1 mb-4">
          {movies.map((movie, movieIndex) => (
            <Col key={movieIndex} className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 mb-2 text-center px-1">
              <div id="imgcontainer">
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TrendingNow;
