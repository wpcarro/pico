'use strict';

const React = require('react-native');
const {
  AppRegistry,
  View,
  StyleSheet
} = React;

const Main = require('./App/Components/Main.js');
const SongQueue = require('./App/Components/SongQueue.js');

const SONG_DATA = [
  {artist: 'Slow Magic', title: 'Manhattan', album: 'Triangle'},
  {artist: 'Slow Magic', title: 'Youth Group', album: 'Triangle'},
  {artist: 'Slow Magic', title: 'Feel Flows', album: 'Triangle'},
  {artist: 'Giraffeage', title: 'Tell Me', album: 'Tell Me (single)'},
  {artist: 'Giraffeage', title: 'Chocolate', album: 'Best of Giraffeage'}
];

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SongQueue songData={SONG_DATA} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('main', () => App);