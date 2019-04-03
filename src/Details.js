import React, { Component } from 'react';
import Footer from './Footer';
class Details extends Component {
  constructor(){
    super();
    this.state = {
      user : null
    };
  }

  componentDidMount(){
    fetch('http://demo9197058.mockable.io/users')
    .then(results => {
      return results.json();
    }).then(data => {
      const id_=this.props.match.params.id;
      const myuser=data.filter(function(i){
        return i.id.toString()===id_;
      })
      this.setState({ user: myuser[0]});
      //console.log(myuser[0]);
    });
  }

  render(){
    const user=this.state.user;
    if(user!==null){
      return(
        <div>
        <a href="/"><button className="btn btn-primary"> &lt;&lt; Back</button></a>
          <h3>{user.first_name}</h3>
          <table className="table table-striped">
            <tbody>
                <tr>
                  <td>Company Name</td>
                  <td>{user.company_name}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{user.state}</td>
                </tr>
                <tr>
                  <td>ZIP</td>
                  <td>{user.zip}</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Web</td>
                  <td><a href={user.web}>{user.web}</a></td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{user.age}</td>
                </tr>
            </tbody>
          </table>
          <Footer/>
        </div>
      )
    }
    else{
      return(<div><Footer/></div>)
    }
  }
}

export default Details;
