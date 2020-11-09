import React from 'react';
import { Card, Row, Col } from 'antd';

import { useToggle } from '../hooks'

export default () => {
    const [state, { toggle }] = useToggle();
  
    return (
      <Card title='useToggle'>
        <p>Effects：{`${state}`}</p>
        <p>
          <button type="button" onClick={() => toggle()}>
            Toggle
          </button>
          <button type="button" onClick={() => toggle(false)} style={{ margin: '0 16px' }}>
            Toggle False
          </button>
          <button type="button" onClick={() => toggle(true)}>
            Toggle True
          </button>
        </p>
      </Card>
    );
  };