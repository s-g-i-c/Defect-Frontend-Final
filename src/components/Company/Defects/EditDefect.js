import React, { Component } from "react";
import { Row, Col, Input, Select, Form } from "antd";
import { Button } from "antd/lib/radio";

export default class EditDefect extends Component {
  render() {
    const Option = Select.Option;
    const { TextArea } = Input;
    return (
      <div>
        <Form>
          <Row>
            <Col span={12}> Defect Id </Col>
            <Col span={12}> Module</Col>
          </Row>
          <Row style={{ margin: "0px 0px 30px 0px" }}>
            <Col span={12}>
              <Input
                readOnly={true}
                placeholder="Defect Id"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
            <Col span={12}>
              <Select
                showSearch
                style={{ width: "99%" }}
                placeholder=" Select Module"
              >
                <Option value="module1"> Module 1 </Option>
                <Option value="module2"> Module 2 </Option>
                <Option value="module3"> Module 3 </Option>
              </Select>
            </Col>
          </Row>

          <Row>
            <Col span={8}> Type </Col>
            <Col span={8}> Severity</Col>
            <Col span={8}> Priority</Col>
          </Row>
          <Row style={{ margin: "0px 0px 30px 0px" }}>
            <Col span={8}>
              <Col span={24}>
                <Select
                  showSearch
                  style={{ width: "90%" }}
                  placeholder=" Select Type"
                >
                  <Option value="type1"> Type 1 </Option>
                  <Option value="type2"> Type 2 </Option>
                  <Option value="type3"> Type 3 </Option>
                </Select>
              </Col>
            </Col>
            <Col span={8}>
              <Col span={24}>
                <Select
                  showSearch
                  style={{ width: "90%" }}
                  placeholder=" Select Severity"
                >
                  <Option value="high"> High </Option>
                  <Option value="medium"> Medium </Option>
                  <Option value="low"> Low </Option>
                </Select>
              </Col>
            </Col>
            <Col span={8}>
              <Col span={24}>
                <Select
                  showSearch
                  style={{ width: "99%" }}
                  placeholder=" Select Priority"
                >
                  <Option value="high"> High </Option>
                  <Option value="medium"> Medium </Option>
                  <Option value="low"> Low </Option>
                </Select>
              </Col>
            </Col>
          </Row>
          <Row>{/* <Divider /> */}</Row>
          <Row>
            <Col span={12}>Description</Col>
          </Row>
          <Row style={{ margin: "0px 0px 30px 0px" }}>
            <Col span={24}>
              <TextArea rows={2} />
            </Col>
          </Row>

          <Row>
            <Col span={12}>Steps to Re-Create</Col>
          </Row>
          <Row style={{ margin: "0px 0px 30px 0px" }}>
            <Col span={24}>
              <TextArea rows={4} />
            </Col>
          </Row>

          <Row>{/* <Divider /> */}</Row>
          <Row>
            <Col span={12}>Assigned To</Col>
            <Col span={12}>Available In</Col>
          </Row>
          <Row style={{ margin: "0px 0px 30px 0px" }}>
            <Col span={12}>
              <Select
                showSearch
                style={{ width: "90%" }}
                placeholder=" Assigned To "
              >
                <Option value="user1"> User1 </Option>
                <Option value="user2"> User2 </Option>
                <Option value="user3"> User3 </Option>
              </Select>
            </Col>
            <Col span={12}>
              <Input
                placeholder="Available In"
                style={{ width: "99%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
          </Row>

          <Row>
            <Col span={12}> Comments </Col>
          </Row>
          <Row style={{ margin: "0px 0px 30px 0px" }}>
            <Col span={24}>
              <TextArea rows={4} />
            </Col>
          </Row>
          <Row style={{ margin: "0px 0px 30px 0px" }}>
            <Col span={24}>
              <Button>Update</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
