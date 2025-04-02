import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { InfoOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { updateUser } from "../../services/api.service";

const ModalUpdateUser = (props) => {

    const { open, setOpen, dataEditUser, getAllUser } = props;

    const [id, setId] = useState('')
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        if (dataEditUser) {
            setId(dataEditUser._id)
            setFullName(dataEditUser.fullName)
            setPhoneNumber(dataEditUser.phone)
        }
    }, [dataEditUser])

    const handleOk = async () => {
        const res = await updateUser(id, fullName, phoneNumber)
        if (res && res.data && res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật User thành công"
            })
            setOpen(false);
            getAllUser();
        }
    }

    return (
        <>
            <Modal
                title="UPDATE USER"
                open={open}
                onOk={handleOk}
                onCancel={() => { setOpen(false) }}
                maskClosable={false}
                okText="SAVE"
                width={600}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Input value={id} onChange={(e) => setId(e.target.value)} size="large" placeholder="Id" prefix={<InfoOutlined />} disabled />
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} size="large" placeholder="Fullname" prefix={<UserOutlined />} />
                    <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} size="large" placeholder="Phone Number" prefix={<PhoneOutlined />} />
                </div>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;