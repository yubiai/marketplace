const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback)  => {
        callback(null, './public/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Math.floor(Math.random() * 1000) + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage });

module.exports = upload.single('ProfilePicture')