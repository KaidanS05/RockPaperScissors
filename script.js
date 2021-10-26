       
        function computerPlay() {
        var choices =["Rock","Paper","Scissors"];
        var choice = choices[Math.floor(Math.random()*choices.length)];
            
            return(choice)
        }  

            function playerselection(){
            var playerChoice = window.prompt("Please enter Rock, Paper, or Scissors");
            var answer
            if (playerChoice === "rock"){     
                answer =("Rock");
                alert("You chose " + answer);
             
             } else if (playerChoice === "paper"){
                answer =("Paper");
                alert("You chose " + answer);
                
             } else if (playerChoice === "scissors"){
                answer =("Scissors");
               alert("You chose " + answer);
                
              } else {
                alert("That was not an option, you instanly lose");
                
            }
            
            return(answer)
        }      
          
        function compare(choice1, choice2) {
            
            if (choice1 === "Paper") {
                if (choice2 === "Rock") {
                    document.write(" Paper wins,");
                    document.write(" New round, ")
                } else {
                    if (choice2 === "Scissors") {
                        document.write(" Scissors wins,");
                        document.write(" New round, ")          
                    } else {
                        if (choice2 === choice1) {
                            document.write(" It's a tie,");
                            document.write(" New round, ")
                        } 
                    }
                                       
                }              
            }
            if (choice1 === "Scissors") {
                if (choice2 === "Rock") {
                    document.write(" Rock wins,");
                    document.write(" New round, ")
                } else {
                   if (choice2 === "Paper") {
                    document.write(" Scissors wins,");
                        document.write(" New round, ")
                    }
                    else {
                        if (choice2 === choice1) {
                            document.write(" It's a tie,");
                            document.write(" New round, ")
                        }
                    }
                }
            }
            if (choice1 === "Rock") {
                if (choice2 === "Paper") {
                    document.write(" Paper wins,");
                    document.write(" New round, ")
                } else {
                     if (choice2 === "Scissors") {
                        document.write(" Rock wins,");
                        document.write(" New round, ")
                    }
                    else {
                        if (choice2 === choice1) {
                            document.write(" It's a tie,");
                            document.write(" New round, ")
                        }
                    }
                }
            }
            
        }
   
        for (let i = 0; i < 5; i++) {
            compare(computerPlay(), playerselection());
          }  
