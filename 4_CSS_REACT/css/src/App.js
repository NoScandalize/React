import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("Douglas");

  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este é o parágrafo do componente</p>
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Douglas"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        CSS dinâmico
      </h2>
      <h2 className={ redTitle ? "red-title" : "title" }>Este título vai ter classe dinâmica</h2>
      <Title />
    </div>
  );
}

export default App;
