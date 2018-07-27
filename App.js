import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';
import { DATA } from './mock/deck.mock.data';

export default class App extends Component {

  renderCard(item) {
    const { text, uri, id } = item;

    return (
      <Card
        key={id}
        title={text}
        image={{ uri }}
      >
        <Text style={{ marginBottom: 10 }}>{item.text}</Text>
        <Button
          title="View Now!"
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card
        title="All Done!"
      >
        <Text style={{ marginBottom: 10 }}>
          There's no more content here
        </Text>
        <Button title="Get more!" backgroundColor="#03A9F4" />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
