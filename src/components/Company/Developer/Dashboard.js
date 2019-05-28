import React, { Component } from 'react'
import { Card, Progress, Row, Col } from 'antd';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <Card title="Success Ratio">
                            <Progress type="dashboard" percent={60} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
