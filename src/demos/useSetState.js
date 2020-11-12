import React from 'react';
import { Card } from 'antd';

import { useSetState } from '../hooks'

export default () => {
    const [state, setState] = useSetState({
      hello: '',
      count: 0
    });

    return (
      <Card title='useBoolean'>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <p>
          <button type="button" onClick={() => setState({hello: 'world'})}>
            set hello
          </button>
          <button type="button" onClick={() => setState({foo: 'bar'})} style={{ margin: '0 16px' }}>
            set foo
          </button>
          <button type="button" onClick={() => setState(prev => ({count: prev.count + 1}))}>
            count + 1
          </button>
        </p>
      </Card>
    );
  };