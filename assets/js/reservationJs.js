for (let index = 2; index <= 50; index++) {
    document.getElementById("persons").innerHTML+=`
    <option>${index} people</option>

    `
}
for (let index = 1; index <= 10; index++) {
    document.getElementById("time").innerHTML+=`
    <option>${index}:00 PM</option>
    <option>${index}:30 PM</option>
    `
}