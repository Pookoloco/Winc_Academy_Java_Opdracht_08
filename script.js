/*  const numCheck = function(number){

      if (number > 100){

        return true;

    } else { 

        return false;
    }   
}

numCheck(101)
numCheck(99)
numCheck(100)

console.log(numCheck(100));

*/

//What kind of function is this? --- This function produces a true or false value based on the input

/*  
const bouncer = function(maxAllowed,age){

       if (age < 18){

          return "this is a club for adults";
   
    }  if (age >= 18 && maxAllowed <= 300){

          return "come on in";

    }  if (age >= 18 && maxAllowed > 300){

          return "it's too busy now, come back later";
    }

};
const response = bouncer(299, 18)
console.log(bouncer(301,18));
console.log(bouncer(299,18));
console.log(bouncer(301,17));
console.log(response);

*/

// What kind of function is this? --- This function produces a response based on provided data 

const numAvarage = function(numbers) {

        const average = numbers.reduce((total, n) => total + n) / numbers.lenght;
            return average;

};

const grades = [10, 8, 6, 6, 10];

const ages =[19, 55, 30, 11, 63];
console.log(Math.round(numAvarage(grades)));


// What kind of function is this? --- This function calculates something for you, it Does math for you 



