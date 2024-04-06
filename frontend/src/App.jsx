/*=============================================================================
 | Purpose:  REACT ROUTER LOGIC FOR MAIN, XXXXX, XXXXX AND NOT FOUND PAGES
 |           IMPORT THE LAYOUT COMPONENT THAT IS WRAPPING NAVBAR AND SIDEBAR
 |           SO TO KEEP THEM CONSISTENT ACROSS ALL PAGES
 |
 | Input / Parameters:  NA
 |   
 | Output / Returns:  REACT ROUTER PATH TO EACH PAGE
 |
 *===========================================================================*/

import React, { Suspense, useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Main = React.lazy(() => import("./pages/Main"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
import Layout from "./components/Layout";
import UserContext from "./context/user";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, role, setRole }}
      >
        <Suspense fallback={<h1>loading...</h1>}>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate replace to="/main" />} />
              <Route path="main" element={<Main />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </UserContext.Provider>
    </>
  );
}

export default App;
