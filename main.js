var grades = [];
        var update_scores = function () {
           var val = get_item_list(grades);
           document.getElementById("scores").value = val;
           document.getElementById("student_name").value = "";
           document.getElementById("score").value = "";
           document.getElementById("student_name").focus();
        }    
        var student_grade_add_click = function() {
        var last = document.getElementById("student_name").value;
               var score = parseFloat(document.getElementById('score').value);
                grades.push ([last, score]);  
                update_scores();
                document.getElementById("average_score").value = getAverageScore(grades);
        }

        var get_item_list = function(item_list) {
           if ( item_list.length == 0 ) {
              return "";
           }
           var list = "";
           for ( var i = 0; i < item_list.length; i++) {
              var current = item_list[i];
              for ( var attribute in current ) {
                  list += current[attribute] + ", "; 
              }
          list += "\n";  
           }
           return list;
        }

        function getAverageScore(grades){ 
        
        var numberOfStudents = grades.length; 
        var sum = 0; 
        if(numberOfStudents > 0) { 
            for(var i=0; i < numberOfStudents; i++) {
                sum += grades[i][1]; 
            }
        return sum/numberOfStudents; 
        }
        return 0; 
        }
        
        function clear_click()
        {
                document.getElementById("form").reset();
                document.getElementById("average_score").value="";
                grades.splice(0, grades.length);  
        }
        
        var sort_click = function () 
        {
        grades.sort();
        update_scores();
        }
        
        window.onload = function() {
                document.getElementById("add_button").onclick = student_grade_add_click;
                document.getElementById("sort_button").onclick = sort_click;      
                document.getElementById("student_name").focus();
        }
        