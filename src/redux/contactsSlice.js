import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "./auth/operations";

// Нормалізований стан: { ids: [...], entities: { id: contact } }
export const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
  filter: "",
  sortOrder: "asc",
});

// Після виходу приватні дані попереднього користувача не мають залишатися в сторі
const clearContacts = (state) => {
  contactsAdapter.removeAll(state);
  state.filter = "";
  state.error = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.addOne(state, action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.removeOne(state, action.meta.arg);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(logOut.fulfilled, clearContacts)
      .addCase(logOut.rejected, clearContacts);
  },
});

export const { setFilter, setSortOrder } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
