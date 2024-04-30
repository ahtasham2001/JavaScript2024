class user {
    // properties
    age = 22; //public
    #weight = 55; //private
    ht = 180;

    // behaviour

    walking(){
        console("I am Walking", this.#weight)
    }

    Runing(){
        console("I am Runing")
    }
}

let obj = new user();
console.log(obj.age);
console.log(obj.weight);
console.log(obj.ht);
obj.walking