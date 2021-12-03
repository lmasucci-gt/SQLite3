import mongoose from 'mongoose';

export async function Dbconnect() {
    try {
        const URL = 'mongodb://127.0.0.1:27017/ecomerce'
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("base de datos conectada")
    } catch (error) {
        console.log("base de datos NO conectada: ", error)
    }
}


console.log("base de datos conectada MONGO")