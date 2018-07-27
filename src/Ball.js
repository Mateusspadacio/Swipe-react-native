import React, { Component } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

class Ball extends Component {

    state = {
        x: 200,
        y: 500
    }

    renderAnimation() {
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: { x: this.state.x, y: this.state.y }
        }).start();
    }

    componentWillMount() {
        this.renderAnimation();
    }

    render() {
        return (
            <View>
                <Animated.View style={this.position.getLayout()}>
                    <View style={styles.ball} />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ball: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
});

export default Ball;