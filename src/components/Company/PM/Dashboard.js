import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Row, Col, Card, Button, Icon } from 'antd'

const data = {
	labels: [
		'New',
		'Open',
		'Closed'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

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
                    <Col span={12}>
                        <Card title="Project Health Ratio">
                        <Doughnut data={data} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
