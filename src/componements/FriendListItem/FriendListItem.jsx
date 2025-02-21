import clsx from 'clsx';
import css from "../FriendListItem/FriendListItem.module.css"





export default function FriendListItem ({name,isOnline,avatar}) {


  const statusClsx = clsx(css.text, isOnline ? css.active : css.retired);


    return (
<div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={statusClsx}>{isOnline ? "Active" : "Retired"}</p>
</div>

);
}