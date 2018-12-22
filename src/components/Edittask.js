import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../store/actions/taskActions';
import { Redirect } from 'react-router-dom';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputDescription = React.createRef();
    this.inputDone = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();
    const status = this.inputDone.current.checked ? 'Done' : 'In Progress';
    const task = {
      id: this.props.match.params.id,
      name: this.inputName.current.value,
      email: this.inputEmail.current.value,
      description: this.inputDescription.current.value,
      status: status
    };
    this.props.editTask(task);
    this.props.history.push('/');
  };
  render() {
    const { task, admin } = this.props;
    if (!admin.isLogedIn) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <h1>Edit Task: {task.id}</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              required
              defaultValue={task.name}
              ref={this.inputName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="name"
              className="form-control"
              required
              defaultValue={task.email}
              ref={this.inputEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
              defaultValue={task.description}
              ref={this.inputDescription}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              ref={this.inputDone}
            />
            <label className="form-check-label mb-3" htmlFor="defaultCheck1">
              Done
            </label>
          </div>
          <input
            type="submit"
            value="Save changes"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.tasks.tasks;
  const task = tasks.filter(task => task.id === id);
  return {
    task: task[0],
    admin: state.auth.admin
  };
};

const mapDispatchToPRops = dispatch => {
  return {
    editTask: task => dispatch(editTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPRops
)(EditTask);
