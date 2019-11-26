import React from 'react';
import { connect } from 'react-redux';
import { fetchChecklist, createChecklist, updateChecklist, deleteChecklist } from './checklist/checklist.action';

const uuid = require('uuid/v4');

class App extends React.Component {

  _onClickAddHandler = (checklist) => {
    this.props.createChecklist(checklist);
  }

  _onClickDeleteHandler = (checklist) => {
    this.props.deleteChecklist(checklist);
  }

  render() {
    const { checklists } = this.props;

    return(
      <div className="App">
        <ListForm onAdd={this._onClickAddHandler} />
        {
          checklists.map((l, i) => 
            <SingleList list={l} key={l.id} onDelete={this._onClickDeleteHandler} />)
        }
        
      </div>
    );
  }
}

class SingleList extends React.Component {
  render() {
    const { list, onDelete } = this.props;

    return(
        <div>
          {list.desc} of id {list.id} <button onClick={() => this.props.onDelete(list)}>❌</button>
        </div>
    );
  }
}

class ListForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      desc: '',
      enabled: true
    }
  }

  _onFieldChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  _onAddBtnHandler = () => {
    const { id, desc, enabled } = this.state;

    if (desc !== '') {
      let newid = uuid();
      let checklist = {
        desc: desc,
        enabled: enabled
      }

      if (id === '') {
        checklist.id = newid;
        this.props.onAdd(checklist);
      } else {
        console.log('editing');
      }
      this.clearFields();
    }
  }

  clearFields() {
    this.setState({
      id: '',
      desc: ''
    });
  }

  render() {
    const { onAdd } = this.props;

    return (
      <React.Fragment>
        <input type="text" id="descField" name="desc" onChange={this._onFieldChange} value={this.state.desc}></input>
        <button onClick={this._onAddBtnHandler}>Add List</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    checklists: state.checklists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChecklist: () => dispatch(fetchChecklist()),
    createChecklist: (l) => dispatch(createChecklist(l)),
    updateChecklist: (l) => dispatch(updateChecklist(l)),
    deleteChecklist: (l) => dispatch(deleteChecklist(l))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
