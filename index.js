
    const bodyParser = require('body-parser');
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');

    const app = express();
    const port = 3000;

    async function main(){
        await mongoose.connect('mongodb://localhost:27017/cats');
        app.listen(port);
        console.log('Server started at http://localhost:' + port);
    }
    main()
    const Cat = mongoose.model('Cat', { url: String });

    app.use(bodyParser.json());
    app.use(cors());

    //Routes
    app.post('/save', saveImage)
    app.get('/getAll', getAllImages)

    function saveImage(req, res){
        const mycat = new Cat({ url: req.body.url });
        mycat.save().then(() => console.log('meow'));
        res.send(req.body.url)
    }

    async function getAllImages(req, res, next){
        try {
            const images = await Cat.find();
            res.send(images);
        } catch (err) {
            next(err);
        }
    }
    


