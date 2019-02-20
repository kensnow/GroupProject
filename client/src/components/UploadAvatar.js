import React from 'react'
const axios = require('axios')
const imageAxios = axios.create()

imageAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const App = () =>  {
   
    const uploadImage = (imageData) => {
        imageAxios.post('/api/avatar', imageData).then(response => console.log(response.data))
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
                <input type="file" name="avatar" id="avatar" style={{display: "none"}}  onChange={(e) => setImage(e)} />
                <label className="Change-Image-Button" htmlFor="avatar">Change Image</label>
            </div>
        )
    }

export default App

//Get rid of the filename being displayed