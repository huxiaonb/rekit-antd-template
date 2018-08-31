import React, { Component } from 'react';
import { Layout} from 'antd';
const { Header} = Layout;

export default class HeaderMenu extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
         <Header style={{ background: '#fff', fontSize:24}} >优特智慧厨房</Header>
      </div>
    );
  }
}
