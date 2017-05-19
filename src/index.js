  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import YTsearch from 'youtube-api-search';
  import SearchBar from './components/search_bar';
  import VideosList from './components/video_list';

  const API_KEY = "AIzaSyBafxS7xqCef2ZtA5Lu-3h-APzcgBJAG4w";

  class App extends Component{
     constructor(props){
       super(props);
       this.state = { videos: [] };

       YTsearch({key:API_KEY, term:'Chloe Grace Moretz'}, (videos) => {
            console.log(videos);
            this.setState({ videos });
       });

     }
     render(){
        return (
               <div>
                 <SearchBar />
                 <VideosList videos={this.state.videos}/>
               </div>
        );
     }
  }

  ReactDOM.render(<App/>, document.querySelector(".container"));
