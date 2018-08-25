import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// have to specify the exact place of the file we write
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Main take-aways:
// 1. diff between class-based and function-based component
// 2. this.setState
// 3. use import and export statements. library name vs. relative path
// 4. callback functions. > 2-layer callback is confusing
// 5. Component level state. More local. Versus Redux, global


const API_KEY = 'AIzaSyAu6Z-acIauFeCP4DBMGIJ0uJKXm8KbsgY';

// create a new component. This component shuold produce some HTML
class App extends Component  {
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
			};
		this.videoSearch('surfboards');
		};

	// make the video search into a function so we can search different terms
	videoSearch(term){
		// Ajax request has a callBack function
		// key and prop are the same name --- condense code
		// this request takes some time, so need to add if statement in video_detail.js
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
				}); 
		});
	};

	render () {
		// debounce calls the inner function every 300 ms.
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

	return  (
		// onSearchTermChange is a function that takes in "term" and calls videoSearch(term)
		<div>
			<SearchBar onSearchTermChange={videoSearch}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos}/>
		</div>
		);
	};
}

// Take this components' generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));