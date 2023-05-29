import { Link } from "react-router-dom";
import "./ErrorComponent.scss";

const ErrorComponent = () => {
  return (
    <div className="error-component">
      <h1>An error has occured!</h1>
      <Link href="/">Reload </Link>
    </div>
  );
};

export default ErrorComponent;
