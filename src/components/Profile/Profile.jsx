import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <main>
      <ProfileInfo profile={props.profile}
        isOwner={props.isOwner}
        status={props.status}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </main>
  );
}

export default Profile;