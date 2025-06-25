import React, { useState, useRef, useEffect } from 'react';

const EXAMPLES = [
  {
    id: 1,
    title: 'Casa Campestre El Retiro',
    location: 'El Retiro, Antioquia',
    price: '$3.200.000.000 COP',
    tag: 'Exclusiva',
    type: 'venta',
    descripcion: 'Casa campestre de lujo con amplias zonas verdes y acabados premium.',
    ficha: 'Área: 450m² | Habitaciones: 4 | Baños: 5 | Parqueaderos: 3',
    images: [
      { url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=800&q=80', name: 'casa1.jpg' }
    ]
  },
  {
    id: 2,
    title: 'Penthouse Poblado',
    location: 'El Poblado, Medellín',
    price: '$2.800.000.000 COP',
    tag: 'Nueva',
    type: 'arriendo',
    descripcion: 'Penthouse moderno con vista panorámica y terraza privada.',
    ficha: 'Área: 320m² | Habitaciones: 3 | Baños: 4 | Parqueaderos: 2',
    images: [
      { url: 'https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&w=800&q=80', name: 'penthouse.jpg' }
    ]
  },
  {
    id: 3,
    title: 'Apartamento Provenza',
    location: 'Provenza, Medellín',
    price: '$1.950.000.000 COP',
    tag: 'Premium',
    type: 'venta',
    descripcion: 'Apartamento exclusivo en Provenza, cerca de restaurantes y vida nocturna.',
    ficha: 'Área: 180m² | Habitaciones: 2 | Baños: 3 | Parqueaderos: 2',
    images: [
      { url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&q=80', name: 'apto.jpg' }
    ]
  }
];

function setLocalProperties(props) {
  localStorage.setItem('g2_properties', JSON.stringify(props));
}

export default function AdminProperties() {
  // --- PROPIEDADES ---
  const [properties, setProperties] = useState(() => {
    const data = localStorage.getItem('g2_properties');
    if (data) return JSON.parse(data);
    return [];
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({ title: '', location: '', price: '', tag: '', images: [], type: 'venta', descripcion: '', ficha: '' });
  const [view, setView] = useState('grid');
  // --- BLOG ---
  // Solo ejemplo visual, sin lógica ni handlers
  const blogExamples = [
    {
      id: 1,
      title: 'Tendencias en arquitectura de lujo 2025',
      content: 'Descubre los estilos y materiales que marcarán la pauta en el diseño de viviendas premium este año.',
      image: { url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800&q=80', name: 'blog1.jpg' }
    },
    {
      id: 2,
      title: 'Cómo elegir la propiedad ideal en Medellín',
      content: 'Consejos de expertos para invertir en bienes raíces de alto nivel en la ciudad.',
      image: { url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=800&q=80', name: 'blog2.jpg' }
    },
    {
      id: 3,
      title: 'El valor de la exclusividad: amenities que marcan la diferencia',
      content: 'Piscinas infinitas, domótica, seguridad y más: lo que buscan los compradores premium.',
      image: { url: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&w=800&q=80', name: 'blog3.jpg' }
    }
  ];
  const [tab, setTab] = useState('propiedades');
  const fileInputRef = useRef();
  const [dragActive, setDragActive] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);

  // --- ESTADOS PARA EL MODAL DE EDICIÓN PREMIUM ---
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState(null);
  const [modalIdx, setModalIdx] = useState(null);
  const [draggedImgIdx, setDraggedImgIdx] = useState(null);

  // --- CORRECCIÓN: Definir allProperties para evitar ReferenceError ---
  const allProperties = [...EXAMPLES, ...properties];

  useEffect(() => { setLocalProperties(properties); }, [properties]);

  const handleInput = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleImages = async files => {
    setLoadingImages(true);
    // Simula carga
    await new Promise(res => setTimeout(res, 900));
    const images = await Promise.all(Array.from(files).map(async file => {
      return await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve({ name: file.name, url: e.target.result });
        reader.readAsDataURL(file);
      });
    }));
    setForm(f => ({ ...f, images: [...f.images, ...images] }));
    setLoadingImages(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImages(e.dataTransfer.files);
    }
  };

  const handleAdd = e => {
    e.preventDefault();
    if (!form.title || !form.location || !form.price) return;
    setProperties(props => {
      const updated = [...props, { ...form, id: Date.now() }];
      setLocalProperties(updated);
      return updated;
    });
    setForm({ title: '', location: '', price: '', tag: '', images: [], type: 'venta', descripcion: '', ficha: '' });
  };

  const handleEdit = idx => {
    setEditingIndex(idx);
    setForm({ ...properties[idx] });
  };

  const handleUpdate = e => {
    e.preventDefault();
    setProperties(props => {
      const updated = props.map((p, i) => i === editingIndex ? { ...p, ...form } : p);
      setLocalProperties(updated);
      return updated;
    });
    setEditingIndex(null);
    setForm({ title: '', location: '', price: '', tag: '', images: [], type: 'venta', descripcion: '', ficha: '' });
  };

  const handleDelete = idx => {
    setProperties(props => {
      const updated = props.filter((_, i) => i !== idx);
      setLocalProperties(updated);
      return updated;
    });
  };

  const openEditModal = idx => {
    setModalIdx(idx);
    setModalForm({ ...properties[idx] });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalForm(null);
    setModalIdx(null);
    setDraggedImgIdx(null);
  };

  const handleModalInput = e => {
    const { name, value } = e.target;
    setModalForm(f => ({ ...f, [name]: value }));
  };

  const handleModalImages = async files => {
    setLoadingImages(true);
    // Simula carga
    await new Promise(res => setTimeout(res, 900));
    const images = await Promise.all(Array.from(files).map(async file => {
      return await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve({ name: file.name, url: e.target.result });
        reader.readAsDataURL(file);
      });
    }));
    setModalForm(f => ({ ...f, images: [...(f.images || []), ...images] }));
    setLoadingImages(false);
  };

  const handleModalImageDelete = idx => {
    setModalForm(f => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));
  };

  const handleModalImageDragStart = idx => setDraggedImgIdx(idx);
  const handleModalImageDrop = idx => {
    if (draggedImgIdx === null || draggedImgIdx === idx) return;
    setModalForm(f => {
      const imgs = [...f.images];
      const [dragged] = imgs.splice(draggedImgIdx, 1);
      imgs.splice(idx, 0, dragged);
      return { ...f, images: imgs };
    });
    setDraggedImgIdx(null);
  };

  const handleModalUpdate = e => {
    e.preventDefault();
    setProperties(props => {
      const updated = props.map((p, i) => i === modalIdx ? { ...p, ...modalForm } : p);
      setLocalProperties(updated);
      return updated;
    });
    closeModal();
  };

  // --- UI ---
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#f7f3ee', padding: '2rem 0' }}>
      <div style={{ width: '100%', padding: '0 3vw', boxSizing: 'border-box' }}>
        {/* TABS PREMIUM */}
        <div style={{ display: 'flex', gap: 18, marginBottom: 32 }}>
          <button onClick={() => setTab('propiedades')} style={{ ...viewBtn, background: tab === 'propiedades' ? '#B08B5E' : '#e7dacb', color: tab === 'propiedades' ? '#fff' : '#7C5A3A', fontSize: 17 }}>Propiedades</button>
          <button onClick={() => setTab('blog')} style={{ ...viewBtn, background: tab === 'blog' ? '#B08B5E' : '#e7dacb', color: tab === 'blog' ? '#fff' : '#7C5A3A', fontSize: 17 }}>Blog</button>
        </div>
        {/* --- TAB PROPIEDADES --- */}
        {tab === 'propiedades' && (
          <>
            <h2 className="admin-prop-title" style={{ color: '#B08B5E', fontWeight: 700, fontSize: 24, marginBottom: 18, marginLeft: 8, paddingLeft: 4 }}>Gestión de Propiedades</h2>
            <form onSubmit={editingIndex !== null ? handleUpdate : handleAdd} className="admin-prop-form" style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px 0 #e7dacb88',
              padding: '1.5rem 1.2rem',
              marginBottom: 32,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 18,
              alignItems: 'center',
              position: 'relative',
            }}>
              <input name="title" value={form.title} onChange={handleInput} placeholder="Título" style={inputStyle} required />
              <input name="location" value={form.location} onChange={handleInput} placeholder="Ubicación" style={inputStyle} required />
              <input name="price" value={form.price} onChange={handleInput} placeholder="Precio" style={inputStyle} required />
              <input name="tag" value={form.tag} onChange={handleInput} placeholder="Etiqueta (opcional)" style={inputStyle} />
              <textarea name="descripcion" value={form.descripcion} onChange={handleInput} placeholder="Descripción" style={{ ...inputStyle, minHeight: 38, resize: 'vertical' }} />
              <input name="ficha" value={form.ficha} onChange={handleInput} placeholder="Ficha técnica (ej: Área, habitaciones, baños...)" style={inputStyle} />
              <select name="type" value={form.type} onChange={handleInput} style={{ ...inputStyle, minWidth: 120 }}>
                <option value="venta">Venta</option>
                <option value="arriendo">Arriendo</option>
              </select>
              <div
                onDragOver={e => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={e => { e.preventDefault(); setDragActive(false); }}
                onDrop={handleDrop}
                style={{
                  border: dragActive ? '2px dashed #B08B5E' : '2px solid #e7dacb',
                  borderRadius: 10,
                  background: dragActive ? '#f7f3ee' : '#faf9f6',
                  padding: '0.7rem 1rem',
                  minWidth: 180,
                  minHeight: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  flex: 1,
                  transition: 'border 0.2s, background 0.2s',
                }}
                onClick={() => fileInputRef.current.click()}
              >
                {loadingImages ? (
                  <span style={{ color: '#B08B5E', fontWeight: 600, fontSize: 15 }}>Cargando imágenes...</span>
                ) : form.images && form.images.length > 0 ? (
                  <div style={{ display: 'flex', gap: 6 }}>
                    {form.images.map((img, i) => (
                      <img key={i} src={img.url} alt="img" style={{ width: 38, height: 38, objectFit: 'cover', borderRadius: 6, border: '1.5px solid #B08B5E' }} />
                    ))}
                  </div>
                ) : (
                  <span style={{ color: '#B08B5E', fontSize: 15 }}>Arrastra o haz click para subir fotos</span>
                )}
                <input
                  ref={fileInputRef}
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  style={{ display: 'none' }}
                  onChange={e => handleImages(e.target.files)}
                />
              </div>
              <button type="submit" style={buttonStyle}>{editingIndex !== null ? 'Actualizar' : 'Agregar'}</button>
              {editingIndex !== null && (
                <button type="button" onClick={() => { setEditingIndex(null); setForm({ title: '', location: '', price: '', tag: '', images: [], type: 'venta', descripcion: '', ficha: '' }); }} style={{ ...buttonStyle, background: '#e7dacb', color: '#7C5A3A' }}>Cancelar</button>
              )}
            </form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 18 }}>
              <button onClick={() => setView('grid')} style={{ ...viewBtn, background: view === 'grid' ? '#B08B5E' : '#e7dacb', color: view === 'grid' ? '#fff' : '#7C5A3A' }}>Vista Cuadrilla</button>
              <button onClick={() => setView('table')} style={{ ...viewBtn, background: view === 'table' ? '#B08B5E' : '#e7dacb', color: view === 'table' ? '#fff' : '#7C5A3A', marginLeft: 8 }}>Vista Tabla</button>
            </div>
            {view === 'grid' ? (
              <div className="admin-prop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
                {allProperties.length === 0 && <div style={{ color: '#aaa', fontStyle: 'italic', marginBottom: 18 }}>No hay propiedades registradas.</div>}
                {allProperties.map((prop, idx) => (
                  <div key={prop.id} style={{ background: '#fff', borderRadius: 14, boxShadow: '0 1px 8px 0 #e7dacb55', padding: '1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, position: 'relative' }}>
                    <div style={{ width: '100%', height: 160, background: '#f7f3ee', borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                      {prop.images && prop.images.length > 0 ? (
                        <img src={prop.images[0].url} alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span style={{ color: '#B08B5E', fontSize: 32 }}>🏠</span>
                      )}
                    </div>
                    <div style={{ fontWeight: 700, color: '#7C5A3A', fontSize: 18 }}>{prop.title}</div>
                    <div style={{ color: '#A68365', fontSize: 15 }}>{prop.location}</div>
                    <div style={{ color: '#B08B5E', fontWeight: 600, fontSize: 16 }}>{prop.price}</div>
                    {prop.tag && <div style={{ color: '#e7dacb', fontSize: 13 }}>{prop.tag}</div>}
                    <div style={{ color: prop.type === 'venta' ? '#B08B5E' : '#A68365', fontWeight: 600, fontSize: 14, marginTop: 4 }}>{prop.type === 'venta' ? 'Venta' : 'Arriendo'}</div>
                    <div style={{ fontSize: 15, color: '#7C5A3A', margin: '6px 0 0 0', textAlign: 'center' }}>{prop.descripcion}</div>
                    <div style={{ fontSize: 13, color: '#A68365', margin: '2px 0 0 0', textAlign: 'center' }}>{prop.ficha}</div>
                    {idx >= EXAMPLES.length && (
                      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                        <button onClick={() => openEditModal(idx - EXAMPLES.length)} style={{ ...buttonStyle, background: '#e7dacb', color: '#7C5A3A' }}>Editar</button>
                        <button onClick={() => handleDelete(idx - EXAMPLES.length)} style={{ ...buttonStyle, background: '#c00', color: '#fff' }}>Eliminar</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 1px 8px 0 #e7dacb55', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f7f3ee', color: '#7C5A3A', fontWeight: 700 }}>
                      <th style={thStyle}>Imagen</th>
                      <th style={thStyle}>Título</th>
                      <th style={thStyle}>Ubicación</th>
                      <th style={thStyle}>Precio</th>
                      <th style={thStyle}>Etiqueta</th>
                      <th style={thStyle}>Tipo</th>
                      <th style={thStyle}>Descripción</th>
                      <th style={thStyle}>Ficha técnica</th>
                      <th style={thStyle}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProperties.length === 0 && (
                      <tr><td colSpan={9} style={{ color: '#aaa', fontStyle: 'italic', textAlign: 'center', padding: 18 }}>No hay propiedades registradas.</td></tr>
                    )}
                    {allProperties.map((prop, idx) => (
                      <tr key={prop.id}>
                        <td style={tdStyle}>{prop.images && prop.images.length > 0 ? <img src={prop.images[0].url} alt="img" style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 6 }} /> : <span style={{ color: '#B08B5E', fontSize: 22 }}>🏠</span>}</td>
                        <td style={tdStyle}>{prop.title}</td>
                        <td style={tdStyle}>{prop.location}</td>
                        <td style={tdStyle}>{prop.price}</td>
                        <td style={tdStyle}>{prop.tag}</td>
                        <td style={tdStyle}>{prop.type === 'venta' ? 'Venta' : 'Arriendo'}</td>
                        <td style={tdStyle}>{prop.descripcion}</td>
                        <td style={tdStyle}>{prop.ficha}</td>
                        <td style={tdStyle}>
                          {idx >= EXAMPLES.length && (
                            <>
                              <button onClick={() => openEditModal(idx - EXAMPLES.length)} style={{ ...buttonStyle, background: '#e7dacb', color: '#7C5A3A', marginRight: 6 }}>Editar</button>
                              <button onClick={() => handleDelete(idx - EXAMPLES.length)} style={{ ...buttonStyle, background: '#c00', color: '#fff' }}>Eliminar</button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {/* MODAL PREMIUM DE EDICIÓN */}
            {modalOpen && (
              <div style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(60,40,20,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div className="admin-prop-modal" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px 0 #b08b5e44', padding: '2.2rem 2rem', minWidth: 700, maxWidth: 900, width: '100%', position: 'relative', display: 'flex', gap: 32 }}>
                  <button onClick={closeModal} style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 22, color: '#B08B5E', cursor: 'pointer', fontWeight: 700 }}>×</button>
                  {/* Lista de fotos al costado */}
                  <div className="modal-photos" style={{ minWidth: 180, maxWidth: 220, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', borderRight: '1.5px solid #e7dacb', paddingRight: 24 }}>
                    <div style={{ color: '#B08B5E', fontWeight: 600, fontSize: 15, marginBottom: 2 }}>Fotos</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
                      {modalForm.images && modalForm.images.length > 0 ? modalForm.images.map((img, i) => (
                        <div
                          key={i}
                          draggable
                          onDragStart={() => handleModalImageDragStart(i)}
                          onDragOver={e => { e.preventDefault(); }}
                          onDrop={() => handleModalImageDrop(i)}
                          style={{ position: 'relative', border: '2px solid #e7dacb', borderRadius: 10, overflow: 'hidden', width: '100%', height: 110, background: '#faf9f6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'grab', boxShadow: '0 1px 6px #b08b5e22' }}
                        >
                          <img src={img.url} alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
                          <button type="button" onClick={() => handleModalImageDelete(i)} style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 4px #b08b5e33', padding: 0 }} title="Eliminar imagen">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="10" r="9" stroke="#B08B5E" strokeWidth="2" fill="#fff" />
                              <path d="M7 7L13 13M13 7L7 13" stroke="#B08B5E" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      )) : <span style={{ color: '#B08B5E', fontSize: 15 }}>No hay fotos</span>}
                      {/* Botón para agregar fotos */}
                      <label style={{ width: '100%', height: 110, border: '2px dashed #B08B5E', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#faf9f6' }}>
                        <input type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => handleModalImages(e.target.files)} />
                        <span style={{ color: '#B08B5E', fontSize: 32, fontWeight: 700 }}>+</span>
                      </label>
                    </div>
                  </div>
                  {/* Formulario de edición a la derecha */}
                  <div style={{ flex: 1, paddingLeft: 24 }}>
                    <h3 style={{ color: '#B08B5E', fontWeight: 700, fontSize: 22, marginBottom: 18 }}>Editar Propiedad</h3>
                    <form onSubmit={handleModalUpdate} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <input name="title" value={modalForm.title} onChange={handleModalInput} placeholder="Título" style={inputStyle} required />
                      <input name="location" value={modalForm.location} onChange={handleModalInput} placeholder="Ubicación" style={inputStyle} required />
                      <input name="price" value={modalForm.price} onChange={handleModalInput} placeholder="Precio" style={inputStyle} required />
                      <input name="tag" value={modalForm.tag} onChange={handleModalInput} placeholder="Etiqueta (opcional)" style={inputStyle} />
                      <textarea name="descripcion" value={modalForm.descripcion} onChange={handleModalInput} placeholder="Descripción" style={{ ...inputStyle, minHeight: 38, resize: 'vertical' }} />
                      <input name="ficha" value={modalForm.ficha} onChange={handleModalInput} placeholder="Ficha técnica (ej: Área, habitaciones, baños...)" style={inputStyle} />
                      <select name="type" value={modalForm.type} onChange={handleModalInput} style={{ ...inputStyle, minWidth: 120 }}>
                        <option value="venta">Venta</option>
                        <option value="arriendo">Arriendo</option>
                      </select>
                      <button type="submit" style={{ ...buttonStyle, marginTop: 10 }}>Guardar Cambios</button>
                      <button type="button" onClick={closeModal} style={{ ...buttonStyle, background: '#e7dacb', color: '#7C5A3A' }}>Cancelar</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {/* --- TAB BLOG --- */}
        {tab === 'blog' && (
          <div>
            <h2 className="admin-prop-title" style={{ color: '#B08B5E', fontWeight: 700, fontSize: 24, marginBottom: 18, marginLeft: 8, paddingLeft: 4 }}>Gestión de Blog (Ejemplo Visual)</h2>
            {/* Editor visual de blog premium */}
            <form style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px 0 #e7dacb88',
              padding: '1.5rem 1.2rem',
              marginBottom: 32,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 18,
              alignItems: 'center',
              position: 'relative',
              maxWidth: 700
            }} onSubmit={e => e.preventDefault()}>
              <input name="blogTitle" placeholder="Título del blog" style={inputStyle} />
              <input name="blogImage" type="file" accept="image/*" style={{ ...inputStyle, padding: '0.5rem 1rem', minWidth: 180 }} />
              <textarea name="blogContent" placeholder="Contenido del blog" style={{ ...inputStyle, minHeight: 60, resize: 'vertical', flex: '1 1 100%' }} />
              <button type="submit" style={buttonStyle}>Publicar (solo visual)</button>
              <button type="button" style={{ ...buttonStyle, background: '#e7dacb', color: '#7C5A3A' }}>Limpiar</button>
            </form>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {blogExamples.map(blog => (
                <div key={blog.id} style={{ background: '#fff', borderRadius: 14, boxShadow: '0 1px 8px 0 #e7dacb55', padding: '1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, position: 'relative' }}>
                  <div style={{ width: '100%', height: 160, background: '#f7f3ee', borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <img src={blog.image.url} alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontWeight: 700, color: '#7C5A3A', fontSize: 18 }}>{blog.title}</div>
                  <div style={{ color: '#A68365', fontSize: 15, textAlign: 'center', minHeight: 40, maxHeight: 60, overflow: 'hidden' }}>{blog.content}</div>
                  {/* Botones visuales de editar/eliminar solo frontend */}
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <button type="button" style={{ ...buttonStyle, background: '#e7dacb', color: '#7C5A3A', fontSize: 15, padding: '0.5rem 1.2rem' }}>Editar</button>
                    <button type="button" style={{ ...buttonStyle, background: '#c00', color: '#fff', fontSize: 15, padding: '0.5rem 1.2rem' }}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .admin-prop-title {
            margin-left: 12px !important;
            padding-left: 6px !important;
            font-size: 20px !important;
          }
          .admin-prop-form, .admin-prop-grid, .admin-prop-modal {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

const tabBtnStyle = {
  border: 'none',
  borderRadius: 8,
  padding: '0.7rem 2.2rem',
  fontWeight: 700,
  fontSize: 17,
  cursor: 'pointer',
  marginLeft: 0,
  transition: 'background 0.18s, color 0.18s',
};

const inputStyle = {
  padding: '0.7rem 1rem',
  borderRadius: 8,
  border: '1.5px solid #B08B5E',
  fontSize: 16,
  outline: 'none',
  background: '#f7f3ee',
  color: '#7C5A3A',
  minWidth: 140,
  flex: 1,
};

const buttonStyle = {
  background: 'linear-gradient(90deg, #B08B5E 0%, #A68365 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  padding: '0.7rem 1.5rem',
  fontWeight: 700,
  fontSize: 16,
  cursor: 'pointer',
  boxShadow: '0 2px 8px 0 rgba(176,139,94,0.10)',
};

const viewBtn = {
  border: 'none',
  borderRadius: 8,
  padding: '0.5rem 1.2rem',
  fontWeight: 700,
  fontSize: 15,
  cursor: 'pointer',
  marginLeft: 0,
  transition: 'background 0.18s, color 0.18s',
};

const thStyle = {
  padding: '0.7rem 0.5rem',
  borderBottom: '1.5px solid #e7dacb',
  fontSize: 15,
};
const tdStyle = {
  padding: '0.7rem 0.5rem',
  textAlign: 'center',
  fontSize: 15,
};
