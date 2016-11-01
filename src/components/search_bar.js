import React, { Component } from 'react';

// Class component (able to have state, etc)
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};
        //this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        /*return(
            <div>
                <input onChange={ this.onInputChange }/>
                <br />
                <p>Value of the input: { this.state.term } </p>
            </div>
            );*/

        // if we embed an arrow function, we don't need to bind(this)
        return(
            <div className="search-bar">
                <input
                    //controlled component: the html takes the state value
                    value={ this.state.term }
                    onChange={ eventObject => this.onInputChange(eventObject.target.value) }
                />
                <br />

            </div>
        );
    }

    /*onInputChange(eventObject) {
        this.setState({ term: eventObject.target.value });
    }*/

}



// Functional component (limited: unable to have state, etc)
/*const SearchBar = () => {
    return <input />;
};*/

export default SearchBar;