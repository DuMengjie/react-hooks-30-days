import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';

import { UseToggleDemo } from './demos'
import { log } from 'util';

function App() {
  return (
    <div className="App">
      <h2>React hooks 30 days</h2>
      <Row gutter={16}>
        <Col span={12}>
          <UseToggleDemo />
        </Col>
      </Row>
    </div>
  );
}

export default App;
