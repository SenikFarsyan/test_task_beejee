import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataTable } from 'react-data-components';

class AllTasks extends Component {
  handleClick = e => {
    this.props.history.push(`/edit/${e.target.id}`);
  };
  renderLink = (val, row) => {
    return (
      <button
        className="btn btn-secondary"
        id={val}
        onClick={e => this.handleClick(e)}
      >
        Edit
      </button>
    );
  };
  render() {
    const columns = [
      { title: 'Name', prop: 'name' },
      { title: 'Email', prop: 'email' },
      { title: 'Task', prop: 'description' },
      { title: 'Status', prop: 'status' },
      { title: 'Action', prop: 'id', render: this.renderLink }
    ];
    const { tasks } = this.props;
    return (
      <div>
        <DataTable
          keys="name"
          columns={columns}
          initialData={tasks}
          initialPageLength={3}
          pageLengthOptions={[3, 5, 10]}
          initialSortBy={{ prop: 'name', order: 'descending' }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    auth: state.auth.admin
  };
};

export default connect(mapStateToProps)(AllTasks);
