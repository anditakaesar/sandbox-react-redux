import React from 'react';
import { connect } from 'react-redux';
import { fetchChecklist, createChecklist, updateChecklist, deleteChecklist } from '../checklist/checklist.action';

const uuid = require('uuid/v4');

class CheckListDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      desc: '',
      checked: false
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
    const { id, desc, checked } = this.state;

    if (desc !== '') {

      let checklist = {
        id: id,
        desc: desc,
        checked: checked
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
    checklist.checked = !checklist.checked;
    this.props.updateChecklist(checklist);
  }

  _clearFields = () => {
    this.setState({
      id: '',
      desc: '',
      checked: false
    });
  }

  _onClickDeleteHandler = (checklist) => {
    this.props.deleteChecklist(checklist);
  }

  _onClickEditHandler = (checklist) => {
    this.setState({
      id: checklist.id,
      desc: checklist.desc,
      checked: checklist.checked
    });
  }

  _onClickEditCheckHandler = () => {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const { checklists } = this.props;
    let editedList = {
      id: this.state.id,
      desc: this.state.desc,
      checked: this.state.checked
    }

    return(
      <div className="main-container uk-container">
        <ListForm onSave={this._onClickSaveHandler} 
        onClear={this._clearFields}
        list={editedList}
        onFieldChange={this._onFieldChangeHandler}
        onClickChecker={this._onClickEditCheckHandler}
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

  _renderButtons() {
    const { list, onDelete, onEdit } = this.props;
    
    return (
      <div className="uk-button-group" uk-margin>
        <button className="uk-button uk-button-small uk-button-primary" 
          uk-tooltip="title: Delete this list; pos: right;" 
          onClick={() => onDelete(list)}><span role="img" aria-label="delete this item">🚮</span>
        </button>
        <button className="uk-button uk-button-small uk-button-default" 
          uk-tooltip="title: Edit this list; pos: right;" 
          onClick={() => onEdit(list)}><span role="img" aria-label="edit this item">📝</span>
        </button>
      </div>
    )
  }

  render() {
    const { list, onToggle } = this.props;

    return(
        <div className="list-item">
          {this._renderButtons()}
          <div className="list-item-desc uk-margin-left" onClick={() => onToggle(list)}>
            <span className={ list.checked ? "checklist-done" : "checklist-base" }>{list.desc}</span>
          </div>
          
        </div>
    );
  }
}

class ListForm extends React.Component {
  render() {
    const { list, onFieldChange, onSave, onClear, onKeyDown, onClickChecker } = this.props;

    return (
      <div className="uk-margin" uk-form-custom>
        <span className="input-form-checklist" role="img" aria-label="form-check" 
        uk-tooltip="title: ✔ means done; pos: right;"
        onClick={onClickChecker}>{list.checked ? '✔' : '❌' } </span>
        <input className="uk-input uk-form-width-large" type="text" id="descField" name="desc" placeholder="Enter list description" autoFocus
        onChange={onFieldChange} 
        onKeyDown={onKeyDown}
        value={list.desc}></input>
        <div className="uk-button-group">
          <button className="uk-button uk-button-primary" onClick={onSave}>{list.id === '' ? 'Add' : 'Save' } List</button>
          <button className="uk-button uk-button-default" onClick={onClear}>Clear</button>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckListDemo);