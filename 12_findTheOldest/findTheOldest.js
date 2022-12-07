const getAge = function(birth,death) {
    if (!death) {
        death = new Date().getFullYear();
    } return death-birth;
}

const findTheOldest = function(people) {
/* let oldest = {};
let oldestAge = 0;
for (let i = 0; i < people.length; i++) {
    let age = (people[i].yearOfDeath) - (people[i].yearOfBirth);
    if (age >= oldestAge) {
        oldestAge = age;
        oldest = people[i];
    }
    
} return oldest; */

return people.reduce((oldest,currentPerson)=>{
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearofDeath);
    const currentAge = getAge (currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
});

};

// Do not edit below this line
module.exports = findTheOldest;
