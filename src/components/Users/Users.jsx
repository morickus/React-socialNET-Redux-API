import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/users.png';
import { NavLink } from 'react-router-dom';

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = props.currentPage; i <= pagesCount && i <= props.currentPage + 9; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.pagination}>
                {pages.map(p => <span key={p} className={props.currentPage === p ? styles.selectedPage : null}
                    onClick={(e) => { props.onPageChange(p) }}>{p}</span>)}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div><NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" className={styles.userPhoto} /></NavLink></div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id); }} >Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id); }} >Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </div>
            )}
        </div>
    )
}

export default Users;