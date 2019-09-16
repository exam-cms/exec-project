import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import RouterView from "./router/routerView";
import { routes } from "./router/routes";
import { Provider } from "mobx-react";
import { BrowserRouter} from 'react-router-dom'
import store from "./store";
import "antd/dist/antd.css";
//导航守卫
import {Router} from "react-router"
import {createHashHistory} from "history"
const history=createHashHistory()
import guardInit from "./utils/permission"
guardInit(history)
ReactDOM.render(
  <Provider {...store}>
          <Router history={history}>
          <RouterView routes={routes} />
          </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
