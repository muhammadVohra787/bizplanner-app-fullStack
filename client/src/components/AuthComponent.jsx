import { useEffect } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

export const useAuthLogging = () => {
  const authUser = useAuthUser();

  useEffect(() => {
    if (authUser) {
      console.log("User is authenticated");
    } else {
      console.log("User is not authenticated");
    }
  }, [authUser]);
};
