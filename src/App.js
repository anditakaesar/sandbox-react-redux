import React from 'react';
import { connect } from 'react-redux';
import { fetchChecklist, createChecklist, updateChecklist, deleteChecklist } from './checklist/checklist.action';

class App extends React.Component {
  componentDidMount() {
    console.log('checklist', this.props.checklists);
  }

  render() {
    return(
      <div className="App">
        Hello React
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    checklists: state.checklists
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChecklist: () => dispatch(fetchChecklist()),
    createChecklist: l => dispatch(createChecklist(l)),
    updateChecklist: l => dispatch(updateChecklist(l)),
    deleteChecklist: l => dispatch(deleteChecklist(l))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
