      // set the date we are counting down to
      var countDown = (new Date("dec 6 2023, 14:00:00").getTime() );

      //update the count down in every 1 second
      var update = setInterval(function () {

         // get the today's date and time
         var now = new Date().getTime();

         //find the difference b/w countDown and now
         var diff = countDown - now;

         //now we are calculating time in days, hrs, minutes, and seconds.
         var days = Math.floor(diff / (1000 * 60 * 60 * 24));
         var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((diff % (1000 * 60)) / 1000);

         //now output the result in an element with id ="time"
         document.getElementById("testCompleted").innerHTML = "Kolade, do you know you have " +
         days + " days " + hrs + " hours " + minutes + " minutes and " + seconds + " seconds " + "before your exam ends!";
         if (diff < 0) {
            clearInterval(update);
            document.getElementById("testCompleted").innerHTML = "Congratulations on the completion of your exams. We wish you good luck!";
         }
      }, 1000);