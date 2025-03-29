import { Space, Table, Tag } from 'antd';
import { fetchAllUser } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () => {
        const res = await fetchAllUser();
        setDataUser(res.data);
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
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    // const data = [
    //     {
    //         _id: dataUser._id,
    //         fullName: dataUser.fullName,
    //         email: dataUser.email,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     }
    // ];

    return (
        <>
            <Table
                columns={columns}
                rowKey={'_id'}
                dataSource={dataUser}
            />
        </>
    );
}

export default UserTable;