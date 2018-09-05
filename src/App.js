import React, { Component } from 'react';
import Search from './Search/Search';
import Students from './Students/Students';
import NewStudent from './NewStudent/NewStudent';
import './App.css';


class App extends Component {
  state = {
    students: [],
    allStudents: [],
    first_name: '',
    last_name: '',
    email: '',
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

  submitFormHandler = (event) => {
    event.preventDefault();
    const { first_name, last_name, email } = this.state;
    const NewStudent = { first_name, last_name, email };
    const allStudents = [...this.state.allStudents]
    const lastStudentId = allStudents[allStudents.length -1].id;
    allStudents.push({...NewStudent, id: lastStudentId + 1});
    this.setState({ student: allStudents, allStudents});
  }
  firstnameChangeHandler(event) {
    const first_name = event.target.value;
    this.setState({ first_name })
  }

  lastnameChangeHandler(event) {
    const last_name = event.target.value;
    this.setState({ last_name })
  }

  emailChangeHandler(event) {
    const email = event.target.value;
    this.setState({ email })
  }
  componentDidMount() {
    const api_url = 'https://api.myjson.com/bins/gdwd8';
    fetch(api_url)
      .then(response => response.json())
      .then(students => this.setState({ students, allStudents: students }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Student Search</h1>
        </header>
        <NewStudent  submit={ this.submitFormHandler.bind(this) }
        addFirstName={ this.firstnameChangeHandler.bind(this) }
        addLastname={ this.lastnameChangeHandler.bind(this) }
        addEmail= { this.emailChangeHandler.bind(this) }
        />
        <Search search={this.searchHandler.bind(this)}  />
        <Students students={this.state.students} delete={ this.removeHandler.bind(this) } />
      </div>
    );
  }
}



export default App;
