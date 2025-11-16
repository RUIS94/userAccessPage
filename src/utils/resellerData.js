// Simulated data storage and management
// In a real application, this would interact with a backend API

let resellersData = [
  {
    id: 'reseller-001',
    name: 'Tech Solutions Inc.',
    company_id: '550e8400-e29b-41d4-a716-446655440010',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'Jane Doe',
    rsm_team: 'North Coast',
    status: 'Activated',
    admin_email: 'admin@techsolutions.com',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 'reseller-002',
    name: 'Global Distributors LLC',
    company_id: '550e8400-e29b-41d4-a716-446655440011',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'Jane Doe',
    rsm_team: 'North Coast',
    status: 'Onboarded',
    admin_email: 'admin@globaldist.com',
    created_at: '2024-01-20T14:30:00Z'
  },
  {
    id: 'reseller-003',
    name: 'Enterprise Partners Co.',
    company_id: '550e8400-e29b-41d4-a716-446655440012',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'Mike Johnson',
    rsm_team: 'South Coast',
    status: 'Invited',
    admin_email: 'admin@enterprisepartners.com',
    created_at: '2024-01-25T09:15:00Z'
  }
  ,
  {
    id: 'reseller-004',
    name: 'Alpha Retail Group',
    company_id: '550e8400-e29b-41d4-a716-446655440013',
    gm_name: 'Emily Clark',
    gm_region: 'US-East',
    rsm_name: 'Sara Lee',
    rsm_team: 'East Coast',
    status: 'Activated',
    admin_email: 'admin@alpharetail.com',
    created_at: '2024-02-01T08:00:00Z'
  },
  {
    id: 'reseller-005',
    name: 'Pacific Wholesale',
    company_id: '550e8400-e29b-41d4-a716-446655440014',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'David Kim',
    rsm_team: 'West Coast',
    status: 'Onboarded',
    admin_email: 'admin@pacificwholesale.com',
    created_at: '2024-02-05T12:00:00Z'
  },
  {
    id: 'reseller-006',
    name: 'Midland Supplies',
    company_id: '550e8400-e29b-41d4-a716-446655440015',
    gm_name: 'Laura Chen',
    gm_region: 'US-Central',
    rsm_name: 'Priya Patel',
    rsm_team: 'Central',
    status: 'Invited',
    admin_email: 'admin@midlandsupplies.com',
    created_at: '2024-02-10T09:45:00Z'
  },
  {
    id: 'reseller-007',
    name: 'EMEA Partners',
    company_id: '550e8400-e29b-41d4-a716-446655440016',
    gm_name: 'Oliver Wright',
    gm_region: 'EMEA',
    rsm_name: 'Liam Nguyen',
    rsm_team: 'EMEA',
    status: 'Invited',
    admin_email: 'admin@emeapartners.com',
    created_at: '2024-02-12T11:20:00Z'
  },
  {
    id: 'reseller-008',
    name: 'APAC Ventures',
    company_id: '550e8400-e29b-41d4-a716-446655440017',
    gm_name: 'Akira Tanaka',
    gm_region: 'APAC',
    rsm_name: 'Sara Lee',
    rsm_team: 'TEAM-2024-003',
    status: 'Onboarded',
    admin_email: 'admin@apacventures.com',
    created_at: '2024-02-15T07:30:00Z'
  },
  {
    id: 'reseller-009',
    name: 'Northern Traders',
    company_id: '550e8400-e29b-41d4-a716-446655440018',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'Mike Johnson',
    rsm_team: 'South Coast',
    status: 'Invited',
    admin_email: 'admin@northerntraders.com',
    created_at: '2024-02-18T10:05:00Z'
  },
  {
    id: 'reseller-010',
    name: 'Southern Commerce',
    company_id: '550e8400-e29b-41d4-a716-446655440019',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'David Kim',
    rsm_team: 'West Coast',
    status: 'Onboarded',
    admin_email: 'admin@southerncommerce.com',
    created_at: '2024-02-20T13:15:00Z'
  },
  {
    id: 'reseller-011',
    name: 'Eastern Market Co.',
    company_id: '550e8400-e29b-41d4-a716-446655440020',
    gm_name: 'Emily Clark',
    gm_region: 'US-East',
    rsm_name: 'Jane Doe',
    rsm_team: 'North Coast',
    status: 'Invited',
    admin_email: 'admin@easternmarket.com',
    created_at: '2024-02-22T16:40:00Z'
  },
  {
    id: 'reseller-012',
    name: 'Western Supply Hub',
    company_id: '550e8400-e29b-41d4-a716-446655440021',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'Priya Patel',
    rsm_team: 'Central',
    status: 'Activated',
    admin_email: 'admin@westernsupplyhub.com',
    created_at: '2024-02-25T09:00:00Z'
  }
  ,
  {
    id: 'reseller-013',
    name: 'Cascade Tech',
    company_id: '550e8400-e29b-41d4-a716-446655440022',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'Jane Doe',
    rsm_team: 'North Coast',
    status: 'Activated',
    admin_email: 'admin@cascadetech.com',
    created_at: '2024-03-01T09:00:00Z'
  },
  {
    id: 'reseller-014',
    name: 'Sierra Logistics',
    company_id: '550e8400-e29b-41d4-a716-446655440023',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: 'Mike Johnson',
    rsm_team: 'South Coast',
    status: 'Onboarded',
    admin_email: 'admin@sierralogistics.com',
    created_at: '2024-03-02T10:30:00Z'
  },
  {
    id: 'reseller-015',
    name: 'West Solo Inc.',
    company_id: '550e8400-e29b-41d4-a716-446655440024',
    gm_name: 'Robert Brown',
    gm_region: 'US-West',
    rsm_name: null,
    rsm_team: null,
    status: 'Invited',
    admin_email: 'admin@westsolo.com',
    created_at: '2024-03-03T11:45:00Z'
  },
  {
    id: 'reseller-016',
    name: 'Standalone Retail',
    company_id: '550e8400-e29b-41d4-a716-446655440025',
    gm_name: null,
    gm_region: null,
    rsm_name: null,
    rsm_team: null,
    status: 'Onboarded',
    admin_email: 'admin@standaloneretail.com',
    created_at: '2024-03-05T08:20:00Z'
  }
];

let auditLogsData = {
  'reseller-001': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-01-15T10:00:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'John Smith',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-01-15T10:05:00Z',
      details: 'SSO invitation sent to admin@techsolutions.com',
      user: 'John Smith',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-01-15T14:30:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-01-15T14:35:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'Activated',
      timestamp: '2024-01-16T09:00:00Z',
      details: 'Reseller activated by GM. Full access granted.',
      user: 'John Smith',
      user_role: 'GM'
    }
  ],
  'reseller-002': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-01-20T14:30:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Jane Doe',
      user_role: 'RSM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-01-20T14:35:00Z',
      details: 'SSO invitation sent to admin@globaldist.com',
      user: 'Jane Doe',
      user_role: 'RSM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-01-21T11:20:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-01-21T11:25:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    }
  ],
  'reseller-003': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-01-25T09:15:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'John Smith',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-01-25T09:20:00Z',
      details: 'SSO invitation sent to admin@enterprisepartners.com',
      user: 'John Smith',
      user_role: 'GM'
    }
  ]
  ,
  'reseller-004': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-01T08:00:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Emily Clark',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-01T08:10:00Z',
      details: 'SSO invitation sent to admin@alpharetail.com',
      user: 'Emily Clark',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-02-01T13:20:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-02-01T13:30:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'Activated',
      timestamp: '2024-02-02T09:00:00Z',
      details: 'Reseller activated by GM. Full access granted.',
      user: 'Emily Clark',
      user_role: 'GM'
    }
  ],
  'reseller-005': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-05T12:00:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Robert Brown',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-05T12:10:00Z',
      details: 'SSO invitation sent to admin@pacificwholesale.com',
      user: 'Robert Brown',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-02-05T16:45:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-02-05T17:00:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    }
  ],
  'reseller-006': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-10T09:45:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Laura Chen',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-10T09:50:00Z',
      details: 'SSO invitation sent to admin@midlandsupplies.com',
      user: 'Laura Chen',
      user_role: 'GM'
    }
  ],
  'reseller-007': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-12T11:20:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Oliver Wright',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-12T11:30:00Z',
      details: 'SSO invitation sent to admin@emeapartners.com',
      user: 'Oliver Wright',
      user_role: 'GM'
    }
  ],
  'reseller-008': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-15T07:30:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Akira Tanaka',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-15T07:35:00Z',
      details: 'SSO invitation sent to admin@apacventures.com',
      user: 'Akira Tanaka',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-02-15T12:10:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-02-15T12:20:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    }
  ],
  'reseller-009': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-18T10:05:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'John Smith',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-18T10:10:00Z',
      details: 'SSO invitation sent to admin@northerntraders.com',
      user: 'John Smith',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-02-18T14:55:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-02-18T15:05:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'Activated',
      timestamp: '2024-02-19T09:00:00Z',
      details: 'Reseller activated by GM. Full access granted.',
      user: 'John Smith',
      user_role: 'GM'
    }
  ],
  'reseller-010': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-20T13:15:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'John Smith',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-20T13:25:00Z',
      details: 'SSO invitation sent to admin@southerncommerce.com',
      user: 'John Smith',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-02-20T17:40:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-02-20T17:50:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    }
  ],
  'reseller-011': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-22T16:40:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Emily Clark',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-22T16:45:00Z',
      details: 'SSO invitation sent to admin@easternmarket.com',
      user: 'Emily Clark',
      user_role: 'GM'
    }
  ],
  'reseller-012': [
    {
      event_type: 'Contract Uploaded',
      timestamp: '2024-02-25T09:00:00Z',
      details: 'Reseller contract document uploaded and verified.',
      user: 'Robert Brown',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Sent',
      timestamp: '2024-02-25T09:10:00Z',
      details: 'SSO invitation sent to admin@westernsupplyhub.com',
      user: 'Robert Brown',
      user_role: 'GM'
    },
    {
      event_type: 'Invitation Accepted',
      timestamp: '2024-02-25T13:00:00Z',
      details: 'Reseller admin accepted SSO invitation and completed setup.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'SSO Configured',
      timestamp: '2024-02-25T13:10:00Z',
      details: 'SSO configuration completed successfully.',
      user: 'Admin User',
      user_role: 'Reseller Admin'
    },
    {
      event_type: 'Activated',
      timestamp: '2024-02-26T09:00:00Z',
      details: 'Reseller activated by GM. Full access granted.',
      user: 'Robert Brown',
      user_role: 'GM'
    }
  ]
};

// Helper function to get GM name by region
const getGMNameByRegion = (region) => {
  const gmMap = {
    'US-West': 'Robert Brown',
    'US-East': 'Emily Clark',
    'North Coast': 'John Smith',
    'South Coast': 'John Smith',
    'East Coast': 'Emily Clark',
    'West Coast': 'Robert Brown',
    'Central': 'Laura Chen',
    'EMEA': 'Oliver Wright',
    'APAC': 'Akira Tanaka'
  };
  return gmMap[region] || null;
};

// Helper function to get RSM name by team_id
export const getRSMNameByTeam = (teamId) => {
  const rsmMap = {
    'TEAM-2024-001': 'Jane Doe',
    'TEAM-2024-002': 'Mike Johnson',
    'TEAM-2024-003': 'Sara Lee',
    'TEAM-2024-004': 'David Kim',
    'TEAM-2024-005': 'Priya Patel',
    'TEAM-2024-006': 'Liam Nguyen',
    'North Coast': 'Jane Doe',
    'South Coast': 'Mike Johnson'
  };
  return rsmMap[teamId] || null;
};

export const getResellers = (userContext) => {
  let filtered = [...resellersData];
  
  // Filter based on user role
  if (userContext.role === 'GM') {
    const region = userContext.region;
    const regionMap = {
      'North America': ['US-West', 'US-East', 'US-Central']
    };
    const allowed = regionMap[region] || [region];
    filtered = filtered.filter(r => allowed.includes(r.gm_region));
  } else if (userContext.role === 'RSM') {
    filtered = filtered.filter(r => r.rsm_team === userContext.team_id);
  }
  
  return filtered;
};

export const createResellerInvitation = (invitationData) => {
  const newReseller = {
    id: `reseller-${Date.now()}`,
    name: invitationData.name,
    company_id: `550e8400-e29b-41d4-a716-${Date.now().toString().slice(-12)}`,
    gm_name: invitationData.region ? getGMNameByRegion(invitationData.region) : null,
    gm_region: invitationData.region || null,
    rsm_name: invitationData.team_id ? getRSMNameByTeam(invitationData.team_id) : null,
    rsm_team: invitationData.team_id || null,
    status: 'Invited',
    admin_email: invitationData.admin_email,
    created_at: new Date().toISOString()
  };
  
  resellersData.push(newReseller);
  
  // Create initial audit log entries
  const userRole = invitationData.invited_by || 'System';
  auditLogsData[newReseller.id] = [
    {
      event_type: 'Invitation Sent',
      timestamp: new Date().toISOString(),
      details: `SSO invitation sent to ${invitationData.admin_email}. JWT token expires in 24 hours.`,
      user: `${userRole} User`,
      user_role: userRole
    }
  ];
  
  return newReseller;
};

export const activateReseller = (resellerId) => {
  const reseller = resellersData.find(r => r.id === resellerId);
  if (reseller && reseller.status === 'Onboarded') {
    reseller.status = 'Activated';
    
    // Add activation log
    if (!auditLogsData[resellerId]) {
      auditLogsData[resellerId] = [];
    }
    auditLogsData[resellerId].push({
      event_type: 'Activated',
      timestamp: new Date().toISOString(),
      details: 'Reseller activated. Full access granted.',
      user: 'System',
      user_role: 'System'
    });
    
    return reseller;
  }
  return null;
};

export const getAuditLogs = (resellerId) => {
  return auditLogsData[resellerId] || [];
};

