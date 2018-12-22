import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';

class SignIn extends Component {
  state = {
    name: '',
    pass: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const admin = {
      name: this.state.name,
      pass: this.state.pass
    };
    this.props.signIn(admin);
    if (this.props.auth.isLogedIn) {
      this.props.history.push('/');
    } else {
      this.setState({
        error: 'Wrong usernmae or password'
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            className="form-control"
            required
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="SignIn" className="btn btn-primary" />
        {this.state.error ? (
          <div className="center text-danger">{this.state.error}</div>
        ) : null}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: admin => dispatch(signIn(admin))
  };
};
const mapStateToProps = state => {
  return {
    auth: state.auth.admin
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
