import './Admin.css';
import { useState } from 'react';

function Admin() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [editType, setEditType] = useState('News');

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this content?')) {
      alert('Content deleted.');
    }
  };

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleSave = () => {
    setModalOpen(false);
    alert('Content saved!');
  };

  return (
    <section id="admin" className="Admin">
      <h1 className="admin-title">Admin Section</h1>
      <p className="admin-subtext">Manage site content here.</p>

      <div className="admin-grid">
        <div className="admin-card transparent-card">
          <div className="admin-card-title">Content Management</div>
          <div className="admin-card-description">
            <ul className="admin-content-actions">
              <li onClick={handleEdit}>✏️ Edit Content</li>
              <li onClick={() => setIsActive(!isActive)}>
                🔄 Set Content{' '}
                <span className={`status-toggle ${isActive ? 'active' : 'inactive'}`}>
                  {isActive ? 'Active' : 'Inactive'}
                </span>
              </li>
              <li onClick={handleDelete}>
                🗑️ Delete Content
              </li>
            </ul>
          </div>
        </div>
      </div>

      {modalOpen && (
        <>
          <div className="admin-overlay" onClick={() => setModalOpen(false)} />
          <div className="admin-modal">
            <h3>Edit Content</h3>
            <label htmlFor="edit-type">Select Section:</label>
            <select id="edit-type" value={editType} onChange={e => setEditType(e.target.value)} className="admin-select">
              <option value="Players">Players</option>
              <option value="Merch">Merch</option>
              <option value="News">News</option>
            </select>
            <input type="text" placeholder={`Title (${editType})`} />
            <textarea placeholder={`Description (${editType})`}></textarea>
            <input type="file" accept="image/*" />
            <button className="admin-save-btn" onClick={handleSave}>Save</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Admin;
