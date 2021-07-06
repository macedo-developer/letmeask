import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/userAuth";

interface PrivateRouteProps extends RouteProps {}

export function PrivateRoute({ ...rest }: PrivateRouteProps) {
  const { user } = useAuth();

  if (!user) return <Redirect to="/" />;

  return <Route {...rest} />;
}
