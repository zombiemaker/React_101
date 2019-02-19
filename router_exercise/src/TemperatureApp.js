import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict'

class TemperatureApp extends Component{
    constructor(){
        super();
        this.state={
            temperature: 17,
            scale: 'c',
        }
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this)
    }
    handleCelsiusChange(value){
        console.log(`someone changed the input box to ${value}`)
        this.setState({
            temperature: value.target.value,
            scale: "c",
            msg: "",
        })
    }

    handleFahrenheitChange(value){
        console.log(`someone changed the input box to ${value}`)
        const reg = new RegExp(/^\d+$/);
        if (value.target.value.match(reg)) {
            // console.log('only numbers!')
            this.setState({
                temperature: value.target.value,
            })
        } else{
            console.log ('fail!');
            this.setState({
                msg: " <--please enter only numbers"
            })
        }
        this.setState({
            temperature: value.target.value,
            scale: "f",
        })
    }
    render(){
        const scale = this.state.scale
        const temp = this.state.temperature;
        
        let fTemp;
        let cTemp;
        if (scale==='c'){
            fTemp = ((temp*(9/5))+32);
            cTemp = temp;
        } else if (scale === 'f'){
            fTemp = temp
            cTemp = ((temp-32)*5/9)
        }
        return(
            <div id="temp-app">
                <h1>Temperature in degrees Fahrenheit:</h1>
                <TemperatureInput scale ="f" temperature={fTemp} onChange={this.handleFahrenheitChange} />
                <h1>Temperature in degrees Celsius:</h1>
                {this.state.msg}
                <TemperatureInput scale ="c" temperature={cTemp} onChange={this.handleCelsiusChange} />
                <BoilingVerdict temperature = {cTemp}/>
                {this.state.msg}
            </div>
        )
    }
}
export default TemperatureApp