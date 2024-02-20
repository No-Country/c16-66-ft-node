const server = require("./src/server");
const {conn} = require("./src/db");
const {Doctor} = require("./src/db")
const api = require("./api/doctos.json")

const PORT = 3001;

conn.sync({force: true}).then(()=> {
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    const {doctors} = api
    
    doctors.map(async({name, lastname, email, password, licensenumber, specialty, imagen}) => { await
     
     Doctor.findOrCreate({
        where: {
            name,
        },
        defaults: {
            name,
            lastname,
            email,
            password,
            licensenumber,
            specialty,
            imagen,
        }
     })   
     }
    )
})
}).catch(error => console.error(error))
