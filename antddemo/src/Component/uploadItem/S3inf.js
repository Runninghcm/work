import React, { Component } from "react";
import Textarea from './Textarea'
import Redicon from "./Redicon";

class S3inf extends Component {
 
  render() {
    return (
      <div id="step3inf">
        <Textarea value={this.props.value.investplan} red={true} id="financingplans " text={"融资计划"} inf="发行总量、流通比例、接受币种、各轮募资比例、各轮募资期限、锁仓期限、软顶和硬顶额度、募资资金分配用途等"></Textarea>
        <Textarea value={this.props.value.investprogress} red={true} text={"目前融资进度" } inf="已完成轮次和额度、计划还需完成额度"></Textarea>
        <Textarea value={this.props.value.project_otherinfo} text={"备注"}></Textarea>
      </div>
    );
  }
}
export default S3inf;
