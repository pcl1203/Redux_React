import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

class App extends Component {
  renderButton() {
    return (
      <button onClick={() => this.props.changeAuth(!this.props.auth)}>
        {this.props.auth ? "Sign Out" : "Sign In"}
      </button>
    );
  }
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Routes>
          <Route path="/post" exact element={<CommentBox />} />
          <Route path="/" exact element={<CommentList />} />
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
