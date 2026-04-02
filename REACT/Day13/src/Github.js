import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Github() {

  const { name } = useParams();
  const [profile, setProfile] = useState(null);

  async function fetchUser() {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    fetchUser();
  }, [name]);

  return (
    <>
      <h1>My Github Profile</h1>

      <div>
        <img src={profile?.avatar_url} alt="github avatar" width="150" />
        <h2>{profile?.login}</h2>
      </div>
    </>
  );
}
