import React from "react";
import Projects from "./Projects";
import Home from "./Home";
import Loading from "./components/Loading";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading === false) {
    return (
      <>
        <Home />
        <Projects />
      </>
    );
  }
  return (
    <>
      <Loading />
    </>
  );
};

export default App;
