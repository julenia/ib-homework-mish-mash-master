const ifExists = (categories, string)=>{
    if(categories[string] == null) categories[string] = [];
    return categories
}

const groupAdultsByAgeRange = (people) =>{
      const peopleAbove18 = people.filter(person => {
        return person.age >=18;
    })
    return peopleAbove18.reduce((categories, person)=> { 
        if(person.age>= 18 && person.age <=20){
            ifExists(categories, '20 and younger');
            categories['20 and younger'].push(person);
            return categories;}
        else if (person.age<=30) {
            ifExists(categories, '21-30');
            categories['21-30'].push(person);
            return categories;}
        else if (person.age <=40 ) {
            ifExists(categories, '31-40')
            categories['31-40'].push(person);
            return categories;}
        else if (person.age <=50) {
            ifExists(categories, '41-50')
            categories['41-50'].push(person);
            return categories;}
        else if(person.age > 50){
            ifExists(categories, '51 and older')
            categories['51 and older'].push(person)
            return categories;}
        else return [];
    }, {})

}

module.exports={groupAdultsByAgeRange}