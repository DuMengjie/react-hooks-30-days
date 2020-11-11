import React from 'react';
import { Card, Row, Col } from 'antd';

import { useBoolean } from '../hooks'

export default () => {
    const [state, { toggle, setTrue, setFalse }] = useBoolean();

    return (
      <Card title='useBoolean'>
        <p>Effects：{`${state}`}</p>
        <p>
          <button type="button" onClick={() => toggle()}>
            Toggle
          </button>
          <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
            Set False
          </button>
          <button type="button" onClick={setTrue}>
            Set True
          </button>
        </p>
      </Card>
    );
  };