import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const useAuth = () => {
  const [user] = useAuthState(auth);
  return { user };
};

export default useAuth;
