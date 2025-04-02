import { message, Popconfirm, Space, Table } from 'antd';
import { deleteUser } from '../../services/api.service';
import ModalUpdateUser from './modal.update.user';
import ModalViewUser from './modal.view.user';
import { useState } from 'react';

const UserTable = (props) => {

    const { dataUser, getAllUser, current, pageSize, total, setCurrent, setPageSize } = props;
    const [isShowModalUpdateUser, setIsShowModalUpdateUser] = useState(false)
    const [dataEditUser, setDataEditUser] = useState([])
    const [isShowModalViewUser, setIsShowModalViewUser] = useState(false)
    const [dataViewUser, setDataViewUser] = useState([])

    const handleEditUser = (record) => {
        setIsShowModalUpdateUser(true)
        setDataEditUser(record);
    }

    const confirm = async (id) => {
        const res = await deleteUser(id)
        if (res && res.data) {
            message.success('Delete User success');
            getAllUser();
        } else {
            message.error(res.message);
        }
    };

    const handleViewUser = (data) => {
        setIsShowModalViewUser(true)
        setDataViewUser(data)
    };

    const columns = [
        {
            title: "No",
            render: (_, record, index) => (
                <>{(index + 1) + (current - 1) * pageSize}</>
            )
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <a onClick={() => handleViewUser(record)}>{record._id}</a>
            )
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
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const handleOnChange = (pagination, filters, sorter, extra) => {
        //nếu thay đổi trang(current)
        if (+pagination.current !== +current) {
            setCurrent(+pagination.current)
        }

        if (+pagination.pageSize !== +pageSize) {
            setPageSize(+pagination.pageSize)
        }
        console.log({ pagination, filters, sorter, extra });

    }

    return (
        <>
            <Table
                columns={columns}
                rowKey={'_id'}
                dataSource={dataUser}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,

                    }
                }
                onChange={handleOnChange}
            />

            <ModalUpdateUser
                open={isShowModalUpdateUser}
                setOpen={setIsShowModalUpdateUser}
                dataEditUser={dataEditUser}
                getAllUser={getAllUser}
            />

            <ModalViewUser
                open={isShowModalViewUser}
                setOpen={setIsShowModalViewUser}
                dataViewUser={dataViewUser}
                getAllUser={getAllUser}

            />
        </>
    );
}

export default UserTable;