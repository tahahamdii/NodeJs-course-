import { createServer } from "http"
import { Server } from "socket.io"

const httpServer = createServer()

const io = new Server(httpServer, {
    cors: {
        //common settings for cors ken flase no access w ken true access from these links
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"]
    }
})

io.on('connection', socket => {
    console.log(`User ${socket.id} connected`)

    socket.on('message', data => {
        console.log(data)
        // the second arg hua data bessh tetbaath maa levent (5 characters ml unique id and the data hia lmessage)
        io.emit('message', `${socket.id.substring(0, 5)}: ${data}`)
    })
})

httpServer.listen(3500, () => console.log('listening on port 3500'))