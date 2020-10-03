import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatuWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, isFetching, status, updateStatus}) => {
    if(!profile || isFetching) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : 'https://okeygeek.ru/wp-content/uploads/2017/09/vk-stiker-2.png'} alt="ava"/>
                <ProfileStatuWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;