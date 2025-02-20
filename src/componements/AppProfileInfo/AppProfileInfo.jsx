import css from '../AppProfileInfo/AppProfileInfo.module.css'


export default function ProfileInfo  ({ username, tag, location }) {
    return(
    <div className={css.profileinfo}>
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    )
}