import { Space, Table, Tag } from 'antd';
import { fetchAllUser } from '../../services/api.service';
import { useEffect, useState } from 'react';
import ModalUpdateUser from './modal.update.user';

const UserTable = (props) => {

    const { dataUser, getAllUser } = props;
    const [isShowModalUpdateUser, setIsShowModalUpdateUser] = useState(false)
    const [dataEditUser, setDataEditUser] = useState([])

    const handleEditUser = (record) => {
        setIsShowModalUpdateUser(true)
        setDataEditUser(record);
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Fullname',
            dataIndex: 'fullName',
            key: 'Fullname'
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => handleEditUser(record)}>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                rowKey={'_id'}
                dataSource={dataUser}
            />

            <ModalUpdateUser
                open={isShowModalUpdateUser}
                setOpen={setIsShowModalUpdateUser}
                dataEditUser={dataEditUser}
                getAllUser={getAllUser}
            />
        </>
    );
}

export default UserTable;