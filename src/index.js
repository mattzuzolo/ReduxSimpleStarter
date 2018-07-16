import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //import is equal to "const SearchBar"

const API_KEY = "#";

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data)
});

//Create a new compontent
//This component should produce HTML
const App = () => {
  return(
  <div>
    <SearchBar />
  </div>);
}


//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"))
