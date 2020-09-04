import React, { useState } from 'react';


const MemberForm = (props) => {
    console.log("Props from MemberForm ", props);

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const changeHandler = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: '', email: '', role: ''});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='Name'>Name</label>
            <input type='text' name='Name' value={member.name} onChange={changeHandler} />

            <label htmlFor='Email'>Email</label>
            <input type='text' name='Email' value={member.email} onChange={changeHandler} />

            <label htmlFor='Role'>Role</label>
            <input type='text' name='Role' value={member.role} onChange={changeHandler} />

            <button type='submit'>Add New Member</button>
        </form>
    );
};

export default MemberForm;