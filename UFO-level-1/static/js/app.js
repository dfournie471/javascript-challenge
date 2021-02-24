// from data.js
var tableData = data;


// YOUR CODE HERE!


var tbody=d3.select("tbody");
tableData.forEach((alienReport) => {
    var row =tbody.append("tr");
    Object.entries(alienReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });

});

var button =d3.select("#filter-btn");
var form =d3.select("form");
var resetButton=d3.select("#reset-btn");
button.on("click", runEnter);
form.on("submit", runEnter);
resetButton.on("click", runReset);




function runEnter(){
    d3.event.preventDefault();
    var inputElementDate= d3.select("#datetime");
    var inputElementCity=d3.select("#city");
    var inputElementState=d3.select("#state");
    var inputElementCountry=d3.select("#country");
    var inputElementShape=d3.select("#shape");
    

    var inputValueDate=inputElementDate.property("value");
    var inputValueCity= inputElementCity.property("value");
    var inputValueState= inputElementState.property("value");
    var inputValueCountry= inputElementCountry.property("value");
    var inputValueShape= inputElementShape.property("value");


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
    
   
    } else if(inputValueCity !=""){
        tableData=tableData.filter(report => report.city === inputValueCity);
        if ( inputValueDate !=""){
            tableData= tableData.filter(report => report.datetime === inputValueDate);}
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
        if ( inputValueDate !=""){
            tableData= tableData.filter(report => report.datetime === inputValueDate);}
        if(inputElementCity !=""){
                tabledata=tableData.filter(report => report.city=== inputValueCity );
        
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
    
   
    } else if(inputValueCountry !=""){
        tableData=tableData.filter(report => report.country === inputValueCountry);
        if ( inputValueDate !=""){
            tableData= tableData.filter(report => report.datetime === inputValueDate);}
        if(inputElementState !=""){
                tabledata=tableData.filter(report => report.state=== inputValueState );
        
            }
        if (inputValueCity != ""){
                tableData=tableData.filter(report => report.city === inputValueCity);
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
    
   
    } else if(inputValueShape !=""){
        tableData=tableData.filter(report => report.shape === inputValueShape);
        if ( inputValueDate !=""){
            tableData= tableData.filter(report => report.datetime === inputValueDate);}
        if(inputElementState !=""){
                tabledata=tableData.filter(report => report.state=== inputValueState );
        
            }
        if (inputValueCountry != ""){
                tableData=tableData.filter(report => report.country === inputValueCountry);
            }
        if (inputValueCity != ""){
                tableData=tableData.filter(report => report.city === inputValueCity);
            }
       
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
function runReset(){
    
    location.reload(true);
    
    
}

