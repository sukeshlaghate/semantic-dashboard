import React, { Component } from "react";
import { Search, Header } from "semantic-ui-react";

export default class GeoBISearch extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, results: [], value: "" };
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    //ToDo handle the actual search. currently simply do loading and reset
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();
      this.setState({ isLoading: false });
    }, 1000);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
};
