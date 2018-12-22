import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../store/actions/taskActions';

import uuid from 'uuid';

class CreateTask extends Component {
  state = {
    name: '',
    email: '',
    description: ''
  };
  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    const { name, email, description } = this.state;
    const task = {
      id: uuid(),
      name,
      email,
      description,
      status: 'In Progress'
    };
    this.props.createTask(task);
    this.setState({
      name: '',
      email: '',
      description: ''
    });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Create Task</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
              onChange={this.handleInputChange}
            />
          </div>
          <input type="submit" value="Create" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTask);
