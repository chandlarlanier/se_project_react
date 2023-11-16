import { useContext } from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ProtectedRoute = ({ children, isLoggedIn, ...props }) => {
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
};

export default ProtectedRoute;
