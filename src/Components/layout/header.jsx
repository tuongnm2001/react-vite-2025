import { AppstoreOutlined, HomeOutlined, MailOutlined, ProductOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
        label: <Link to='/'>Home</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to='/users'>Users</Link>,
        key: 'users',
        icon: <UserOutlined />,
    },
    {
        label: <Link to='/products'>Product</Link>,
        key: 'Product',
        icon: <ProductOutlined />,
    }
];

const HeaderPage = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default HeaderPage;

