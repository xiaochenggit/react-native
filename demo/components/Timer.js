import React , { Component } from 'react';
import {View , Text} from 'react-native';
export default class Timer extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    render() {
        return (
            <View><Text>{this.state.count}</Text></View>
        )
    }

}