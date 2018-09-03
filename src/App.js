import React, { Component } from 'react';
import Search from './Search/Search';
import Students from './Students/Students';
import Delete from './Delete/Delete'
import './App.css';


class App extends Component {
  state = {
    students: [],
    allStudents: [],
  }
  searchHandler(event) {
    const keyword = event.target.value.toLowerCase().trim();
    const filteredStudents = [...this.state.allStudents].filter(student => {
      return student.first_name.toLowerCase().includes(keyword)
        || student.last_name.toLowerCase().includes(keyword)
        || student.email.toLowerCase().includes(keyword);
    });

    this.setState({ students: filteredStudents })
  }

  removeHandler(index) {
    const students = [...this.state.students];
    students.splice(index, 1);
    this.setState({ students })
    
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/gdwd8')
      .then(response => response.json())
      .then(students => this.setState({ students, allStudents: students }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Student Search</h1>
        </header>
        <Search search={this.searchHandler.bind(this)}  />
        <Students students={this.state.students} delete={ this.removeHandler.bind(this) } />
      </div>
    );
  }
}



export default App;
