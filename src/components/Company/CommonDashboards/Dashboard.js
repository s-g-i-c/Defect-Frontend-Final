import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

class TotalDefectCard extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                            Total Defects
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

class FixedDefectCard extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                            Total Defects
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export { TotalDefectCard, FixedDefectCard }