import React from 'react';
import { useUserContext } from '../contexts/UserContext';

function Emoji() {
    const { currentUser, handleUpdateUser} = useUserContext();

  const handleRunningLate = () => {
    const newMood = currentUser.mood === '😄' ? '😟' : '😒';
    handleUpdateUser({ ...currentUser, mood: newMood });
  };

  return (
    <div>
      Current Mood: {currentUser.mood || '😄'}
      <button onClick={() => handleUpdateUser({ ...currentUser, mood: '😄' })}>Win Lotto</button>
      <button onClick={handleRunningLate}>Running Late</button>
    </div>
  );
}

export default Emoji