import React from 'react'
const axios = require('axios')
const imageAxios = axios.create()
const { withDataHandler } = require("../DataHandler")

imageAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const App = (props) => {

    const uploadImage = (imageData) => {
        imageAxios.post('/api/avatar', imageData)
        .then(response => props.updateAvatar(response.data.filename))
    }

    const setImage = (e) => {
        if (e.target.files[0]) {
            let data = new FormData()
            let files = e.target.files
            let fileName = files[0].name
            data.append('file', files[0])
            data.append('name', fileName)
            uploadImage(data)
        }
    }
    return (
        <div>
            <input type="file" name="avatar" id="avatar" style={{ display: "none" }}  onChange={(e) => setImage(e)} />
            <label className="change-Image-Button" htmlFor="avatar">Upload</label>
        </div>
    )
}

export default withDataHandler(App)

//Get rid of the filename being displayed