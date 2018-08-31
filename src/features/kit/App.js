import React, { Component } from 'react';
import { Layout,  Breadcrumb } from 'antd';

import HeaderMenu from './HeaderMenu'
import SideMenu from './SideMenu'
import {getBreadCrumb} from './helper'
const {Content, Footer} = Layout;
export default class App extends Component {
  static propTypes = {

  };
  
  render() {
    const {location} = this.props;
    return (
      <div className="kit-app">
         <Layout style={{ minHeight: '100vh' }}>
            <SideMenu location={location} />
            <Layout style={{ marginLeft: 200 }}>
              <HeaderMenu />
              <Content style={{ margin: '0 16px' }}>
                <div style={{ margin: '16px 0' }}>{getBreadCrumb(location.pathname)}</div>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                   {this.props.children}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
         </Layout>
      </div>
    );
  }
}
