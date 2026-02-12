class Biography {
    constructor(firstName, middleInitial, lastName, city, street, barangay, ) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        
    }

    get fullName() {
        return middleInitial
            ? `${firstName} ${middleInitial} ${lastName}`
            : `${firstName} ${lastName}`;
    }

    get address(){
        return 
    }
}


const name1 = new Biography('Jherson', 'M', 'Aguto');
const name2 = new Biography('Jherson', undefined, 'Aguto');


console.log(name1.firstName);
console.log(name2.fullName);




const fakeDb = {
    query: () => [{
        id: "hehe",
        task: "hehe"
    }]
};