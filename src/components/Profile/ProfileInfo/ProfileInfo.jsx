import React, { useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/users.png';
import ProfileDataReduxForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, isOwner, updateStatus, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    let file = e.target.files[0];
    if (file) {
      savePhoto(file);
    }
  }

  let onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="ava" className={s.mainPhoto} />
        <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
        {editMode ?
          <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div className={s.fullName}><b>Name</b>: {profile.fullName}</div>
      <div><b>About me</b>: {profile.aboutMe}</div>
      <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
      {profile.lookingForAJob &&
        <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
      }

      <div><b>Contacts</b> {Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}</div>
    </div>
  )
}

const Contacts = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}>{contactTitle}: {contactValue || "no"}</div>
}

export default ProfileInfo;