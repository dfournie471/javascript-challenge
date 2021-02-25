// from data.js
var tableData = data;


// YOUR CODE HERE!


//create referemce to table body
var tbody=d3.select("tbody");
//loop through each element of data and add a tr for each element
tableData.forEach((alienReport) => {
    var row =tbody.append("tr");
    //select the key value pairs in each element
    Object.entries(alienReport).forEach(([key,value]) => {
        //add td for each key value pair
        var cell = row.append("td");
        //fill cell with dict value
        cell.text(value);
    });

});

//reference classes for listener events
var button =d3.select("#filter-btn");
// var form =d3.select("form");
var resetButton=d3.select("#reset-btn");


//create listener events
// form.on("submit", runEnter);
button.on("click", runEnter);
resetButton.on("click", runReset);




//create runEnter fuction that will run after event is executed
function runEnter(){
    //prevent page from refreshing
    d3.event.preventDefault();
    //create variables that select id of forms
    var inputElementDate= d3.select("#datetime");
    var inputElementCity=d3.select("#city");
    var inputElementState=d3.select("#state");
    var inputElementCountry=d3.select("#country");
    var inputElementShape=d3.select("#shape");
    

    //create variables that get the values entered into forms
    // lowercase relevant forms
    var inputValueDate=inputElementDate.property("value");
    var inputValueCity= inputElementCity.property("value").toLowerCase();
    var inputValueState= inputElementState.property("value").toLowerCase();
    var inputValueCountry= inputElementCountry.property("value").toLowerCase();
    var inputValueShape= inputElementShape.property("value").toLowerCase();


    //create if statements to check if forms are empty.
    if ( inputValueDate !=""){
    tableData= tableData.filter(report => report.datetime === inputValueDate);
    if (inputValueCity !=""){
        tableData=tableData.filter(report => report.city === inputValueCity);
       }
    if(inputElementState !=""){
        tabledata=tableData.filter(report => report.state=== inputValueState );

    }
    if (inputValueCountry != ""){
        tableData=tableData.filter(report => report.country === inputValueCountry);
    }
    if (inputValueShape != ""){
        tableData=tableData.filter(report => report.shape === inputValueShape);
    }
       tbody.html("");
    tableData.forEach((filteredReport) =>{
        var row=tbody.append("tr");
        Object.entries(filteredReport).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);

        });
    });
    
    
    // repeat for each form
    } else if(inputValueCity !=""){
        tableData=tableData.filter(report => report.city === inputValueCity);
        
        if(inputElementState !=""){
                tabledata=tableData.filter(report => report.state=== inputValueState );
        
            }
        if (inputValueCountry != ""){
                tableData=tableData.filter(report => report.country === inputValueCountry);
            }
        if (inputValueShape != ""){
                tableData=tableData.filter(report => report.shape === inputValueShape);
            }
       
       tbody.html("");
    tableData.forEach((filteredReport) =>{
        var row=tbody.append("tr");
        Object.entries(filteredReport).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);

        });
    });
    
   
    } else if(inputValueState !=""){
        tableData=tableData.filter(report => report.state === inputValueState);
        if (inputValueCountry != ""){
                tableData=tableData.filter(report => report.country === inputValueCountry);
            }
        if (inputValueShape != ""){
                tableData=tableData.filter(report => report.shape === inputValueShape);
            }
       
       tbody.html("");
    tableData.forEach((filteredReport) =>{
        var row=tbody.append("tr");
        Object.entries(filteredReport).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);

        });
    });
    
   
    } else if(inputValueCountry !=""){
        tableData=tableData.filter(report => report.country === inputValueCountry);
        if (inputValueShape != ""){
                tableData=tableData.filter(report => report.shape === inputValueShape);
            }
       
       tbody.html("");
    tableData.forEach((filteredReport) =>{
        var row=tbody.append("tr");
        Object.entries(filteredReport).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);

        });
    });
    
   
    } else if(inputValueShape !=""){
        tableData=tableData.filter(report => report.shape === inputValueShape);
        
        tbody.html("");
    tableData.forEach((filteredReport) =>{
        var row=tbody.append("tr");
        Object.entries(filteredReport).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);

        });
    });
    
   
    }
return;

}
//create function that resets table
function runReset(){
    location.reload(true);
}

