const mongoose = require('mongoose');

const uri = "mongodb+srv://eduardogomezsent2:Edugomez503@cluster0.iq2ohr8.mongodb.net/?retryWrites=true&w=majority";

module.exports = () =>{
    const connect=()=>{
        try {
            mongoose.connect(
                uri,
                {
                useNewUrlParser:true,
                useUnifiedTopology:true
                }
                /*{
                    keepAlive:true,
                    useNewUrlParser:true,
                    useUnifiedTopology:true
                }*/
            )
            console.log('conectado')
        } catch (error) {
            console.log('Err onnection :'+error);
        }
    }
    connect()
}