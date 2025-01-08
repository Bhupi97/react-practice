import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";



class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor is Called");
    }

    componentDidMount(){
        console.log("Component did mount parent");
    }

    render() {
        
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                {/* Way to implement context in class based component -> enclose a callback function in jsx between UserContext.Consumer tags*/}
                <UserContext.Consumer>
                    { ({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                {/* <User name={"Bhupinder Partap Singh (Function)"} location={"Toronto"} contact={"@PartapBhupinder"}/> */}
                <UserClass name={"Bhupinder Partap Singh (Class)"} location={"Toronto"} contact={"@PartapBhupinder"}/>

            </div>
        );

    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={"Bhupinder Partap Singh (Function)"} location={"Toronto"} contact={"@PartapBhupinder"}/>
//             <UserClass name={"Bhupinder Partap Singh (Class)"} location={"Toronto"} contact={"@PartapBhupinder"}/>
//         </div>
//     );
// };

export default About;