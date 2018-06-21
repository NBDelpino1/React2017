import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (

            <div className="search-bar">
            <img src="../images/logo.svg"  alt="" id="logo" />
                <input
                    value = { this.state.term }
                    onChange={ event => this.onInputChange(event.target.value) } />
            <img src="../images/search-icon.svg"  alt="" id="search-icon" />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;