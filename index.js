d3.csv("./data/2019.csv").then((data) => {
    console.log(data)
    console.log(data[0]["Country or region"])

    const metaData = document.getElementById("meta-data")

    metaData.innerHTML = `Happiness Data - Year: 2019 - Length: ${data.length}`
})
