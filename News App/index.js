// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let cont = document.getElementById("cont")
function india(){

const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=>{
   console.log(res)
   let data = res.articles
   cont.innerText = null
   appendData(data)
 
})
}


function china(){

const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`
fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=>{
   console.log(res)
   let data = res.articles
   cont.innerText = null
   appendData(data)
 
})
}

function USA(){

const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`
fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=>{
   console.log(res)
   let data = res.articles
   cont.innerText = null
   appendData(data)
 
})
}


function Uk(){

const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`
fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=>{
   console.log(res)
   let data = res.articles
   cont.innerText = null
   appendData(data)
 
})
}


function Newzeland(){

const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`
fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=>{
   console.log(res)
   let data = res.articles
   cont.innerText = null
   appendData(data)
 
})
}

function appendData(data){
    data.map(elem =>{
     
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = elem.urlToImage
    img.style.height = "150px"
    img.style.width = "150px"
    
    let headline = document.createElement("h3")
    headline.innerText = elem.title

    let para = document.createElement("p")
    para.innerText = elem.description

    div.append(img,headline,para)
    cont.append(div)


    })
}

function searchNews(event){

    let query = document.getElementById("search_input").value

    if(event.key==="Enter"){
        localStorage.setItem("search",JSON.stringify(query))
        window.location.href = "search.html"
    }
}