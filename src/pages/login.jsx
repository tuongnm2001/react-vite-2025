import React, { useState } from 'react';
import { Button, Checkbox, Col, Divider, Form, Input, message, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api.service';

const LoginPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values) => {
        setIsLoading(true)
        const res = await login(values.email, values.password)
        if (res && res.data) {
            message.success("Đăng nhập thành công")
            navigate('/')
        } else {
            message.error(res.message)
        }
        setIsLoading(false)
    };

    return (
        <Row justify={'center'}>
            <Col xs={24} md={8}>
                <h2 style={{ margin: '50px 0', textAlign: 'center', fontSize: '32px' }}>Login</h2>

                <Form
                    onFinish={onFinish}
                    layout={'vertical'}
                    form={form}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Email không được để trống!',
                            },
                            {
                                pattern: new RegExp(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/),
                                message: 'Email không đúng định dạng!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Mật khẩu không được để trống' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            loading={isLoading}
                            type="primary"
                            onClick={() => form.submit()}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                    <Divider />
                    <div>Chưa có tài khoản ? <a onClick={() => navigate('/register')}>Đăng kí</a></div>
                </Form>
            </Col>
        </Row>
    );
}

export default LoginPage;