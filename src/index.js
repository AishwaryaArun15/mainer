import React,  { Suspense, lazy }  from "react";
import ReactDOM from "react-dom/client";
const Header = lazy(() => import("header/Header"));

const Main = () => (
  <div>
    <h1>Main Application</h1>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
