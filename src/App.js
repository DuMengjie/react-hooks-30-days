import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';

import { UseToggleDemo, UseBooleanDemo, UseSetStateDemo } from './demos'

function App() {
  return (
    <div className="App">
      <h2>React hooks 30 days</h2>
      <Row gutter={16}>
        <Col span={12}>
          <UseToggleDemo />
        </Col>
        <Col span={12}>
          <UseBooleanDemo />
        </Col>
        <Col span={12}>
          <UseSetStateDemo />
        </Col>
      </Row>
    </div>
  );
}

export default App;
