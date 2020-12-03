import React from 'react';
import { Card, message } from 'antd';
import { useToggle, useUnmount } from '../hooks'

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useToggle(true);

  return (
    <Card title='useUnmount'>
      <p>
        <button type="button" onClick={() => toggle()}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
      </p>
    </Card>
  );
};