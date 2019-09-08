import * as React from 'react';
import { Layout} from "antd";
const { Content} = Layout;
import RouterView from "../router/routerView";
class Oconent extends React.Component {
    public render(){
      const routes=this.props['routes']
        return(
            <Content
              style={{
                background: '#f0f2f5',
                margin: 0,
                minHeight: 280,
                padding:"0 24px 24px 24px",
              }}
            >
               <RouterView routes={routes} />
          </Content>
        )
    }
}
export default Oconent
