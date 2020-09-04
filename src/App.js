import React, { useState } from 'react';
import './App.css';
import TeamMembers from './components/TeamMembers';
import MemberForm from './components/MemberForm';

function App() {

  const [ members, setMembers ] = useState([
    {
      name: 'name',
      email: 'email',
      role: 'role'
    }
  ]);

  return (
    <div>
      <h1>Team</h1>
      <TeamMembers />
      <MemberForm />
    </div>
  );
}

export default App;
