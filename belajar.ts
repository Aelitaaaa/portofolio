var message: string = "hello world"
console.log(message) 

// implicit type
let firstname = "Dzaky";
firstname = firstname;

// type any 

// pake any
let v : any = true;
v= "string";
Math.round(v);


// type unknown
let w: unknown = 1;
w = "string"; 
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}


let x: unknown = null;
x ="string";
