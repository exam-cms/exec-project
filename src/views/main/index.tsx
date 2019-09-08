import * as React from "react";
import Header from "../../components/oheader";
import Content from "../../components/oconent";
import Slid from "../../components/osider";

class Main extends React.Component{
  public render() {
    return (
      <div>
        <Header />
        <div>
          <Slid />
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;
