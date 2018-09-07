import React, { Component } from 'react';
import logo from '../img/logo.png'
import { Input,Button ,AutoComplete} from "antd";
const InputGroup = Input.Group;

const data={
    username:"",
    password:""
}
export default class Progect extends Component{
    state = {
        dataSource: [],
      }
      handleChange = (value) => {
          data.username=value
        this.setState({
          dataSource: !value || value.indexOf('@') >= 0 ? [] : [
            `${value}@gmail.com`,
            `${value}@163.com`,
            `${value}@qq.com`,
            `${value}@outlook.com`,
          ],
        });
      }
      login=()=>{
        console.log(data)
          window.location.hash="#/progect"
        //   window.location.reload()
      }
      password=(value)=>{
          console.log(value)
      }
    render(){
        return(
            <div style={{background:"#000",height:"100%"}}>
                <div style={{width:"300px",margin:"0 auto"}}>
                    <div><img style={{width:"300px",height:"260px"}} src={logo}></img></div>
                    <div style={{background:"#fff",borderRadius:"8px",padding:"32px"}}>
                        <p style={{textAlign:"center"}}>投研管理系统</p>
                        <div><span>邮箱:</span>   
                        <InputGroup width="200px" style={{width:"200px",display:"inline-block",padding:"1px"}}>
                        <AutoComplete
                          dataSource={this.state.dataSource}
                          style={{ width: 200 }}
                          onChange={this.handleChange}
                          placeholder="Email"
                        />
                      </InputGroup>
                      </div>
                        <div style={{marginTop:"15px"}}><span>密码:</span><Input ref="" onChange={()=>{this.password}} type="password" style={{width:"200px"}}></Input></div>
                        <div style={{textAlign:"center"}}>
                         <Button onClick={this.login} type="primary" style={{marginTop:"25px",width:"100px"}} >登录</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
