// Ude Import export (MANDATORY)

let detailed_news = document.getElementById("detailed_news")

let news = JSON.parse(localStorage.getItem("news"))
console.log(news)
appendData(news)

function appendData(elem){
    // news.forEach(elem =>{
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.urlToImage
        img.style.height = "350px"
        img.style.width = "450px"

          let headline = document.createElement("h3")
          headline.innerText = elem.title

          let para = document.createElement("p")
          para.innerText = elem.description

          div.append(img,headline,para)
          detailed_news.append(div)

    // })
}
