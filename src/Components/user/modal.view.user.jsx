import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, updateAvatarUser } from '../../services/api.service';

const ModalViewUser = (props) => {

    const { open, setOpen, dataViewUser, getAllUser } = props;
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }

        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleUpdateUserAvatar = async () => {
        //step 1 : upload file
        const resUploadFile = await handleUploadFile(selectedFile, "avatar")
        if (resUploadFile.data) {
            const newAvatar = resUploadFile.data.fileUploaded
            //step 2 : update user
            const resUpdateAvatar = await updateAvatarUser(dataViewUser._id, dataViewUser.fullName, dataViewUser.phone, newAvatar)

            if (resUpdateAvatar.data) {
                setSelectedFile(null)
                setPreview(null)
                setOpen(false)
                await getAllUser();

                notification.success({
                    message: "Update user success",
                    description: "Update user success"
                })
            } else {
                notification.error({
                    message: "Error upload avatar",
                    description: JSON.stringify(resUploadFile.message)
                })
            }
        } else {
            notification.error({
                message: "Error upload file",
                description: JSON.stringify(resUploadFile.message)
            })
        }
    }

    return (
        <>
            <Drawer
                title="VIEW USER"
                onClose={() => { setOpen(false) }}
                open={open}
                width={'40vw'}
            >
                <div>Id : {dataViewUser._id}</div>
                <div>fullName: {dataViewUser.fullName}</div>
                <div>Email: {dataViewUser.email}</div>
                <div>PhoneNumber: {dataViewUser.phone}</div>
                <br />
                <img
                    style={{ objectFit: 'contain' }}
                    width={250}
                    height={250}
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataViewUser.avatar}`}
                    alt=""
                />
                <br />
                <div style={{ marginTop: '20px' }}>
                    <label
                        htmlFor="upLoadFile"
                        style={{
                            padding: '12px 20px',
                            backgroundColor: 'orange',
                            borderRadius: '8px',
                            cursor: 'pointer',

                        }}
                    >
                        Upload File
                    </label>

                    <input
                        type="file"
                        id='upLoadFile'
                        hidden
                        onChange={(event) => handleOnChangeFile(event)}
                    />
                </div>
                {preview &&
                    <>
                        < img
                            style={{ objectFit: 'contain' }}
                            width={250}
                            height={250}
                            src={preview}
                            alt=""
                        />
                        <Button type='primary' onClick={() => handleUpdateUserAvatar()}>Save</Button>
                    </>
                }

            </Drawer >
        </>
    );
}

export default ModalViewUser;