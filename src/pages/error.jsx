import { useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <Result
            status="403"
            title="Oops!"
            subTitle={error.statusText || error.message}
            extra={<Button type="primary" href="/">Back Home</Button>}
        />
    );
}

export default ErrorPage;