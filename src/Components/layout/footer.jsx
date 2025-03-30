import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";



const FooterPage = () => {
    return (
        <Layout>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default FooterPage;