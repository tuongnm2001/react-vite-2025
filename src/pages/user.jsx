import { useEffect, useState } from "react";
import UserFrom from "../Components/user/user.form";
import UserTable from "../Components/user/user.table"
import { fetchAllUser } from "../services/api.service";


const UserPage = () => {

    const [dataUser, setDataUser] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        getAllUser();
    }, [current, pageSize])

    const getAllUser = async () => {
        const res = await fetchAllUser(current, pageSize);
        if (res) {
            setDataUser(res.data.result);
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }
    }

    return (
        <>
            <UserFrom
                getAllUser={getAllUser}
            />

            <UserTable
                dataUser={dataUser}
                getAllUser={getAllUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </>
    );
}

export default UserPage;