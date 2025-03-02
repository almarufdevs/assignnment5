document.getElementById("login-btn").addEventListener("click", function(){
    window.location.href="./link.html"
})

function changeBackground() {
    const colors = ["red", "blue", "green", "purple", "yellow", "orange"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}







document.querySelector("#warningbtn")?.addEventListener("click", function() {
    const taskCountElem = document.getElementById("taskCount"); 
    const taskCountElem2 = document.getElementById("task2");
    const completedBtn = document.getElementById("warningbtn"); 
   
    if (taskCountElem && completedBtn) { 
        let currentCount = parseInt(taskCountElem.textContent, 10) || 0;
        
        if (currentCount > 0) {
            taskCountElem.textContent = (currentCount - 1).toString().padStart(2, '0');
  
            if (taskCountElem2) { 
                let currentCount2 = parseInt(taskCountElem2.textContent, 10) || 0;
                taskCountElem2.textContent = (currentCount2 + 1).toString().padStart(2, '0');
            }
            alert("Board Updated Successfully.");
            completedBtn.style.pointerEvents = "none";
            completedBtn.style.opacity = "0.5"; 
        }
    }
  });
//btn2
document.querySelector("#warning")?.addEventListener("click", function() {
    const taskCountElem = document.getElementById("taskCount"); 
    const taskCountElem2 = document.getElementById("task2");
    const completedBtn = document.getElementById("warning"); 
   
    if (taskCountElem && completedBtn) { 
        let currentCount = parseInt(taskCountElem.textContent, 10) || 0;
        
        if (currentCount > 0) {
            taskCountElem.textContent = (currentCount - 1).toString().padStart(2, '0');
  
            if (taskCountElem2) { 
                let currentCount2 = parseInt(taskCountElem2.textContent, 10) || 0;
                taskCountElem2.textContent = (currentCount2 + 1).toString().padStart(2, '0');
            }
            alert("Board Updated Successfully.");
            completedBtn.style.pointerEvents = "none";
            completedBtn.style.opacity = "0.5"; 
        }
    }
  });
  //btn3//
  document.querySelector("#warningbt")?.addEventListener("click", function() {
    const taskCountElem = document.getElementById("taskCount"); 
    const taskCountElem2 = document.getElementById("task2");
    const completedBtn = document.getElementById("warningbt"); 
   
    if (taskCountElem && completedBtn) { 
        let currentCount = parseInt(taskCountElem.textContent, 10) || 0;
        
        if (currentCount > 0) {
            taskCountElem.textContent = (currentCount - 1).toString().padStart(2, '0');
  
            if (taskCountElem2) { 
                let currentCount2 = parseInt(taskCountElem2.textContent, 10) || 0;
                taskCountElem2.textContent = (currentCount2 + 1).toString().padStart(2, '0');
            }
            alert("Board Updated Successfully.");
            completedBtn.style.pointerEvents = "none";
            completedBtn.style.opacity = "0.5"; 
        }
    }
  });

  //btn4//
  document.querySelector("#warningb")?.addEventListener("click", function() {
    const taskCountElem = document.getElementById("taskCount"); 
    const taskCountElem2 = document.getElementById("task2");
    const completedBtn = document.getElementById("warningb"); 
   
    if (taskCountElem && completedBtn) { 
        let currentCount = parseInt(taskCountElem.textContent, 10) || 0;
        
        if (currentCount > 0) {
            taskCountElem.textContent = (currentCount - 1).toString().padStart(2, '0');
  
            if (taskCountElem2) { 
                let currentCount2 = parseInt(taskCountElem2.textContent, 10) || 0;
                taskCountElem2.textContent = (currentCount2 + 1).toString().padStart(2, '0');
            }
            alert("Board Updated Successfully.");
            completedBtn.style.pointerEvents = "none";
            completedBtn.style.opacity = "0.5"; 
        }
    }
  });
  //btn5//
  document.querySelector("#warningt")?.addEventListener("click", function() {
    const taskCountElem = document.getElementById("taskCount"); 
    const taskCountElem2 = document.getElementById("task2");
    const completedBtn = document.getElementById("warningt"); 
   
    if (taskCountElem && completedBtn) { 
        let currentCount = parseInt(taskCountElem.textContent, 10) || 0;
        
        if (currentCount > 0) {
            taskCountElem.textContent = (currentCount - 1).toString().padStart(2, '0');
  
            if (taskCountElem2) { 
                let currentCount2 = parseInt(taskCountElem2.textContent, 10) || 0;
                taskCountElem2.textContent = (currentCount2 + 1).toString().padStart(2, '0');
            }
            alert("Board Updated Successfully.");
            completedBtn.style.pointerEvents = "none";
            completedBtn.style.opacity = "0.5"; 
        }
    }
  });
  //btn6//

  document.querySelector("#warningbtnb")?.addEventListener("click", function() {
    const taskCountElem = document.getElementById("taskCount"); 
    const taskCountElem2 = document.getElementById("task2");
    const completedBtn = document.getElementById("warningbtnb"); 
   
    if (taskCountElem && completedBtn) { 
        let currentCount = parseInt(taskCountElem.textContent, 10) || 0;
        
        if (currentCount > 0) {
            taskCountElem.textContent = (currentCount - 1).toString().padStart(2, '0');
  
            if (taskCountElem2) { 
                let currentCount2 = parseInt(taskCountElem2.textContent, 10) || 0;
                taskCountElem2.textContent = (currentCount2 + 1).toString().padStart(2, '0');
            }
            alert("Board Updated Successfully.");
            completedBtn.style.pointerEvents = "none";
            completedBtn.style.opacity = "0.5"; 
        }
    }
  });





   

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("warningbtn");
    const activityLog = document.getElementById("activity-log");

    
    function loadActivityLog() {
        const logs = JSON.parse(localStorage.getItem("activityLog")) || [];
        activityLog.innerHTML = logs.map(log => `<p>${log}</p>`).join("");
    }
})
    

//date set//
const today = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: '2-digit', 
            year: 'numeric' 
        });

        const formattedDate = formatter.format(today).replace(',', '');

        // Update the h1 element with formatted date
        document.getElementById("new-date").innerHTML = formattedDate.replace(' ', ',<br>');



