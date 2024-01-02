import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/actions/getUser.action";

const useUser = () => {
  const { loading, data } = useQuery(GET_USER);
  console.log(new Date(Date.now()));
  console.log(data);
  return {
    loading,
    user: data?.getLoggedInUser?.user,
  };
};

export default useUser;