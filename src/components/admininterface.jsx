import React, { useState } from 'react';
import { Input } from 'antd';
import Tableau from './tableau.jsx';
import '../index.css';
import Statistique from './statistique.jsx';

const { Search } = Input;

const Admininterface = () => {
  const originalData = [
    { key: 1, id: 101, date: '2025-05-10', type: 'Technique', statut: 'Ouverte' },
    { key: 2, id: 102, date: '2025-05-11', type: 'Commerciale', statut: 'Fermée' },
    { key: 3, id: 103, date: '2025-05-12', type: 'Autre', statut: 'En cours' },
  ];

  const [searchValue, setSearchValue] = useState('');

  const filteredData = originalData.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>


        <div style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',         // <--- border-radius ici
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
   <Statistique/>

        </div>
        <div style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',         // <--- border-radius ici
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <Search
            placeholder="Rechercher une réclamation"
            size="large"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            allowClear
          />
          <div style={{ marginTop: '20px' }}>
            <Tableau data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admininterface;
