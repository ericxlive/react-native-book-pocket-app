import React from 'react';
import { StyleSheet, View } from 'react-native';
import Bookcase from './src/components/Bookcase';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Bookcase />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
