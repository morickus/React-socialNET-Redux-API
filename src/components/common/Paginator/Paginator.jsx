import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = currentPage; i <= pagesCount && i <= currentPage + 9; i++) {
        pages.push(i);
    }
    
    return (
        <div className={styles.pagination}>
            {pages.map(p => <span key={p} className={currentPage === p ? styles.selectedPage : null}
                onClick={(e) => { onPageChange(p) }}>{p}</span>)}
        </div>
    )
}

export default Paginator;