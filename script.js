
        var win = 0;
        var lose = 0;
        var tie = 0; 
        function rps(round) {
        // 1. Prompt user to enter r, p, or s representing rock, paper, or scissors.
        var prompted = prompt("Round " + round + "    Type r, p, or s to play!");
        
        // 2. Computer chooses a random value in a list of r, p, or s.
        var computerChoices = ["r", "p", "s",];
        var computerChoice = 
            computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        // 3. We determine if the user wins or not.
        var humanChoice = prompted.toLowerCase();
        alert("You chose " + humanChoice + ". Computer chose " + computerChoice);
        //    * If user picks rock and if computer picks scissors then user wins.
        //    * If user picks rock and if computer picks paper then user loses.
        //    * If user picks scissors and if computer picks rock then user loses.
        //    * If user picks scissors and if computer picks paper then user wins.
        //    * If user picks paper and if computer picks rock then user wins.
        //    * If user picks paper and if computer picks scissors then user loses.
        //    * If user picks the same as computer then they tie.
        if (
            (humanChoice == "r" && computerChoice == "p") ||
            (humanChoice == "p" && computerChoice == "s") ||
            (humanChoice == "s" && computerChoice == "r") 
        ) {
            lose++;
            alert("The Computer won this round. \nIt's won " + lose + " so far. \n Here's the score:\n Wins: " + win + "\n Losses: " + lose + "\n Tied: " + tie);
        } else if (
            (humanChoice == "s" && computerChoice == "p") ||
            (humanChoice == "r" && computerChoice == "s") ||
            (humanChoice == "p" && computerChoice == "r") 
        ) {
            win++;
            alert("You won this round! \nYou've won " + win + " so far! \n Here's the score: \n Wins: " + win + "\n Losses: " + lose + "\n Tied: " + tie);
        } else if (humanChoice == computerChoice) {
            tie++;
            alert ("You tied! We've had " + tie + " of those so far. \n Here's the score: \n Wins: " + win + "\n Losses: " + lose + "\n Tied: " + tie);
        } else {
            alert(
                "You lost. \n Here's the score: \n Here's the score: \n Wins: " + win + "\n Losses: " + lose + "\n Tied: " + tie);
                lose++;   
        }
        }
        // 4. We then add to their score.
        //    * If user wins then we add one to their wins.
        //    * If user loses then we add one to their losses.
        //    * If user ties then we add one to their ties.
        for (var i = 1; i < 11; i++)
        if (win < 3 && lose < 3 && tie < 6) {
            rps(i);
        } else {
            break;
        }
        // 5. Prompt user to play again.
        alert("Game over! Here's the score: \n Wins: " + win + "\n Losses: " + lose +" \n Tied: " + tie + "\n Refresh browser to play again!");
