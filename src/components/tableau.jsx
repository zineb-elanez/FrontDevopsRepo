import React from 'react';
import { Table, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../index.css';

// Définition des colonnes
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Date de réclamation',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Type de réclamation',
    dataIndex: 'type',
    key: 'type',
  
  },
  {
    title: 'Statut de réclamation',
    dataIndex: 'statut',
    key: 'statut',
   
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Supprimer</a>
        <a>
          <Space>
            Plus d'actions <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const Tableau = ({ data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ['bottomCenter'],
        pageSize: 5,
        showSizeChanger: false,
        simple: true,
      }}
      scroll={{ y: 240 }}
      bordered
      rowKey="id"
    />
  );
};

export default Tableau;
