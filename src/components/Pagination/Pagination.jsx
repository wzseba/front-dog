import React from 'react'
// import { useState } from 'react';


const Pagination = ({dogsPerPage, totalDogs, currentPage, setCurrentPage}) => {

  const pageNumbers = [];
  
  for(let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++){
    pageNumbers.push(i);
  }


  return (
    <div>Pagination</div>
  )
}

export default Pagination