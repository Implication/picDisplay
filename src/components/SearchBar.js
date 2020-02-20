import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <label htmlFor="" className="ui label" style={{ display: "inline" }}>
          Image Search
        </label>
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <input
            type="search"
            name="search"
            value={this.state.term}
            id=""
            placeholder="Enter a search term"
            className="field"
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
