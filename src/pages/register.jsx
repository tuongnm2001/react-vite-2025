import React, { useState } from 'react';
import { Button, Form, Input, message, notification, Row, Col } from 'antd';
import { register } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('check values : ', values);
        const res = await register(values.fullname, values.email, values.password, values.phone)
        if (res.data) {
            notification.success({
                message: "Register User",
                description: "Register user Success"
            })
            navigate('/login')
        } else {
            notification.error({
                message: "Register Fail",
                description: JSON.stringify(message)
            })
        }
    }

    return (
        <Row justify={'center'} align={'center'}>
            <Col xs={24} md={8}>
                <Form
                    layout={'vertical'}
                    form={form}
                    // style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Full Name"
                        name={"fullname"}
                        rules={[
                            {
                                required: 'true',
                                message: 'Fullname không được để trống'
                            }
                        ]}
                    >
                        <Input placeholder="Nguyen Van A" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name={"email"}
                        rules={[
                            {
                                required: 'true',
                                message: 'Email không được để trống'
                            }
                        ]}
                    >
                        <Input placeholder="nguyenvana@gmail.com" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name={"password"}
                        rules={[
                            {
                                required: 'true',
                                message: 'Password không được để trống'
                            }
                        ]}
                    >
                        <Input.Password placeholder="*******" />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name={"phone"}
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/^\d+$/),
                                message: "Phone Number không đúng định dạng"
                            }
                        ]}
                    >
                        <Input placeholder="0123456789" />
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={() => form.submit()} type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>

    );
}

export default RegisterPage;