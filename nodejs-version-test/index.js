const express = require("express")
const app = express()

const port = 4001
const version = "alternative 1"

app.get("/", (req, res) => {

	res.send("VERSION: " + version)

})

app.listen(port, () =>
	console.log("listening in port " + port.toString() )
)



