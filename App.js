const readline = require("readline");
const rl = readline.createInterface({ //creating an instance of readline
    input: process.stdin, // configuring the readable streams
    output: process.stdout // configuring the writable streams
});


console.log('\nPlease select required operation:\n For Addition Please Enter +\n For Subtraction Please Enter - \n For Multiplication Please Enter * \n For Division Please Enter / \n');

rl.question(" What is your operation ? ", function(operation) {
    if( operation == "+" || operation == "-" || operation == "*" || operation == "/"){
        rl.question(" Enter your first number please: ", function(numberOne) {
            rl.question(" Enter your second number please: ", function(numberTwo) {
                if ( operation == "/"){
                    if(numberTwo == '0'){
                        console.log(' Divided by zero error');
                        rl.close();
                    }
                }
                var result= eval( numberOne+operation+numberTwo); // evaluate expression
                console.log(` ${numberOne} ${operation} ${numberTwo} = `+result +'\n'); //put result into screen
                rl.close();
            });
        }); 
    }
    else {
        console.log(" Invalid Operation");
        rl.close();
    }
});

rl.on("close", function() {
    process.exit(0);
});
