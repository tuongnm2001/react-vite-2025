import { useEffect, useState } from "react";
import UserFrom from "../Components/user/user.form";
import UserTable from "../Components/user/user.table"
import { fetchAllUser } from "../services/api.service";


const UserPage = () => {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () => {
        const res = await fetchAllUser();
        setDataUser(res.data);
    }

    return (
        <>
            <UserFrom
                getAllUser={getAllUser}
            />

            <UserTable
                dataUser={dataUser}
                getAllUser={getAllUser}
            />
        </>
    );
}

export default UserPage;