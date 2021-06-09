import "./SearchBar.css"
import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term)
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui form">
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={e=> this.setState({term: e.target.value})}
              />
          </div>
          <button className="ui button" tabIndex="0" class="submitButton">Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
