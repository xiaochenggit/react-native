import React , { Component } from 'react';
import { View , Text , TouchableNativeFeedback , TouchableOpacity , Image } from 'react-native';
import FadeInView from './components/FadeInView';
import App from './components/App';
import Timer from './components/Timer';

export default class SetUp extends Component {
    constructor() {
        super();
        this.state = {
            isAnimate: false
        }
    }
    _onPress() {
        console.log('你点击了我!')
    }

    render() {
        var animateHTML = this.state.isAnimate ? <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading In</Text></FadeInView> : <Text> </Text>;
        return(
            <View>
                <Text>水波按钮</Text>
                <TouchableNativeFeedback 
                    onPress={this._onPress}
                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={{backgroundColor: 'red', width: 100, borderRadius: 4}}>
                        <Text style={{margin: 15}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text>透明度按钮</Text>
                <TouchableOpacity 
                    onPress={this._onPress}
                >
                    <Image 
                        style={{ width: 200, height: 60 }}
                        resizeMode='cover'
                        source={require('./images/btn.jpg')}
                    />
                </TouchableOpacity>
                <Text 
                    onPress={()=> {
                        this.setState({
                            isAnimate: !this.state.isAnimate
                        })
                    }}
                >
                    Animate 动画
                </Text>
                {animateHTML}
                <App/>
                <Text>定时器</Text>
                <Timer/>
            </View>
        )
    }

}