const metaData = document.getElementById("meta-data")
const perCapita = document.getElementById("per-capita")
const support = document.getElementById("support")

d3.csv("./data/2019.csv").then((data) => {
    console.log(data)
    console.log(data[0]["Country or region"])

    metaData.innerHTML = `Happiness Data - Year: 2019 - Length: ${data.length}`

    const topTen = data.filter((d,i) => i < 11)
    perCapita.innerHTML = `${}`
})