import { AxiosError } from "axios";
import { CommonApiResponse } from "../api/api";
const handleApiError = (e: unknown): CommonApiResponse => {
  let errorMessage = "";
  let status = 0;
  if (e instanceof AxiosError) {
    errorMessage = e.message;
    status = e.response!.status;
  } else {
    errorMessage = "Unexpected error is occured";
  }
  return {
    status,
    errorMessage,
  };
};

export default handleApiError;
