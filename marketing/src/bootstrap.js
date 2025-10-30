import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";

// //1. Mount function to start-up the application - we got 2 cases to handle
// const mount = (el) => {
//   const root = createRoot(el);
//   root.render(<App />);
// };
// //2. If we are in development mode and in isolation call mount() function immediately
// if (process.env.NODE_ENV === "development") {
//   const devRoot = document.getElementById("_marketing-dev-root");
//   mount(devRoot);
// }

// //3. We are running through container/ host app and we should be able to export the mount() function - so that the container can decide where to mount our marketing app
// export { mount };
