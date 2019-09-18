'use strict';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Check from './check-comp';

// React-компонент (class-based)
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
    //console.log(this.state.tasks);
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
        //console.log(returnObj);
        newVar.push(returnObj);
      }
    } while(inputLS !== null || i < 1000); // защищаюсь от бесконечного цикла во время отладки
    //console.log(newVar);
    this.setState({tasks: newVar});
  }

  writeLocSt(q) {
    let arr = this.state.tasks;
    let serialObj;

    console.log('writeLocSt');
    //console.log(this.state.tasks);

    // убираю предыдущие остатки из LS
    var inputLS = null;
    let j = 0;
    do {
      let key = String(j++);
      inputLS = localStorage.getItem(key);
      if(inputLS !== null) {  // беру только свой JSON
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

  addLine(textLine) {
    console.log('addLine');
    //console.log(textLine);
    //console.log(this.state.tasks);

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
    //console.log(this.state.tasks);
    this.setState({tasks: arr});
  }

  deleteNote(i) {
    console.log('delete');
    //console.log(this.state.tasks);
    let arr = this.state.tasks;
    arr.splice(i, 1);  //  удалить только один элемент, выбранный i
    this.setState({tasks: arr});
    //console.log(this.state.tasks);
  }

  updateNote(textLine, i) {
    console.log('update ' + textLine[0] + ' ' +textLine[1] + ' ' + i);
    //console.log(textLine);
    //console.log(this.state.tasks);
    let arr = this.state.tasks;
    //console.log(arr[i]);
    arr[i].taskText = textLine[0];  //  заменить элемент, выбранный i
    arr[i].taskAuthor = textLine[1];  //  заменить элемент, выбранный i
    //console.log(arr[i]);
    this.setState({tasks: arr});
  }

  render() {
    //console.log('render Field');
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
                updateBlock = {this.updateNote.bind(this) }
                deleteBlock = {this.deleteNote.bind(this)}
                updateLS = {this.writeLocSt.bind(this) }>
                {item.taskDate}
                {item.taskText}
                {item.taskAuthor}
              </Check>);
            }
          )
        }
      </div>
    );
  }
}

export default Field;