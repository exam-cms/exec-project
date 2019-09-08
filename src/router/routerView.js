import * as React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
export default class RouterView extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let { routes } = this.props;
    console.log(routes,"view")
    let routerArr = routes?routes.filter(item => !item.redirect):"";
    let redirectArr =  routes?routes.filter(item => item.redirect):"";
    return (
      <Switch>
        {routerArr?routerArr.map((item, index) => (
          <Route
            path={item.path}
            key={index}
            render={props => {
              return (
                <item.component
                  {...props}
                  routes={item.children}
                ></item.component>
              );
            }}
          ></Route>
        )):""}
        {redirectArr?redirectArr.map((item, index) => (
          <Redirect from={item.path} key={index} to={item.redirect}></Redirect>
        )):""}
      </Switch>
    );
  }
}
