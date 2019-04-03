import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Search from './Search';
import Footer from './Footer';
class App extends Component {
  constructor(){
    super();
    this.state={
      users : [],
      usersSort : [],
      currentPage : 1,
      usersPerPage : 5,
      searchField:'',
    }
    this.handleClick = this.handleClick.bind(this);
    this.onSort =  this.onSort.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    //sort in descending order
      onSort(event,sortKey){
        const users = this.state.users;
        users.sort((a,b) => b[sortKey].toString().localeCompare(a[sortKey].toString()));
        this.setState({usersSort:users});
      }

  onSearchChange= (event)=>{
    this.setState({searchField:event.target.value});
    console.log(this.state.users);
  }

  componentDidMount(){
    fetch('http://demo9197058.mockable.io/users')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ users: data ,usersSort :data });
      // console.log(this.state.users[0]);
    });
  }

  render() {

    var filteredUsers=this.state.users.filter(user=>{
      return user.first_name.toLowerCase().startsWith(this.state.searchField.toLowerCase());
    });
    if(filteredUsers.length===0 && this.state.searchField.length===0){
      filteredUsers=this.state.users;
    }
    return(
      <div>
        <Search searchChange={this.onSearchChange}/>
        <Table users={filteredUsers} usersSort={filteredUsers} currentPage={this.state.currentPage} usersPerPage={this.state.usersPerPage} handleClick={this.handleClick} onSort={this.onSort}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
