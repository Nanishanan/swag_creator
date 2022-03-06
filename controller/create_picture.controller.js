const multer = require("multer")
const path = require("path");
const fs = require('fs')

exports.upload = async (req, res)=>{
    try{
        const upload = multer({
            dest: 'C://Users//0000G9744//Documents//Nodejs//swag_creator//image'
        })        

        upload.single("file", (req, res) =>{
            console.log("Path")
            const tempPath = req.file.path;
            console.log("TP", tempPath)
            const targetPath = 'C://Users//0000G9744//Documents//Nodejs//swag_creator//image'

            fs.rename(tempPath, targetPath, err => {
                return res.send(err)
            })

            return res.send('Uploaded')
        })

    } catch(err) {
        res.send(err)
    }
}