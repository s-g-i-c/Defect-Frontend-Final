import React, { Component } from 'react'
import { Row, Col, Card, Icon, Progress } from 'antd';
import  '../../App.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={10}>
                        <Row gutter={6}>
                            <Card bordered="true" title="Product overall rating">
                                <Col span={8}>
                                    <Row>
                                    <span style={{ fontSize: '4rem', fontStyle: 'bold' }}>4.0</span>
                                    </Row>
                                    <Row gutter={6}>
                                        <Col span={3}><Icon type="star" theme="filled" /></Col>
                                        <Col span={3}><Icon type="star" theme="filled" /></Col>
                                        <Col span={3}><Icon type="star" theme="filled" /></Col>
                                        <Col span={3}><Icon type="star" theme="filled" /></Col>
                                        <Col span={3}><Icon type="star" /></Col>
                                    </Row>
                                </Col>
                                <Col span={16}>
                                <Row>
                                        <Progress 
                                            percent={80} 
                                            status="active" 
                                            strokeColor={{
                                                "0%": '#57bb8a',
                                                "100%": '#57bb8a'
                                            }} />
                                    </Row>
                                    <Row>
                                        <Progress 
                                            percent={60} 
                                            status="active" 
                                            strokeColor={{
                                                "0%": '#9ace6a',
                                                "100%": '#9ace6a'
                                            }} />
                                    </Row>
                                    <Row>
                                        <Progress 
                                            percent={90} 
                                            status="active" 
                                            strokeColor={{
                                                "0%": '#ffcf02',
                                                "100%": '#ffcf02'
                                            }} />
                                    </Row>
                                    <Row>
                                        <Progress 
                                            percent={20} 
                                            status="active" 
                                            strokeColor={{
                                                "0%": '#ff9f02',
                                                "100%": '#ff9f02'
                                            }} />
                                    </Row>
                                    <Row>
                                        <Progress 
                                            percent={10} 
                                            status="active" 
                                            strokeColor={{
                                                "0%": '#ff6f31',
                                                "100%": '#ff6f31'
                                            }} />
                                    </Row>
                                </Col>
                            </Card>
                        </Row>
                    </Col>
                    <Col span={7}>
                        <Card bordered="true" title="License Chart">
                        
                        </Card>                        
                    </Col>
                    <Col span={7}>
                        <Card bordered="true">
                        
                        </Card>                       
                    </Col>
                </Row>
            </div>
        )
    }
}
