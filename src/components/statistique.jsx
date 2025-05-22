import React from 'react';
import { CloseCircleOutlined ,EditOutlined, CheckCircleOutlined,ClockCircleOutlined  } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const Statistique = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Card variant="borderless">
        <Statistic
          title="Total "
          value={2000}
          precision={0}
          prefix={<EditOutlined />}
          suffix=""
        />
      </Card>
    </Col>
    <Col span={6}>
      <Card variant="borderless">
        <Statistic
          title=" Non Traitées"
          value={200}
          precision={0}
          valueStyle={{ color: '#cf1322' }}
          prefix={<CloseCircleOutlined />}
          suffix=""
        />
      </Card>
    </Col>
    <Col span={6}>
      <Card variant="borderless">
        <Statistic
          title="Traitées"
          value={900}
          precision={0}
          valueStyle={{ color: '#3f8600' }}
          prefix={<CheckCircleOutlined />}
          suffix=""
        />
      </Card>
    </Col>
    <Col span={6}>
      <Card variant="borderless">
        <Statistic
          title="En cours de traitement"
          value={100}
          precision={0}
          valueStyle={{ color: '#ff8c00' }}
          prefix={<ClockCircleOutlined />}
          suffix=""
        />
      </Card>
    </Col>
  </Row>
);

export default Statistique;
