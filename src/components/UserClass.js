import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("Child Constructor");
        this.state = {
            userInfo: "Unavailable"
            // count : 0,
            // count2 : 2
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/Bhupi97');
        const json = await data.json();
        console.log(json);

        this.setState({     // We should use this.setState to update state variables
            userInfo: json
                // count2: this.state.count2 + 1
            });

    }

    componentDidUpdate() {
        // It is called when update cycle is completed
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        // It is called just before the component will unmount. i.e. component is removed from ui
        console.log("Component Will unmount");
    }

    render() {
        const { name, location, bio } = this.state.userInfo;
        // const { count } = this.state;
        // console.log("Child Render");


        
        return (
            <div className="userCard">
                    {/* <h2>Count = {count}</h2> */}
                    {/* <h2>Count2 = {count2}</h2> */}
                    {/* <button onClick={() => {
                        // NEVER UPDATE STATE VARIABLES DIRECTLY Eg. we cannot do this.state.count = this.state.count + 1
                        
                    }}>Count Increase</button> */}
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h3>Bio: {bio}</h3>
                    
            </div>
        );
    };
};

export default UserClass;

/***
 * 
 * Source :- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * ---MOUNTING---
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML dummy> -> Page loads with dummy data
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * 
 * ----UPDATE ----
 * 
 *      render(API data)
 *      <HTML (New API data)>
 *      Component Did Update
 * 
 * 
 */