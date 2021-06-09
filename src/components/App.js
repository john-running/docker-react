import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = {videos: [], selectedVideo: null};
  onTermSubmit = async (term) =>{
    const response = await youtube.get('/search',{
      params:{
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video =>{
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui stackable two column grid">
          <div className="row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide coloumn">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default App
