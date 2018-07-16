import React, { Component } from 'react'; //need to import reach for transpiling to JS

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ""};
  }

  render(){
    return(

      <div className="search-bar"> {/*//give first div one css class per component*/}
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/*Value of the input: {this.state.term}*/}
      </div>

    );
  }

  onInputChange(term){
    //set state with term
    this.setState({term});


    //fires callback from Index.js / app class
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;


/*
class SearchBar extends Component {
  render(){
    return <input onChange={e => console.log(e.target.value)} />;
  }*/
/*Single line arrow function doesn't need parens*/
/*
  onInputChange(e){
    console.log(e.target.value);
  }*/
  /* onInputChange is an eventHandler. Streamling on return statement above

};



/*  return <input /> //This will generate an HTML input for user. Doesn't ened closing because nothing in it.*/

/*export default SearchBar;*/
//any file that imports search bar will have access to SearchBar component

//BE CAREFUL: make sure we export and import the correct file/item
