import React from "react";
import ReactDOM from "react-dom";
const Header = lazy(() => import("appB/Header"));

const App = () => (
  <div>
    <h1>Main Application</h1>
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
