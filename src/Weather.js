import React from 'react';
class Weather extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.city}, {this.props.weather.sys.country}</div>
                <div>{this.props.weather.main.temp}°C</div>
                <div>feels like: {this.props.weather.main.feels_like}°C</div>
                <div>{this.props.weather.weather[0].main + " ," + this.props.weather.weather[0].description}</div>
            </div>
        )
    }
}

export default Weather
