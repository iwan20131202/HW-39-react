import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "../services/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/contacts");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await API.post("/contacts", { name, number });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await API.delete(`/contacts/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
