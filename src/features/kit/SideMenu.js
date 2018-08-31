import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

export default class SideMenu extends Component {
  static propTypes = {

  };
  render() {
    let {location} = this.props;
    return (
      <div className="kit-side-menu">
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className="logo" >LOGO</div>
          <Menu theme="dark" defaultSelectedKeys={['/kit/main']} selectedKeys={[location.pathname]} mode="inline" >
            <Menu.Item key="/kit">
              <Link to="/kit">主页</Link>
            </Menu.Item>
            <Menu.Item key="/kit/food">
              <Link to="/kit/food">堂餐取食</Link>
            </Menu.Item>
            <Menu.Item key="/kit/order">
              <Link to="/kit/order">订单管理</Link>
            </Menu.Item>
            <Menu.Item key="/kit/CookPlan">
              <Link to="/kit/CookPlan">烹饪计划</Link>
            </Menu.Item>
            <Menu.Item key="/kit/PurchasePlan">
              <Link to="/kit/PurchasePlan">采购计划</Link>
            </Menu.Item>
            <Menu.Item key="/kit/ToStorage">
              <Link to="/kit/ToStorage">净菜入库</Link>
            </Menu.Item>
            <Menu.Item key="/kit/Inventory">
              <Link to="/kit/Inventory">净菜库存</Link>
            </Menu.Item>
            <Menu.Item key="/kit/Settings">
              <Link to="/kit/Settings">设置</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}
