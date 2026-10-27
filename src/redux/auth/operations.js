import { createAsyncThunk } from "@reduxjs/toolkit";

import API, { setAuthHeader, clearAuthHeader } from "../../services/api";

const toRejected = (e, messages = {}) => ({
  message:
    messages[e.response?.status] || e.response?.data?.message || e.message,
  status: e.response?.status ?? null,
});

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        toRejected(e, {
          400: "Registration failed. This email may already be in use.",
        }),
      );
    }
  },
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        toRejected(e, { 400: "Invalid email or password." }),
      );
    }
  },
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await API.post("/users/logout");
  } catch (e) {
    return thunkAPI.rejectWithValue(toRejected(e));
  } finally {
    clearAuthHeader();
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const { data } = await API.get("/users/current");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(toRejected(e));
    }
  },
  {
    condition: (_, { getState }) => {
      const { token, isRefreshing } = getState().auth;
      return token !== null && !isRefreshing;
    },
  },
);
