import { AppDataSource } from "./data-source"
import express, { Request, Response } from "express"
import Route from "./routes"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000

    app.use(express.json())
    app.use('/api/v1', Route)

    
    app.listen(port, () => console.log(`Server succes on PORT ${port}`))
}).catch(error => console.log(error))

// => DB => SERVICE => CONTROLLERS => ROUTES => INDEX




// app.get('/hello', (req: Request, res: Response) => {
//     const { name, email } = req.body
//     const data = { 
//         message: "Success get data" 
//     }
    
//     const query = await sequelize.query("INSERT INTO") // => service 

//     res.render('index', query)
// })

// app.get('/product', (req: Request, res: Response) => {
//     const { product, price } = req.body
//     const data = { 
//         message: "Success get data" 
//     }
    
//     const query = await sequelize.query("INSERT INTO") // => service 

//     res.render('index', query)
// })

// res.status(200).json(data)
// app.get('/hello', hello)

// function hello(req, res) {

// }

// () => {

// }

// function () {

// }