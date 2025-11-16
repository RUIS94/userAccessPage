import React, { useState } from 'react';
import './OnboardingModal.css';
import { createResellerInvitation } from '../../utils/resellerData';

const OnboardingModal = ({ userContext, onClose, onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    region: userContext.role === 'GM' ? userContext.region : '',
    team_id: userContext.role === 'RSM' ? userContext.team_id : '',
    admin_email: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Reseller name is required';
    }
    
    if (userContext.role === 'GM' && !formData.region.trim()) {
      newErrors.region = 'Region is required';
    }
    
    if (userContext.role === 'RSM' && !formData.team_id.trim()) {
      newErrors.team_id = 'Team ID is required';
    }
    
    if (!formData.admin_email.trim()) {
      newErrors.admin_email = 'Admin email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.admin_email)) {
      newErrors.admin_email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const invitationData = {
        ...formData,
        invited_by: userContext.role,
        invited_by_id: userContext.company_id,
        status: 'Invited',
        invitation_token: generateJWTToken(),
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      };
      
      createResellerInvitation(invitationData);
      
      alert(`Invitation sent successfully! A signed JWT invitation link (valid for 24 hours) has been sent to ${formData.admin_email}`);
      
      onComplete();
    } catch (error) {
      alert('Error creating invitation. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const generateJWTToken = () => {
    // Simulated JWT token generation
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify({
      reseller_name: formData.name,
      admin_email: formData.admin_email,
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60
    }))}.signature`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Reseller</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="onboarding-form">
          <div className="form-group">
            <label htmlFor="name">
              Reseller Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter reseller company name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {userContext.role === 'GM' && (
            <div className="form-group">
              <label htmlFor="region">
                Region <span className="required">*</span>
              </label>
              <input
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Enter region"
                className={errors.region ? 'error' : ''}
              />
              {errors.region && <span className="error-message">{errors.region}</span>}
            </div>
          )}

          {userContext.role === 'RSM' && (
            <div className="form-group">
              <label htmlFor="team_id">
                Team ID <span className="required">*</span>
              </label>
              <input
                type="text"
                id="team_id"
                name="team_id"
                value={formData.team_id}
                onChange={handleChange}
                placeholder="Enter team ID"
                className={errors.team_id ? 'error' : ''}
              />
              {errors.team_id && <span className="error-message">{errors.team_id}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="admin_email">
              Admin Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="admin_email"
              name="admin_email"
              value={formData.admin_email}
              onChange={handleChange}
              placeholder="admin@reseller.com"
              className={errors.admin_email ? 'error' : ''}
            />
            {errors.admin_email && <span className="error-message">{errors.admin_email}</span>}
            <div className="form-hint">
              A signed JWT invitation link (valid for 24 hours) will be sent to this email.
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose} disabled={submitting}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Invitation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingModal;

