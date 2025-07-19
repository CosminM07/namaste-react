import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1>Namaste React</h1>;
};

const BodyComponent = () => {
  return <div>Asta este body</div>;
};

const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);