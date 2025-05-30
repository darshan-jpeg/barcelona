import './Admin.css';
import { useState, useEffect } from 'react';

function Admin() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [editType, setEditType] = useState('News');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [newsList, setNewsList] = useState([]);

  // Fetch all news on mount or after save/delete
  useEffect(() => {
    fetch('http://localhost:5000/api/content/News')
      .then(res => res.json())
      .then(data => {
        if (data.success) setNewsList(data.items);
      });
  }, [modalOpen]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this content?')) {
      alert('Content deleted.');
    }
  };

  const handleEdit = () => {
    setModalOpen(true);
  };

  // Convert image file to base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setModalOpen(false);
    // Send content to backend
    try {
      await fetch('http://localhost:5000/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: editType,
          title,
          description,
          image
        })
      });
      alert('Content saved!');
    } catch (err) {
      alert('Error saving content');
    }
  };

  const handleDeleteNews = async (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        await fetch(`http://localhost:5000/api/content/${id}`, { method: 'DELETE' });
        setNewsList(newsList.filter(item => item._id !== id));
      } catch (err) {
        alert('Error deleting news');
      }
    }
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
            <input type="text" placeholder={`Title (${editType})`} value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder={`Description (${editType})`} value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button className="admin-save-btn" onClick={handleSave}>Save</button>
          </div>
        </>
      )}

      <div style={{ width: '100%', maxWidth: 900, margin: '2rem auto' }}>
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Current News</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {newsList.map(item => (
            <div key={item._id} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, display: 'flex', alignItems: 'center', gap: 24 }}>
              {item.image && <img src={item.image} alt={item.title} style={{ width: 100, height: 70, objectFit: 'cover', borderRadius: 8 }} />}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{item.title}</div>
                <div style={{ color: '#ccc', fontSize: 15 }}>{item.description}</div>
              </div>
              <button onClick={() => handleDeleteNews(item._id)} style={{ background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1rem', cursor: 'pointer' }}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;
