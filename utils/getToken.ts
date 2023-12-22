import axios from "axios";
import toast from "react-hot-toast";

const getToken = async () => {
  try {
    const response = await axios.get(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    return response.data.token;
  } catch (error) {
    toast.error("Something went wrong...");
  }
};

export default getToken;
