import React from 'react';

const Search=({searchField,searchChange})=>{
  return (
    <div>
      <input
      onChange={searchChange}
      type="search"
      className="form-control form-control"
      style={{width:'45%',marginTop:'1%',marginLeft:'1%'}}
      placeholder="Search by first name"/>
    </div>
  );
}

export default Search;
