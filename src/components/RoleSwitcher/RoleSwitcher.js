import React from 'react';
import './RoleSwitcher.css';
import { setDemoRole } from '../../utils/auth';

const RoleSwitcher = ({ currentRole }) => {
  const handleRoleChange = (role) => {
    if (window.confirm(`Switch to ${role} role? This will reload the page.`)) {
      setDemoRole(role);
    }
  };

  return (
    <div className="role-switcher">
      <span className="switcher-label">Demo Role:</span>
      <div className="role-buttons">
        <button
          className={`role-btn ${currentRole === 'GM' ? 'active' : ''}`}
          onClick={() => handleRoleChange('GM')}
        >
          GM
        </button>
        <button
          className={`role-btn ${currentRole === 'RSM' ? 'active' : ''}`}
          onClick={() => handleRoleChange('RSM')}
        >
          RSM
        </button>
        <button
          className={`role-btn ${currentRole === 'Rep' ? 'active' : ''}`}
          onClick={() => handleRoleChange('Rep')}
        >
          Rep
        </button>
      </div>
    </div>
  );
};

export default RoleSwitcher;

