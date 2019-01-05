import React from "react";

class SearchBar extends React.Component {
  state = {
    task: ""
  };

  onChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  onClick = () => {
    this.props.onClick(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <div className="col-md-8 offset-md-2 my-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            onChange={this.onChange}
            value={this.state.task}
          />
          <div className="input-group-append">
            <button className="btn btn-info" onClick={this.onClick}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
