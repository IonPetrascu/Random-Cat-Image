const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://api.thecatapi.com/v1/images/search";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data[0].url;
  } catch (error) {
    console.log(error);
  }
}

fetchHandler();


button.addEventListener('click',()=>{
    let isLoaded = image.complete;
    if(isLoaded){
        fetchHandler()
    }
    
})