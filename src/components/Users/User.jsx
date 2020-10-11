import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../assets/images/users.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, follow, unfollow }) => {
	return (
		<div className={styles.userBlock}>
			<div><NavLink to={'/profile/' + user.id}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="ava" className={styles.userPhoto} /></NavLink></div>
			<div>
				{user.followed
					? <button className={styles.follow} disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => { unfollow(user.id); }} >Unfollow</button>
					: <button className={styles.follow} disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => { follow(user.id); }} >Follow</button>
				}
			</div>
			<div>{user.name}</div>
			<div>{user.status}</div>
			<div>{"user.location.country"}</div>
			<div>{"user.location.city"}</div>
		</div>
	)
}

export default User;