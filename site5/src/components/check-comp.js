'use strict';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

// React-компонент (class-based)
class Check extends React.Component { // child
  constructor(props) {
    super(props);            // конструктор из React.Component
    this.state = {
      checked: true,
      edit: false
    };
    console.log('constructor Check');
    //console.log(this.state);
  }

  edit() {
    //console.log("Нажата кнопка <редактировать>");
    this.setState({edit: true});
  }

  remove() {
    //console.log("Нажата кнопка <удалить>");
    this.props.deleteBlock(this.props.index);
    this.props.updateLS(this.props.index);
  }              

  save() {
    let valueIn = [];
    valueIn[0] = this.refs.newTxt.value;
    valueIn[1] = this.refs.newAuth.value;
    //console.log("save = " + valueIn[0] + ' ' + valueIn[1] + '/' + this.props.index);
    this.props.updateBlock(valueIn, this.props.index);
    this.props.updateLS(this.props.index);
    this.setState({edit: false});
    //console.log(this.props);
  }

  renderShow() {
    console.log("renderShow");
    //console.log(this.props.children);
    return(
      <div className="box d-flex flex-wrap justify-content-around">
        <div className="time-show col-lg-2 p-0 m-0">
          <p className="pt-2 px-0 m-0">Время: {this.props.children[0]}</p>
        </div>
        <div className="text-show col-lg-6 p-0 m-0">
          <p className="py-1 px-0 m-0">Текст: {this.props.children[1]}</p>
        </div>
        <div className="text-show col-lg-4 p-0 m-0">
          <p className="py-1 px-0 m-0">Автор: {this.props.children[2]}</p>
        </div>
        <button
          onClick = {ev => {this.edit()}}
          className="btn btn-primary col-lg-7">Редактировать
        </button>
        <button
          onClick = {ev => {this.remove()}}
          className="btn btn-danger col-lg-4">Удалить
        </button>
      </div>
    );
  }

  renderEdit() {
    console.log("renderEdit");
    //this.setState({edit: false});
    return(
      <div className="box d-flex flex-wrap justify-content-around">
        <input type="text" ref="newTxt" className="text-edit col-lg-7" defaultValue={this.props.children[1]} />
        <input type="text" ref="newAuth" className="text-edit col-lg-5" defaultValue={this.props.children[2]} />
        <button
          onClick = {ev => {this.save()}}
          className="btn btn-success col-lg-7">Сохранить
        </button>
      </div>
    );
  }
      
  render () {
    if(this.state.edit) {
      //console.log('render Check');
      return (
        <div className="field-div my-1">
          {this.renderEdit()}
        </div>
      );
    } else {
      return (
        <div className="field-div my-1">
          {this.renderShow()}
        </div>
      );
    }
    
  }
}

export default Check;