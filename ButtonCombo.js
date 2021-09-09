import React, {Component} from 'react';
import {View, Box, Text, StyleSheet, Button} from 'react-native';

export default class ButtonCombo extends Component {
    constructor () {
        super()
        this.state = {
          color: 'blue',
        }
    }

    changeColor() {
        if(this.state.color === 'blue') {
            this.setState({
                color: 'red',
              });
        }
        else {
            this.setState({
                color: 'blue',
            })
        }
    }

    render() {
        return (
        <View style={styles.base}>
            <View style={styles.containerAndBorder}>
                {/**/}
                {/*onPress={this.changeColor} */}
                <Button 
                onPress={() => this.changeColor()}
                title = {"Button" + this.props.id}
                />
            </View>
            <View style={styles.containerAndBorder}>
                <Button 
                title = {"Box" + this.props.id}
                color = {this.state.color}
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: '#CFF635', 
        borderWidth: 0,
    },
    containerAndBorder: {
      flex: 1,
      borderWidth: 2,
      justifyContent: 'center',
      borderColor: '#282828',
      borderWidth: 0,
    },
  });