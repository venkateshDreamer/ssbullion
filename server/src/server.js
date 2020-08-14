import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './routes'
const app = new express()

app.use(bodyParser.json())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/ss', api)

/*
app.use(express.static(path.join(__dirname, '../../build')));
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});*/

app.use((req, res) => {
	res.status(404).json({
		errors: {
			global: "Page Not Found."
		}
	})
});

app.listen(5000, () => {
    console.log('Port Connected -5000')
});