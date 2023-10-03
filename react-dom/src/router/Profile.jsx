import { useParams, Link } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";




const Profile = () => {
    const { name } = useParams();
  
    return (
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <hr />
        <h2>The profile visited is here:</h2>
        {name === "popeye" ? (
          <Popeye />
        ) : name === "spinach" ? (
          <Spinach />
        ) : <DefaultProfile/>}

        <h3>
            <Link to={"/profile/popeye"}> Popeye!    </Link>
            <br />
            <Link to={"/profile/spinach"}>Spinach!</Link>
        </h3>
      </div>
    );
  };

export default Profile