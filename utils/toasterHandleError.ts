import axios from "axios";
import toast from "react-hot-toast";

export const toasterHandleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error?.response?.status === 401) {
      toast.error("The token expired.");
    }
    if (error?.response?.status === 404) {
      toast.error("Page not found");
    }
    if (error?.response?.status === 409) {
      toast.error("User with this phone or email already exist");
    }
    if (error?.response?.status === 422) {
      toast.error("Validation failed");
    }
  } else {
    toast.error("Something went wrong...");
  }
};

export const toasterHandleErrorPositions = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error?.response?.status === 404) {
      toast.error("Page not found");
    }
    if (error?.response?.status === 422) {
      toast.error("Positions not found");
    }
  } else {
    toast.error("Something went wrong...");
  }
};
