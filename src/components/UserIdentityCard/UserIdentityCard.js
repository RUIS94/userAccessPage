import React from 'react';
import './UserIdentityCard.css';
import { getRSMNameByTeam } from '../../utils/resellerData';
import { Building2, MapPin, Users } from 'lucide-react';

const UserIdentityCard = ({ userContext }) => {
  const getRoleDisplayName = (role) => {
    const roleMap = {
      'GM': 'General Manager',
      'RSM': 'Regional Sales Manager',
      'Rep': 'Reseller Representative'
    };
    return roleMap[role] || role;
  };

  const getScopeDisplay = () => {
    if (userContext.role === 'GM') {
      return userContext.region || 'N/A';
    } else if (userContext.role === 'RSM') {
      return userContext.team_id || 'N/A';
    }
    return null;
  };

  const getDisplayName = () => {
    const gmMap = {
      'US-West': 'Robert Brown',
      'US-East': 'Emily Clark',
      'US-Central': 'Laura Chen',
      'EMEA': 'Oliver Wright',
      'APAC': 'Akira Tanaka'
    };
    if (userContext.role === 'GM') {
      return gmMap[userContext.region] || 'User';
    }
    if (userContext.role === 'RSM') {
      return getRSMNameByTeam(userContext.team_id) || 'User';
    }
    return 'User';
  };

  return (
    <div className="user-identity-card">
      <div className="identity-header">
        <h2>{getDisplayName()}</h2>
      </div>
      <div className="identity-content">
        <div className="identity-item identity-inline">
          <span className="role-badge">{getRoleDisplayName(userContext.role)}</span>
        </div>
        <div className="identity-item identity-inline identity-spaced">
          <Building2 className="identity-icon" />
          <span className="identity-label">Tenant ID:</span>
          <span className="identity-value company-id">{userContext.company_id}</span>
        </div>
        {getScopeDisplay() && (
          <div className="identity-item identity-inline">
            {(userContext.role === 'RSM' ? <Users className="identity-icon" /> : <MapPin className="identity-icon" />)}
            <span className="identity-label">{userContext.role === 'RSM' ? 'Team' : 'Management Scope'}:</span>
            <span className="identity-value scope">{getScopeDisplay()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserIdentityCard;

