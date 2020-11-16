import React, {useState} from 'react';
import { Card } from 'antd';

import { usePrevious } from '../hooks'

export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <Card title='useToggle'>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: '10px' }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        {' '}
        increase{' '}
      </button>
      <button type="button" style={{ marginLeft: '10px' }} onClick={() => setCount((c) => c - 1)}>
        {' '}
        decrease{' '}
      </button>
    </Card>
  );
};