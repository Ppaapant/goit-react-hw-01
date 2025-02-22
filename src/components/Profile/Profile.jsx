import ProfileInfo from "../AppProfileInfo/AppProfileInfo";
import ProfileStats from "../AppStats/AppStats";
import ProfileImage from "../ProfileImage/ProfileImage";
import css from "./Profile.module.css";







export default function Profile ({username, tag, location, image, stats}){

  return(
    <div className={css.profile}>
      <ProfileImage image={image} />
      <ProfileInfo username={username} tag={tag} location={location} />
      <ProfileStats stats={stats} />
 

    </div>
  );
}