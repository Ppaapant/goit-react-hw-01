import css from '../ProfileImage/ProfileImage.module.css'

export default function ProfileImage ({image}) {
    return <img src={image} alt="User avatar" className={css.avatar}/>;
}