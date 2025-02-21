import Profile from "../AppaProfile/AppaProfile";
import userData from "../../userData.json"
import  FriendList from "../FriendsList/FriendsList";
import friendsData from "../../friends.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../../../transactions.json"

const friends = friendsData.friends;
// const activeOfficers = officers.filter((officer) => officer.active);

// const youngOfficers = officers.filter((officer) => officer.age < 40);

export default function App() {
  return (
    <>
      
      <Profile
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </>
  );
}