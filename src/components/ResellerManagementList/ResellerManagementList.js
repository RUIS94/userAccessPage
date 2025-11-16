import React, { useState, useEffect } from 'react';
import './ResellerManagementList.css';
import OnboardingModal from '../OnboardingModal/OnboardingModal';
import AuditLogModal from '../AuditLogModal/AuditLogModal';
import { getResellers, activateReseller } from '../../utils/resellerData';
import { AlertTriangle, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ResellerManagementList = ({ userContext }) => {
  const [resellers, setResellers] = useState([]);
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false);
  const [auditLogModal, setAuditLogModal] = useState({ open: false, resellerId: null });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  React.useEffect(() => {
    loadResellers();
  }, [userContext]);

  useEffect(() => {
    setCurrentPage(1);
  }, [resellers.length, pageSize]);

  const loadResellers = () => {
    setLoading(true);
    const data = getResellers(userContext);
    setResellers(data);
    setLoading(false);
  };

  const handleAddReseller = () => {
    setIsOnboardingModalOpen(true);
  };

  const handleOnboardingComplete = () => {
    setIsOnboardingModalOpen(false);
    loadResellers();
  };

  const handleActivate = (resellerId) => {
    if (window.confirm('Are you sure you want to activate this reseller? This action cannot be undone.')) {
      activateReseller(resellerId);
      loadResellers();
    }
  };

  const handleViewAuditLog = (resellerId, resellerName) => {
    setAuditLogModal({ open: true, resellerId, resellerName });
  };

  const getStatusBadgeClass = (status) => {
    const statusMap = {
      'Invited': 'status-invited',
      'Onboarded': 'status-onboarded',
      'Activated': 'status-activated'
    };
    return statusMap[status] || '';
  };

  const canActivate = (status) => {
    return status === 'Onboarded';
  };

  const getAssignedRegion = (reseller) => {
    const map = {
      'TEAM-2024-001': 'North Coast',
      'TEAM-2024-002': 'South Coast',
      'TEAM-2024-003': 'East Coast',
      'TEAM-2024-004': 'West Coast',
      'TEAM-2024-005': 'Central',
      'TEAM-2024-006': 'EMEA'
    };
    if (!reseller.rsm_team) return 'Unassigned';
    return map[reseller.rsm_team] || reseller.rsm_team;
  };

  const totalPages = Math.max(1, Math.ceil(resellers.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedResellers = resellers.slice(startIndex, startIndex + pageSize);
  const goToPage = (page) => {
    const target = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(target);
  };
  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
  };
  const totalItems = resellers.length;

  const getVisiblePages = () => {
    const pages = [];
    const add = (p) => pages.push(p);
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) add(i);
      return pages;
    }
    add(1);
    if (currentPage > 4) add('…');
    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);
    for (let i = start; i <= end; i++) add(i);
    if (currentPage < totalPages - 3) add('…');
    add(totalPages);
    return pages;
  };

  return (
    <div className="reseller-management">
      <div className="reseller-header">
        <div className="reseller-header-left">
          <h2>Resellers Under Oversight</h2>
          <div className="oversight-alert">
            <AlertTriangle className="oversight-alert-icon" />
            <div className="oversight-tooltip">
              <strong>Data Isolation Warning:</strong> You only have oversight permissions. Reseller data (such as Deals, Contacts) remains strictly isolated within their respective company_id.
            </div>
          </div>
        </div>
        <button className="add-reseller-btn" onClick={handleAddReseller}>
          <Plus className="btn-icon" />
          Add Reseller
        </button>
      </div>

      {loading ? (
        <div className="loading-state">Loading resellers...</div>
      ) : resellers.length === 0 ? (
        <div className="empty-state">
          <p>No resellers found under your oversight.</p>
          <p>Click "+ Add Reseller" to start onboarding a new reseller.</p>
        </div>
      ) : (
        <div className="reseller-table-container">
          <div className="reseller-scroll">
            <table className="reseller-table">
              <thead>
                <tr>
                  <th>Reseller Name</th>
                  <th>Company ID</th>
                  {userContext.role === 'GM' ? (
                  <>
                    <th>GM</th>
                    <th>Region</th>
                    <th>RSM</th>
                  </>
                ) : (
                  <>
                    <th>GM Region</th>
                    <th>GM Name</th>
                    <th>RSM Team</th>
                  </>
                )}
                <th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {paginatedResellers.map((reseller) => (
                <tr key={reseller.id}>
                  <td>{reseller.name}</td>
                  <td className="uuid-cell">{reseller.company_id}</td>
                  {userContext.role === 'GM' ? (
                    <>
                      <td>{reseller.gm_name || 'N/A'}</td>
                      <td>{getAssignedRegion(reseller)}</td>
                      <td>{reseller.rsm_name || 'N/A'}</td>
                    </>
                  ) : (
                    <>
                      <td>{reseller.gm_region || 'N/A'}</td>
                      <td>{reseller.gm_name || 'N/A'}</td>
                      <td>{reseller.rsm_team || 'Unassigned'}</td>
                    </>
                  )}
                  <td>
                    <span className={`status-badge ${getStatusBadgeClass(reseller.status)}`}>
                      {reseller.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="audit-btn"
                        onClick={() => handleViewAuditLog(reseller.id, reseller.name)}
                      >
                        Audit Log
                      </button>
                      {canActivate(reseller.status) && (
                        <button
                          className="activate-btn"
                          onClick={() => handleActivate(reseller.id)}
                        >
                          Activate
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <div className="pagination-left">
              <button
                className="page-btn prev"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                aria-label="Previous"
              >
                <ChevronLeft className="page-icon" />
              </button>
              {getVisiblePages().map((p, idx) => (
                p === '…' ? (
                  <button key={`ellipsis-${idx}`} className="page-btn ellipsis" disabled>…</button>
                ) : (
                  <button
                    key={`page-${p}`}
                    className={`page-btn ${currentPage === p ? 'active' : ''}`}
                    onClick={() => goToPage(p)}
                  >
                    {p}
                  </button>
                )
              ))}
              <button
                className="page-btn next"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                aria-label="Next"
              >
                <ChevronRight className="page-icon" />
              </button>
              <div className="page-size">
                <select id="page-size" className="page-size-select" value={pageSize} onChange={handlePageSizeChange}>
                  <option value={10}>10/page</option>
                  <option value={20}>20/page</option>
                  <option value={50}>50/page</option>
                </select>
              </div>
            </div>
            <div className="pagination-right">
              <span className="pager-total">Total {totalItems}</span>
            </div>
          </div>
        </div>
      )}

      {isOnboardingModalOpen && (
        <OnboardingModal
          userContext={userContext}
          onClose={() => setIsOnboardingModalOpen(false)}
          onComplete={handleOnboardingComplete}
        />
      )}

      {auditLogModal.open && (
        <AuditLogModal
          resellerId={auditLogModal.resellerId}
          resellerName={auditLogModal.resellerName}
          onClose={() => setAuditLogModal({ open: false, resellerId: null, resellerName: null })}
        />
      )}
    </div>
  );
};

export default ResellerManagementList;

