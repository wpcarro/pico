'use strict';
const React = require('react-native');

const {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} = React;

class PlaylistName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  handlePress() {
    this.setState({
      selected: true
    });
    this.props.updateParentState(this.props.name);
  }
  render() {
    return (
      <TouchableHighlight onPress={this.handlePress.bind(this)} >
        <View>
          <Text style={styles.playlistName}> {this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class SideScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowViewing: this.props.initialPlaylist
    };
  }
  updateNowViewing(playlistName) {
    this.setState({
      nowViewing: playlistName
    });
    this.props.updateParentState(playlistName);
  }
  render() {
    let playlistNames = this.props.playlistNames.map((name, index) => {
      return (
        <View key={index}>
          <PlaylistName
            name={name}
            updateParentState={this.updateNowViewing.bind(this)} />
        </View>
      );
    });
    return (
      <View style={styles.scrollListsContainer}>
        {/*<Text style={styles.currentPlaylist}>Current Playlist: {this.state.nowViewing}</Text>*/}
        {/*<View style={styles.scrollContainer}>*/}
          <ScrollView
            horizontal={true}
            informParent={this.updateNowViewing.bind(this)}
            contentContainerStyle={styles.playlists}>
            {playlistNames}
          </ScrollView>
        {/*</View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playlists:{
    flex: 1,
    backgroundColor: 'red'
  },
  playlistName: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 5
  },
  scrollContainer: {
    height: 30,
    padding: 0
  },
  scrollListsContainer: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
});

module.exports = SideScroller;