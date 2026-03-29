import { useEffect, useState } from "react";


function Body(){

    const [Profile,setProfile] = useState([]);
    const [numberofProfile,setnumberofProfile] = useState("");

   async function generateProfile(count){
        const ran = Math.floor(1+Math.random()*10000);
         
        const response = await fetch( `https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);
    }
// ek hi baar fetch hoga useeffect se.
    useEffect(()=>{
        generateProfile();
    },[])

    return(
        <div className="but">

            <input type="number" className="input" placeholder="Search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(numberofProfile)}>Search Profile</button>
           
        <div className="profile">
            {
                Profile.map((value)=>{                 

                 return(<div key={value.id} className="cards">

                       <img src={value.avatar_url} alt={value.login} />
                        <h2>{value.login}</h2>
                       <a href={value.html_url} target="_blank" rel="noopener noreferrer">Profile</a>

                    </div>)
                })
            }
        </div>
          </div>
    )


}

export default Body;