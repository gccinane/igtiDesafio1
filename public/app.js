window.addEventListener('load', ()=> {
  handleApi()
})

async function handleApi(){
  const response = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo').then(response => response.json().then((data)=> {
    console.log(data)
  })
)
}

