function getArray()
{
	var toDoList= new Array; //creating an array 
	var taskStr = localStorage.getItem('toDoList'); //get the task from input using localStorage
	if (taskStr !== null ) // if the value is NOT empty --null--
		{
		toDoList=JSON.parse(taskStr);
		}
	return toDoList;
	   // parse the date into the Array 
} 

function addTask()
{
	var task = document.getElementById("taskName").value; //create a variable to hold value of input 
	var array=getArray();   // create a variable to hold our Array 
	array.push(task); // pushing the task into the Array 
	localStorage.setItem(array, JSON.stringify(task)); // store the task localStoring saving to the Array
	show();
	return false;
}

function show()
{
    var array =getArray(); //create the variable to hold the Array
     var htmlFormat= "<ul>"; // Add unordered List
      for (var i=0; i < array.length; i++ ) // a For loop to display the array 
    	  {
    	  htmlFormat += "<li>" + array[i] +"</li>";
    	  }
 htmlFormat += "</ul>";
    document.getElementById(array).innerHTML = htmelFormat;	// show the document 
}

document.getElementById('add').addEventListener('click',addTask);
show();