import axios from "axios";
import { Input, Modal, notification } from 'antd';
import { Button } from 'antd';
import { useState } from 'react';
import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { createUserApi } from "../../services/api.service";

const UserFrom = (props) => {

    const { getAllUser } = props;

    const [isShowModalAddUser, setIsShowModalAddUser] = useState(false)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const resetModal = () => {
        setIsShowModalAddUser(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")
    }

    const handleOk = async () => {
        const res = await createUserApi(fullName, email, password, phoneNumber)
        if (res && res.data && res.data) {
            notification.success({
                message: "Create User",
                description: "Tạo User thành công"
            })
            resetModal();
            await getAllUser();
        } else {
            notification.error({
                message: "Error Create User",
                description: res.message
            })
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '2rem 0' }}>
                <h3 style={{ fontSize: ' 2.4rem ' }}>Table Users</h3>
                <Button
                    onClick={() => setIsShowModalAddUser(true)}
                    type="primary"
                >Create User</Button>
            </div>

            <Modal
                title="ADD NEW USER"
                open={isShowModalAddUser}
                onOk={handleOk}
                onCancel={() => { setIsShowModalAddUser(false) }}
                maskClosable={false}
                okText="CREATE"
                width={600}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} size="large" placeholder="Fullname" prefix={<UserOutlined />} />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} size="large" placeholder="Email" prefix={<MailOutlined />} />
                    <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} size="large" placeholder="Password" prefix={<LockOutlined />} />
                    <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} size="large" placeholder="Phone Number" prefix={<PhoneOutlined />} />
                </div>
            </Modal>
        </>
    );
}

export default UserFrom;