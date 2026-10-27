import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

import App from "./App";
import { store, persistor } from "./redux/store";
import { refreshUser } from "./redux/auth/operations";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={() => store.dispatch(refreshUser())}
      >
        <BrowserRouter
          basename={process.env.PUBLIC_URL}
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
