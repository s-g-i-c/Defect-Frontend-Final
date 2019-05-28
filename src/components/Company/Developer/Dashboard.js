import React, { Component } from 'react'
import { Card, Progress, Row, Col, Button, Icon } from 'antd';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col style={{textAlign: 'right'}}>
                        <Button type="default">
                        <Icon type="setting" />
                        Configuration
                        </Button>
                    </Col>
                </Row>
                <Row>&nbsp;</Row>
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
