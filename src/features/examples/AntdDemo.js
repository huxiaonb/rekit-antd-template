import React, { Component } from 'react';
import { DatePicker } from 'antd';

export default class AntdDemo extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="examples-antd-demo">
        <DatePicker />
      </div>
    );
  }
}
