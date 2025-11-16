// Simulated authentication utility
// In a real application, this would fetch from an API

export const getUserContext = () => {
  // Simulate different user roles for testing
  // You can change the role here to test different views: 'GM', 'RSM', or 'Rep'
  const role = localStorage.getItem('demo_role') || 'GM';
  
  const contexts = {
    'GM': {
      role: 'GM',
      company_id: '550e8400-e29b-41d4-a716-446655440001',
      region: 'US-West',
      team_id: null
    },
    'RSM': {
      role: 'RSM',
      company_id: '550e8400-e29b-41d4-a716-446655440002',
      region: null,
      team_id: 'North Coast'
    },
    'Rep': {
      role: 'Rep',
      company_id: '550e8400-e29b-41d4-a716-446655440003',
      region: null,
      team_id: null
    }
  };
  
  return contexts[role] || contexts['GM'];
};

export const setDemoRole = (role) => {
  localStorage.setItem('demo_role', role);
  window.location.reload();
};

// Simulate 403 error for Rep trying to access Parent Data
export const checkAccessPermission = (userRole, targetCompanyId) => {
  if (userRole === 'Rep') {
    // Rep can only access their own company_id
    const userContext = getUserContext();
    if (targetCompanyId !== userContext.company_id) {
      return {
        allowed: false,
        error: '403 - Access Denied: Reseller representatives cannot access Parent CRM data.'
      };
    }
  }
  return { allowed: true };
};

