import React from "react"
import  ReactDOM  from "react-dom"  
import './style.css';

//user profile component
export default function UserProfileCard(){
    return(
        <div className="card">
            <img className="img" src="../profilepic.png" alt="ProfilePicture" />
            <div className="cardtexts">
            <h2>Yolokazi Mmutsi</h2>
            <h3>Software Engineer</h3>
            <p>Passionate about developing systems. I am proficient in frontend and backend development with React, Java, C#.</p> 
            <p id="statss">100 Followers |  100  Following  |  34 Projects </p>
        

            <div className="buttons">
                <button>Follow</button>
                <button>View Profile</button>
            </div>
            </div>
            
        </div>
    )
}
const App = (
    <div>
        <UserProfileCard/>
    </div>
)
 ReactDOM.render(App , document.getElementById("root"))