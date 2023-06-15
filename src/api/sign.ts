import axios from "axios";
import handleApiError from "../utils/handleApiError";
import { SignData, SignApiResponse } from "./api";
export const API_URL = "https://www.pre-onboarding-selection-task.shop";

const signUp = async ({
  email,
  password,
}: SignData): Promise<SignApiResponse> => {
  try {
    const { status } = await axios.post(
      `${API_URL}/auth/signup`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      status,
    };
  } catch (e: unknown) {
    return handleApiError(e);
  }
};

const signIn = async ({
  email,
  password,
}: SignData): Promise<SignApiResponse> => {
  try {
    const { status, data } = await axios.post(
      `${API_URL}/auth/signin`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      status,
      data,
    };
  } catch (e: unknown) {
    return handleApiError(e);
  }
};

export { signUp, signIn };
