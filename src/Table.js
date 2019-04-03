import React, { Component } from 'react';

class Table extends Component {
showDetails(e,id){
  window.location.href='/user/'+id.toString();
}
  render(){
    var renderPageNumbers=[];
    var renderUsers=[];
    if(this.props.users.length!==0){
    //  const{users,usersSort,currentPage,usersPerPage}=this.state;
      //const users=this.props.users;
      const usersSort=this.props.usersSort;
      const currentPage=this.props.currentPage;
      const usersPerPage=this.props.usersPerPage;

      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = usersSort.slice(indexOfFirstUser, indexOfLastUser);

      renderUsers = currentUsers.map((user, index) => {
                return(<tr key={index} onClick={e=>this.showDetails(e,user.id)}>
                              <td>{user.first_name}</td>
                              <td>{user.last_name}</td>
                              <td>{user.company_name}</td>
                              <td>{user.city}</td>
                              <td>{user.state}</td>
                              <td>{user.zip}</td>
                              <td>{user.email}</td>
                              <td><a href={user.web}>{user.web}</a></td>
                              <td>{user.age}</td>
                          </tr>);
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(usersSort.length / usersPerPage); i++) {
          pageNumbers.push(i);
        }

        renderPageNumbers = pageNumbers.map(number => {
           return (
             <li className="page-item " key={number}>
            <a className="page-link" href="/"
             id={number}
             onClick={this.props.handleClick}>{number}</a>
             </li>
           );
         });
    }

    return(<div style={{marginTop:'1%',marginLeft:'1%'}}>
              <table className="table table-striped">
              <thead>
                <tr>
                  <th onClick={e => this.props.onSort(e,'first_name')}><i className="fa fa-fw fa-sort-desc"></i>First Name</th>
                  <th onClick={e => this.props.onSort(e, 'last_name')}><i className="fa fa-fw fa-sort-desc"></i>Last Name</th>
                  <th onClick={e => this.props.onSort(e, 'company_name')}><i className="fa fa-fw fa-sort-desc"></i>Company Name</th>
                  <th onClick={e => this.props.onSort(e, 'city')}><i className="fa fa-fw fa-sort-desc"></i>City</th>
                  <th onClick={e => this.props.onSort(e, 'state')}><i className="fa fa-fw fa-sort-desc"></i>State</th>
                  <th onClick={e => this.props.onSort(e, 'zip')}><i className="fa fa-fw fa-sort-desc"></i>ZIP</th>
                  <th onClick={e => this.props.onSort(e, 'email')}><i className="fa fa-fw fa-sort-desc"></i>E-Mail</th>
                  <th onClick={e => this.props.onSort(e, 'web')}><i className="fa fa-fw fa-sort-desc"></i>Web</th>
                  <th onClick={e => this.props.onSort(e, 'age')}><i className="fa fa-fw fa-sort-desc"></i>Age</th>
                </tr>
              </thead>
              <tbody>
                {renderUsers}
              </tbody>
              </table>
              <ul id="page-numbers" className="pagination">
                {renderPageNumbers}
              </ul>
          </div>)
  }
}

export default Table;
