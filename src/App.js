import React, { useState } from 'react';
import './App.css';
import TeamMembers from './components/TeamMembers';
import MemberForm from './components/MemberForm';

function App() {

  const [ members, setMembers ] = useState([]);

  const addNewMember = (formData) => {
    const newMember = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role
    }
    setMembers([...members, newMember]);
  };

  return (
    <div>
      <h1>Team</h1>
      <MemberForm addNewMember={addNewMember} />
      <TeamMembers members={members} />
    </div>
  );
}

export default App;
