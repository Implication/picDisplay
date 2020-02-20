import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export class App extends Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const res = await unsplash.get("search/photos", {
      params: { query: term }
    });
    console.log(res.data.results);
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
