let people;
let matches;
let input;

window.addEventListener('load', ()=> {
  handleApi()
  getInput()
  getMatches(input)
})

async function handleApi(){
  const response = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
    .then(response => response.json()
      .then((data)=> {

      people = data.results;
      people = people.map(person => {
        const {gender, dob, picture, name} = person;
        return {gender, age: dob.age, picture, name: name.first + ' ' + name.last}
      })
      
    })
  )

}

function getInput(){
  input = document.querySelector('input');
  
}

function getMatches(input){
  input.addEventListener('input', (e)=> {  
    matches =  people.filter(p=> { 
      return p.name.toUpperCase().includes(e.target.value.toUpperCase())
    }); 
    getStats(matches) 
  })
  
}

function getStats(users){
  console.log(users)
  let stats = {
    sumMale: 0,
    sumFemale: 0,
    sumAge: 0,
    ageAvg: 0,
  }
  stats.sumAge = users.reduce((acc, user) => acc += user.age, 0)
  stats.sumMale = users.reduce((acc, user) => user.gender === 'male' ? acc + 1 : acc, 0)
  stats.sumFemale = users.reduce((acc, user) => user.gender === 'female' ? acc + 1 : acc, 0)
  stats.ageAvg = stats.sumAge / users.length
  console.log(stats)
}

