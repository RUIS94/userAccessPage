import React, { useState, useEffect } from 'react';
import './AuditLogModal.css';
import { getAuditLogs } from '../../utils/resellerData';
import { FileText, CheckCircle2, Upload, UserPlus, Shield } from 'lucide-react';

const AuditLogModal = ({ resellerId, resellerName, onClose }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAuditLogs();
  }, [resellerId]);

  const loadAuditLogs = () => {
    setLoading(true);
    const auditLogs = getAuditLogs(resellerId);
    setLogs(auditLogs);
    setLoading(false);
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEventIcon = (eventType) => {
    const iconMap = {
      'Contract Uploaded': Upload,
      'Invitation Sent': UserPlus,
      'Invitation Accepted': CheckCircle2,
      'SSO Configured': Shield,
      'Activated': CheckCircle2
    };
    return iconMap[eventType] || FileText;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content audit-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h2>Audit Trail: {resellerName}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="audit-content">
          {loading ? (
            <div className="loading-state">Loading audit logs...</div>
          ) : logs.length === 0 ? (
            <div className="empty-state">No audit logs found for this reseller.</div>
          ) : (
            <div>
              {logs.map((log, index) => {
                const Icon = getEventIcon(log.event_type);
                return (
                  <div key={index} className="audit-row">
                    <div className="audit-icon-wrap">
                      <Icon className="audit-icon" />
                    </div>
                    <div className="audit-item-content">
                      <div className="audit-item-top">
                        <p className="audit-action">{log.event_type}</p>
                        <span className="audit-timestamp">{formatTimestamp(log.timestamp)} UTC</span>
                      </div>
                      {log.user && (
                        <p className="audit-actor">by {log.user} ({log.user_role})</p>
                      )}
                      {log.details && <p className="audit-details">{log.details}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditLogModal;

