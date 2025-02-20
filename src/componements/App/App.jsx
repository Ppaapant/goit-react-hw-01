import Profile from "../AppaProfile/AppaProfile";
import userData from "../../userData.json"



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
      
    </>
  );
}