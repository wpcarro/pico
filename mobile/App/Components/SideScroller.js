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
    // render this playlist
  }
  render() {
    return (
      <TouchableHighlight onPress={this.handlePress.bind(this)} >
        <View>
          <Text style={styles.playlistName}> {this.props.name}</Text>
        </View>
      </TouchableHighlight>
    )
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
            contentContainerStyle={styles.playlists}
            >
            {playlistNames}
          </ScrollView>
        {/*</View>*/}
      </View>
    );
  }
}

module.exports = SideScroller;