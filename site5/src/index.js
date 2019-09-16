'use strict';
//import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
//import TodoItem from './todo-item';

// React-компонент (class-based)
class Check extends React.Component { // child
  constructor(props) {
    super(props);            // конструктор из React.Component
    this.state = {
      checked: true,
      edit: false
    };
    console.log('constructor Check');
    console.log(this.state);
  }

  edit() {
    console.log("Нажата кнопка <редактировать>");
    this.setState({edit: true});
  }

  remove() {
    console.log("Нажата кнопка <удалить>");
    this.props.deleteBlock(this.props.index);
  }              

  save() {
    let valueIn = [];
    valueIn[0] = this.refs.newTxt.value;
    valueIn[1] = this.refs.newAuth.value;
    console.log("save = " + valueIn[0] + ' ' + valueIn[1]);
    this.props.updateBlock(valueIn, this.props.index);
    this.setState({edit: false});
  }

  renderShow() {
    console.log("renderShow");
    console.log(this.props.children);
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
      console.log('render Check');
      return (
        <div className="field-div">
          {this.renderEdit()}
        </div>
      );
    } else {
      return (
        <div className="field-div">
          {this.renderShow()}
        </div>
      );
    }
    
  }
}

class Field extends React.Component { // parent
  constructor(props) {
    super(props);            // конструктор из React.Component
    let crdate = new Date();
    const monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,декабря'.split(',');
    let qtime = crdate.getDate() + ' ' + monthA[crdate.getMonth()] + ' ' + crdate.getFullYear();
    qtime += ' ' + crdate.getHours() + ':' + crdate.getMinutes();
    this.state = {
      tasks: [
        {
          taskText: 'дело №1 ',
          taskAuthor: 'Жора ',
          taskDate: qtime
        }
      ]
    };
    console.log('constructor Field');
    console.log(this.state.tasks);
  }

  componentDidMount() {
    var inputLS = null;
    let newVar = [];
    let i = 0;

    console.log('componentDidMount');
    do {
      let key = String(i++);
      inputLS = localStorage.getItem(key);
      if(inputLS !== null) {  // беру только свой JSON
        let returnObj = JSON.parse(inputLS);
        console.log(returnObj);
        newVar.push(returnObj);
      }
    } while(inputLS !== null || i < 1000); // защищаюсь от бесконечного цикла во время отладки
    console.log(newVar);
    this.setState({tasks: newVar});
  }

  addLine(textLine) {
    console.log('addLine');
    console.log(textLine);
    console.log(this.state.tasks);

    let arr = this.state.tasks;
    let crdate = new Date();
    const monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,декабря'.split(',');
    let qtime = crdate.getDate() + ' ' + monthA[crdate.getMonth()] + ' ' + crdate.getFullYear();
    qtime += ' ' + crdate.getHours() + ':' + crdate.getMinutes();
    arr.push({
      taskText: textLine[0],
      taskAuthor: textLine[1],
      taskDate: qtime
    });
    console.log(this.state.tasks);
    this.setState({tasks: arr});
  }

  deleteNote(i) {
    console.log('delete');
    console.log(this.state.tasks);
    let arr = this.state.tasks;
    arr.splice(i, 1);  //  удалить только один элемент, выбранный i
    this.setState({tasks: arr});
    console.log(this.state.tasks);
  }

  updateNote(textLine, i) {
    console.log('update ' + textLine[0] + ' ' +textLine[1] + ' ' + i);
    console.log(textLine);
    console.log(this.state.tasks);
    let arr = this.state.tasks;
    console.log(arr[i]);
    arr[i].taskText = textLine[0];  //  заменить элемент, выбранный i
    arr[i].taskAuthor = textLine[1];  //  заменить элемент, выбранный i
    console.log(arr[i]);
    this.setState({tasks: arr});
  }

  writeLocSt() {
    let arr = this.state.tasks;
    let serialObj;

    console.log('writeLocSt');
    console.log(this.state.tasks);

    // убираю предыдущие остатки из LS
    //localStorage.clear();
    var inputLS = null;
    let j = 0;
    do {
      let key = String(j++);
      inputLS = localStorage.getItem(key);
      if(inputLS !== null) {  // беру только свой JSON
        //serialObj = '';
        localStorage.removeItem(key);
      }
    } while(inputLS !== null || j < 1000); // защищаюсь от бесконечного цикла во время отладки

    // записываю новую информацию в LS
    arr.forEach(function(item, i, arr) {
      serialObj = JSON.stringify(item);
      try {
        localStorage.setItem(String(i), serialObj);
      } catch (ex) {
        if(ex == QUOTA_EXCEEDED_ERR) {
          alert('Превышен лимит local storage');
        }
      }
    });
  }

  render() {
    console.log('render Field');
    return (
      <div className="field col-lg-12 d-flex flex-column flex-wrap justify-content-around">
        <button
          onClick = {this.addLine.bind(this, ['новое задание> ', 'кто? '])}
          className="btn btn-warning col-lg-2">
            Новое
        </button>
        
        {
          this.state.tasks.map((item, i) => {
            return(
              <Check 
                key = {i} 
                index = {i} 
                updateBlock = {this.updateNote.bind(this)}
                deleteBlock = {this.deleteNote.bind(this)}>
                {item.taskDate}
                {item.taskText}
                {item.taskAuthor}
              </Check>);
            }
          )
        }

        <button
          onClick = {this.writeLocSt.bind(this)}
          className="btn btn-secondary col-lg-2 mt-1">
            Запись LS
        </button>
      </div>
    );
  }
}

const app = document.getElementById("appl4");
ReactDOM.render (<Field />, app);
