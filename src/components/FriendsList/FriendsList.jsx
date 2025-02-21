// import css from "../FriendsList/Friends.List.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"
import css from "../FriendsList/FriendsList.module.css"




const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendslist}>
            {friends.map(({id, avatar, name, isOnline}) => (
                <li key={id}>
                    <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;


