import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NotFound = function () {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mt-5">
        <h2>404 - Not Found</h2>
      </div>
      <Button
        variant="primary"
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </Button>
    </>
  );
};

export default NotFound;
