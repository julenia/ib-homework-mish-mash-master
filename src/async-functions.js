const superagent = require('superagent');
const getTatooineResidents = () => {
        return superagent
        .get('https://swapi.co/api/planets/1/')
        .then(results => {
            return results.body.residents
        })
        .catch(err => console.log(err)) 
}

const promiseMeAString = (string) => {
    return new Promise ((resolve, reject) =>{
        if(string === 'I Promise!') {
            resolve("You kept the Promise!")
        }
        else {
            reject("You have failed me!")
        }

    })
}

module.exports = {
    getTatooineResidents,
    promiseMeAString,
  }