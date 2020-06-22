import { sendData } from "../common/interop"

document.body.innerHTML = `
    <input type="text" id="data" value="test"/>
    <button type="button" id="clickme">Click me to send a message to main</button>
`

document.getElementById("clickme")?.addEventListener("click", async () => {
    console.count("renderer call")
    console.log("Sending data to main")
    await sendData((document.getElementById("data") as HTMLInputElement).value)
    console.log("Got back from main")
    console.count("renderer return")
})
