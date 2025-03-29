import axios from "axios";
import { Input, notification } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import { createUserApi } from "../../services/api.service";

const UserFrom = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleAddUser = async () => {
        const res = await createUserApi(fullName, email, password, phoneNumber)
        if (res && res.data && res.data) {
            notification.success({
                message: "Create User",
                description: "Tạo User thành công"
            })
        }
    }


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} size="large" placeholder="Fullname" prefix={<UserOutlined />} />
                <Input value={email} onChange={(e) => setEmail(e.target.value)} size="large" placeholder="Email" prefix={<MailOutlined />} />
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} size="large" placeholder="Password" prefix={<LockOutlined />} />
                <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} size="large" placeholder="Phone Number" prefix={<PhoneOutlined />} />
            </div>
            <Button onClick={handleAddUser} type="primary" style={{ marginTop: '20px' }}>Create User</Button>
        </>
    );
}

export default UserFrom;