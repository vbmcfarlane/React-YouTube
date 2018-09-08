import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import __ from 'lodash';
import SearchBar from './components/Search_Bar';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';

const API_Key = "AIzaSyCQHw4YSGIyLEUVoAxn-GHNmC2HC6_8XSw";

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('maroon5');
		
	}

	videoSearch(term) {
		YouTubeSearch({key: API_Key, term}, 
			(videos) => {
				this.setState({ 
						videos: videos, 
						selectedVideo: videos[0] 
				}); //end this.setState
		}); // end videos
	}   // end videosearch

	render() {  
			const videoSearch = _.debounce((term) => {this.videoSearch(term) },  600);

			return (
				<div> 
					<SearchBar onSearchTermChange={videoSearch} /> 
					<VideoDetail video={this.state.selectedVideo} /> 
					<VideoList 
						onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					 	videos={this.state.videos} 
					/>
				</div>
		);
	}  
} 

ReactDOM.render(<App />, document.querySelector('.container'));
