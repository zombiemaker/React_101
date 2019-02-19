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
    }
    handleCelsiusChange(value){
        console.log(`someone changed the input box to ${value}`)
    }

    handleFahrenheitChange(value){
        console.log(`someone changed the input box to ${value}`)
    }
    render(){
        return(
            <div id="temp-app">
                <TemperatureInput />
                <TemperatureInput />
                <BoilingVerdict />
            </div>
        )
    }
}
export default TemperatureApp