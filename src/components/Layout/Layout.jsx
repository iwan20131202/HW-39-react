import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AppBar } from "../AppBar/AppBar";
import { Loader } from "../Loader/Loader";

import { Main } from "./Layout.styled";

export const Layout = () => (
  <>
    <AppBar />
    <Main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Main>
  </>
);
