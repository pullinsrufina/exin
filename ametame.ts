import React, { useState } from 'react';

// Define an enum for controlActiveState
enum ControlActiveState {
  Key = 'key',
  Active = 'active'
}

const MyComponent: React.FC = () => {
  // State for controlActiveState
  const [controlActiveState, setControlActiveState] = useState<ControlActiveState>(ControlActiveState.Key);

  // State for appearsActive
  const [appearsActive, setAppearsActive] = useState<boolean>(false);

  // Function to toggle controlActiveState
  const toggleControlActiveState = () => {
    setControlActiveState(prevState =>
      prevState === ControlActiveState.Key ? ControlActiveState.Active : ControlActiveState.Key
    );
  };

  // Function to toggle appearsActive
  const toggleAppearsActive = () => {
    setAppearsActive(prevState => !prevState);
  };

  return (
    <div>
      <h1>Control Active State: {controlActiveState}</h1>
      <h2>Appears Active: {appearsActive ? 'Yes' : 'No'}</h2>
      <button onClick={toggleControlActiveState}>
        Toggle Control Active State
      </button>
      <button onClick={toggleAppearsActive}>
        Toggle Appears Active
      </button>
    </div>
  );
};

export default MyComponent;
