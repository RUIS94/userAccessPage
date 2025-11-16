import React, { useState, useEffect } from 'react';
import './App.css';
import UserIdentityCard from './components/UserIdentityCard/UserIdentityCard';
import ResellerManagementList from './components/ResellerManagementList/ResellerManagementList';
import RoleSwitcher from './components/RoleSwitcher/RoleSwitcher';
import { getUserContext } from './utils/auth';

function App() {
  const [userContext, setUserContext] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user context
    const context = getUserContext();
    setUserContext(context);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="app">Loading...</div>;
  }

  if (!userContext) {
    return <div className="app">Error: Unable to load user context</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-header-title">User Access</h1>
        <RoleSwitcher currentRole={userContext.role} />
      </header>
      <div className="app-container">
        <UserIdentityCard userContext={userContext} />
        {(userContext.role === 'GM' || userContext.role === 'RSM') && (
          <ResellerManagementList userContext={userContext} />
        )}
        {userContext.role === 'Rep' && (
          <div className="access-restricted">
            <h2>Access Restricted</h2>
            <p>Reseller representatives do not have access to Reseller management functions.</p>
            <p>You can only access data for your own company (Company ID: {userContext.company_id}).</p>
            <div className="error-403">
              <strong>403 - Blocked:</strong> Reseller Rep cannot access Parent CRM data.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

