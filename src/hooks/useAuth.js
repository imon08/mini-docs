import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  return { user, loading };
};

export default useAuth;
