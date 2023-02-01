import React from 'react'
import s from './Pagination.module.css';


const Pagination = ({dogsPerPage, totalDogs, currentPage, setCurrentPage}) => {

  const pageNumbers = [];
  const cardPerPage = Math.ceil(totalDogs / dogsPerPage);
  
  for(let i = 1; i <= cardPerPage; i++){
    pageNumbers.push(i);
  }

  const onPreviusPage = ()=>{
    setCurrentPage(currentPage - 1);
  }
  const onNextPage = ()=>{
    setCurrentPage(currentPage + 1);
  }

  const onSpecificPage = (n)=>{
    setCurrentPage(n)
  }

  return (
    <nav className={s.container_nav}>
      <button className={s.btn} disabled={ currentPage === 1 ? true : false} onClick={ onPreviusPage }>Anterior</button>
      
      <ul className={s.container_ul}>
        {
          pageNumbers?.map(page => (
            
            <button key={page} className={s.btn_pages} onClick={()=>onSpecificPage(page)}>{page}</button>
           
          ))
        }
      </ul>

      <button className={s.btn} disabled={ currentPage >= pageNumbers.length ? true : false} onClick={ onNextPage }>Siguiente</button>
    </nav>
  )
}

export default Pagination