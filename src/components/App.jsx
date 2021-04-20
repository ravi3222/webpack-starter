import "../styles/index.scss";
import Demo from "./Demo";
import React from "react";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
      </main>

      <Demo />
    </>
  );
};

export default App;
