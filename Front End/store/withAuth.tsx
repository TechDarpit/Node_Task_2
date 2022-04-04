import { useRouter } from "next/router";
import { useAuth } from "./auth-context";

const withAuth = (WrappedComponent: any) => {
  return (props: JSX.IntrinsicAttributes) => {
    const { login, logout } = useAuth();
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("TOKEN");

      if (!accessToken) {
        Router.replace("/signin");
        return null;
      }
      login(accessToken);

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
