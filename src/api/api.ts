import axios, { Axios, AxiosResponse } from "axios";

const API_URL = "https://www.pre-onboarding-selection-task.shop";

export interface SignData {
  email: string;
  password: string;
}

export interface CommonApiResponse {
  status: number;
  data?: Object;
  errorMessage?: string;
}

const signUp = async ({
  email,
  password,
}: SignData): Promise<CommonApiResponse> => {
  try {
    const res = await axios.post(
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
      status: res.status,
    };
  } catch (e: unknown) {
    let errorMessage = "";
    if (e instanceof Error) {
      errorMessage = e.message;
    } else {
      errorMessage = "Unexpected error is occured";
    }
    return {
      status: 400,
      errorMessage: errorMessage,
    };
  }
};

const signIn = async ({ email, password }: SignData) => {
  try {
    const res = await axios.post(
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
      status: res.status,
      data: res.data,
    };
  } catch (e) {
    let errorMessage = "";
    if (e instanceof Error) {
      errorMessage = e.message;
    } else {
      errorMessage = "Unexpected error is occured";
    }
    return {
      status: 400,
      errorMessage: errorMessage,
    };
  }
};

export { signUp, signIn };
