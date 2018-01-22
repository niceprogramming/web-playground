import * as ReactDOM from "react-dom";
import * as React from "react";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
