import profileIcon from '../assets/profile.png'
import '../css/ProfileIcon.css'

function ProfileIcon() {
  return (
    <>
      <div className="profile-icon">
        <img src={profileIcon}/>
      </div>
    </>
  )
}

export default ProfileIcon