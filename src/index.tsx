import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import RouterView from "./router/routerView";
import { routes } from "./router/routes";
import { Provider } from "mobx-react";
import { BrowserRouter} from 'react-router-dom'
import store from "./store";
import "antd/dist/antd.css";
ReactDOM.render(
  <Provider {...store}>
          <BrowserRouter>
          <RouterView routes={routes} />
          </BrowserRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
