import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchChecklist, createChecklist, updateChecklist, deleteChecklist } from './checklist/checklist.action';

const uuid = require('uuid/v4');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      desc: '',
      enabled: true
    }
  }

  _onFieldChangeHandler = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  _onKeyDownHandler = (event) => {
    // handle Enter key
    if (event.key === 'Enter') {
      this._onClickSaveHandler();
    }
  }

  _onClickSaveHandler = () => {
    const { id, desc, enabled } = this.state;

    if (desc !== '') {

      let checklist = {
        id: id,
        desc: desc,
        enabled: enabled
      }

      if (id === '') {
        let newid = uuid();
        checklist.id = newid;
        this.props.createChecklist(checklist);
      } else {
        this.props.updateChecklist(checklist);
      }

      this._clearFields();
    }
  }

  _onListToggleHandler = (checklist) => {
    checklist.enabled = !checklist.enabled;
    this.props.updateChecklist(checklist);
  }

  _clearFields = () => {
    this.setState({
      id: '',
      desc: '',
      enabled: true
    });
  }

  _onClickDeleteHandler = (checklist) => {
    this.props.deleteChecklist(checklist);
  }

  _onClickEditHandler = (checklist) => {
    this.setState({
      id: checklist.id,
      desc: checklist.desc,
      enabled: checklist.enabled
    });
  }

  render() {
    const { checklists } = this.props;
    let editedList = {
      id: this.state.id,
      desc: this.state.desc,
      enabled: this.state.enabled
    }

    return(
      <div className="App">
        <ListForm onSave={this._onClickSaveHandler} 
        onClear={this._clearFields}
        list={editedList}
        onFieldChange={this._onFieldChangeHandler}
        onKeyDown={this._onKeyDownHandler} />

        {
          checklists.map((l, i) => 
            <SingleList list={l} key={l.id} 
            onDelete={this._onClickDeleteHandler}
            onEdit={this._onClickEditHandler}
            onToggle={this._onListToggleHandler} />)
        }
        
      </div>
    );
  }
}

class SingleList extends React.Component {
  render() {
    const { list, onDelete, onEdit, onToggle } = this.props;

    return(
        <div>
          <button onClick={() => onDelete(list)}><span role="img" aria-label="delete this item">❌</span></button> 
          <button onClick={() => onEdit(list)}><span role="img" aria-label="edit this item">📝</span></button>&nbsp;
          <span className={ list.enabled ? "checklist-base" : "checklist-done" } onClick={() => onToggle(list)}>{list.desc}</span>
        </div>
    );
  }
}

class ListForm extends React.Component {
  render() {
    const { list, onFieldChange, onSave, onClear, onKeyDown } = this.props;

    return (
      <React.Fragment>
        <input type="text" id="descField" name="desc" placeholder="Enter list description" autoFocus
        onChange={onFieldChange} 
        onKeyDown={onKeyDown}
        value={list.desc}></input>
        <button onClick={onSave}>{list.id === '' ? 'Add' : 'Save' } List</button>
        <button onClick={onClear}>Clear</button>
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
