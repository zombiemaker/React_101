import React, {Component} from 'react';
class TemperatureInput extends Component{
    constructor(){
        super();
        this.state={
            temperature: 62,
            msg:"",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target.value)
        const reg = new RegExp(/^\d*$/);
        if (event.target.value.match(reg)) {
            // console.log('only numbers!')
            this.setState({
                temperature: event.target.value,
            })
        } else{
            console.log ('fail!');
            this.setState({
                msg: " <--please enter only numbers"
            })
        }
    }

    render(){
        return(
            <div>
                <legend>Scale: </legend>
                <input onChange={this.handleChange} value={this.state.temperature}/>
                {this.state.msg}
            </div>
        )
    }
}
export default TemperatureInput;