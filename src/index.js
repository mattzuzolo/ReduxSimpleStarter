import _ from 'lodash;'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "#";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    //put search function in the constructor so use has instant access to videos.
    //instantion immediately kicks off with search
    // YTSearch({key: API_KEY, term: 'surfing'}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    //   //this.setState({videos:videos})
    //   {/*//data changing over time --> USE STATE!!!*/}
    // });

    this.videoSearch('surfboards')
  }

  //this fetches a list of videos
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState({videos:videos})
      {/*//data changing over time --> USE STATE!!!*/}
    });

  }

  render(){

    //debounce returns a new function that can only be called once every 300 milliseconds. Wont run if called if shorter time.
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return(
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector(".container"))
