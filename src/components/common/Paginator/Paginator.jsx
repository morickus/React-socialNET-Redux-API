import React, { useState } from 'react';
import styles from './Paginator.module.css';

let Paginator = ({ totalItemsCount, pageSize = 10, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / pageSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
  let rightPortionPageNumber = portionNumber * pageSize;
  if (currentPage < leftPortionPageNumber || currentPage > rightPortionPageNumber) {
    currentPage = leftPortionPageNumber;
    onPageChange(currentPage);
  }
  
  return (
    <div className={styles.pagination}>
      {/* {portionNumber > 1 && */}
        <button disabled={!(portionNumber > 1)} className={styles.buttonLeft} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
        <button disabled={!(portionNumber > 1)} onClick={() => { setPortionNumber(1); }}>FIRST</button>
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => <span key={p} className={currentPage === p ? styles.selectedPage : null}
          onClick={(e) => { onPageChange(p) }}>{p}</span>)}
      {/* {portionCount > portionNumber && */}
        <button disabled={!(portionCount > portionNumber)} onClick={() => { setPortionNumber(portionCount); }}>LAST</button>
        <button disabled={!(portionCount > portionNumber)} className={styles.buttonRight} onClick={() => { setPortionNumber(portionNumber + 1); }}>NEXT</button>
    </div>
  )
}

export default Paginator;