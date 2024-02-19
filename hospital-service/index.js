const server = require("./src/server");
const {conn} = require("./src/db");
const {Doctor} = require("./src/db")
const api = require("./api/doctos.json")

const PORT = 3001;

conn.sync({force: true}).then(()=> {
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    const {doctors} = api
    doctors.map(async({id,name}) => { await

     Doctor.findOrCreate({
        where: {
            id: id,
        },
        defaults: {
            name: name,
        }
     })   
     }
    )
})
}).catch(error => console.error(error))
