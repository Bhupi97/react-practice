import { useState } from 'react';

const User = (props) => {
        const count = useState(0);
        const count1 = useState(1);
    return (
        <div className="userCard">
                <h2>count = {count}</h2>
                <h2>count1 = {count1}</h2>
                <h2>Name: {props.name}</h2>
                <h3>Location: {props.location}</h3>
                <h3>Contact: {props.contact}</h3>
        </div>
    );
};

export default User;