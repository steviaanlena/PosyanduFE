import profileIcon from '../assets/profile.png'
import st from '../css/components/ProfileIcon.module.css'

function ProfileIcon() {
  return (
    <>
      <div className={st.profileIcon}>
        <img src={profileIcon}/>
      </div>
    </>
  )
}

export default ProfileIcon