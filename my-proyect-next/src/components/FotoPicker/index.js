import React from 'react';
import AppParams from '../../Params/index';
var _store;
export const setStore = (store) => {
    _store = store;
}

export default function FotoPicker(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(false);

    const openCamPicker = () => {

    }
    const openfilePicker = () => {
        document.getElementById("fileIn").dataset["props"] = JSON.stringify(props.data);
        document.getElementById("fileIn").click();
    }

    const onChangeFile = () => {
        var body = new FormData(document.getElementById("formIn"));
        var data = document.getElementById("fileIn").dataset["props"]
        body.append('data', data);
        var myInit = {
            method: 'POST',
            body: body,
            mode: 'no-cors',
        };
        var myRequest = new Request(AppParams.images.url + "multipart", myInit);
        fetch(myRequest)
            .then(function (response) {
                setOpen(false);
                if (_store) {
                    console.log("INICIO ESTORE");
                    console.log(response);
                    _store.dispatch(response.data);
                    console.log("FIN ESTORE");
                }
            }).catch(error => {
            })
    }

    const handleClose = (value) => {
        setOpen(false);
        switch (value) {
            case "file":
                openfilePicker();
                break;
            case "cam":
                openCamPicker();
                break;
        }
    };


    return (
        <>
            <div className="" style={{
                display: 'inline-flex',
                width: 150,
                height: 150,
                padding: 0,
                margin: 0,
                border: "1px solid #ddd",
                overflow: "hidden",
                position: "relative",
                borderRadius: 20,
            }} onClick={() => {
                openfilePicker()
            }}>
                {_store.getState().imageReducer.getImage(AppParams.images.url + "parqueo/" + props.data.key)}
            </div>

            <form id="formIn" method="POST" enctype="multipart/form-data">
                <input id="fileIn" type="file" name={"file"} hidden onChange={onChangeFile}></input>
            </form>
        </>
    );
}
