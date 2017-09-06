import React , { Component } from 'react';
import { LayoutAnimation, NativeModules, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            w: 100,
            h: 100
        }
    }

    _onPress() {
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w - 15,
            h: this.state.h - 15
        })
    }

    _onPressAdd() {
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w + 15,
            h: this.state.h + 15
        })
    }

    render() {
        return(
            <View>
                <View style={styles.container}>
                    <View style={[styles.box,{width: this.state.w, height: this.state.h}]} />
                    <View>
                        <TouchableOpacity onPress={()=>{this._onPressAdd()}}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>++ me</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._onPress()}}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>-- me</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
    },
    box: {
      backgroundColor: 'red',
    },
    button: {
      backgroundColor: 'black',
      width: 100,
      marginTop: 15,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center'
    },
  });