import css from '../AppStats/AppStats.module.css'

export default function ProfileStats ({stats}) {
    return (
   <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.value}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.value}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.value}>{stats.likes}</span>
    </li>
   </ul>

    );
}