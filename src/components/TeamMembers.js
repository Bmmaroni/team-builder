import React from 'react';

const TeamMembers = (props) => {
    console.log('Props from TeamMembers: ', props);

    return (
        <div>
            {props.members.map(member => (
                <div key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;