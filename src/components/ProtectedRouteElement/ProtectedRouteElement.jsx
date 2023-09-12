import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  if (props.friends.length === 0) {
    return <Navigate to='/' replace />;
  } else {
    return <Component {...props} />;
  }
};

export default ProtectedRouteElement;
