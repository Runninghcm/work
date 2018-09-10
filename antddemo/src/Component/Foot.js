import React, { Component } from 'react';
import { Menu,Icon } from 'antd';


const style={
  float:"right"
}
  class Foot extends Component {
    state = {
      current: '01',
    }
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }
    render() {
      return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={this.props.ifposition?{ marginBottom:"0px",height:"65px",width:"100%",position:"absolute",bottom:"0",left:"0",minWidth:"1200px",background:"rgba(0, 0, 0, 0.85)"}:{ marginBottom:"0px",height:"65px",width:"100%",minWidth:"1200px",background:"rgba(0, 0, 0, 0.85)"}}
          theme="dark"
        >
        <p style={{textAlign:"center" }} >© 2015-2018 by Collinstar Capital Pty Ltd. All Rights Reserved</p> 
        </Menu>
      );
    }
  }
export default Foot;