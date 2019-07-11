var info;
var info2;
var info3;

function displaychart(dateinput)
{
    google.charts.load('43', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var text;
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) 
         {
             text = JSON.parse(req.responseText);
             drawChart(text);
         }
    }

     req.open("GET", "https://api.jsonbin.io/b/5d26e966f0c0927b3eb4c8f3", true);
     req.setRequestHeader("secret-key","$2a$10$1ctkNrItxvgZLpXGWT936uQt376TVgRrfv1lpu0/mdgDfHQhN3pa2");
     req.send();

    function drawChart(text) {
//          var speciesdata = new google.visualization.DataTable();
//          speciesdata.addColumn('number', 'X');
//          speciesdata.addColumn('number', 'Sales');
//        
//        info2 = {
//            "leatherback turtle": 0,
//            "salmon": 0,
//            "coral": 0,
//            "sea lion": 0,
//            "giant clam": 0,
//            "seahorse": 0,
//            "gray whale": 0
//        };
        
        var weekdata = new google.visualization.DataTable();
          weekdata.addColumn('string', 'Month');
          weekdata.addColumn('number', 'Sales');
        
        info3 = {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0
        }
        
       var linedata = new google.visualization.DataTable();
          linedata.addColumn('number', 'X');
          linedata.addColumn('number', 'Sales');
        
        let datee;
        
        info = {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0,
            "14": 0,
            "15": 0,
            "16": 0,
            "17": 0,
            "18": 0,
            "19": 0,
            "20": 0,
            "21": 0,
            "22": 0,
            "23": 0
        };
        
        for(var key in text.sales)
        {    
          datee = new Date(text.sales[key].datetime);
            
            var datecheck = new Date(dateinput);
            
          if(datee.getMonth() == datecheck.getMonth() && datee.getDate() == datecheck.getDate() && datee.getFullYear() == datecheck.getFullYear())
          {
              info[datee.getHours()]++;
              
//              info2[text.sales[key].species]++;
          }
            
            info3[datee.getDay()]++;
        }
        
      for(var ctr = 0; ctr < 24; ctr++){
          linedata.addRows([
            [ctr, info[ctr]],
          ]);
      }
        
        for(var ctr3 = 0; ctr3 < 7; ctr3++){
            var dayString;
            
            if(ctr3 == 0)
                dayString = "Sunday"
            else if(ctr3 == 1)
                dayString = "Monday"
            else if(ctr3 == 2)
                dayString = "Tuesday"
            else if(ctr3 == 3)
                dayString = "Wednesday"
            else if(ctr3 == 4)
                dayString = "Thursday"
            else if(ctr3 == 5)
                dayString = "Friday"
            else if(ctr3 == 6)
                dayString = "Saturday"
                
            
          weekdata.addRows([
            [dayString, info3[ctr3]],
          ]);
      }
        
//        for(var ctr2 = 0; ctr2 < 24; ctr2++){
//          speciesdata.addRows([
//            [ctr2, info2[ctr2]],
//          ]);
//      }
          
       var piedata = google.visualization.arrayToDataTable([
          ['Species', 'Species Sales'],
          ['Leatherback Turtle', text.species_sales["leatherback turtle"]],
          ['Salmon', text.species_sales["salmon"]],
          ['Seahorse', text.species_sales["seahorse"]],
          ['Coral', text.species_sales["coral"]],
          ['Giant Clam', text.species_sales["giant clam"]], 
          ['Gray Whale', text.species_sales["gray whale"]], 
          ['Sea Lion', text.species_sales["sea lion"]] 
      ]); 
        
      var bardata = google.visualization.arrayToDataTable([
          ['Burger', 'Burger Sales'],
          ['Krusty Combo', JSON.parse(text.burger_sales["Krusty Combo"])],
          ['Krusty Deluxe', text.burger_sales["Krusty Deluxe"]],
          ['Krabby Pattie', text.burger_sales["Krabby Pattie"]]
      ]);
      
      var columndata = google.visualization.arrayToDataTable([
          ['Burger By Species', 'Krusty Combo'],
          ['Leatherback Turtle', text.burger_by_species["Krusty Combo"]["leatherback turtle"]],
          ['Salmon', text.burger_by_species["Krusty Combo"]["salmon"]],
          ['Seahorse', text.burger_by_species["Krusty Combo"]["seahorse"]],
          ['Coral', text.burger_by_species["Krusty Combo"]["coral"]],
          ['Giant Clam', text.burger_by_species["Krusty Combo"]["giant clam"]], 
          ['Gray Whale', text.burger_by_species["Krusty Combo"]["gray whale"]], 
          ['Sea Lion', text.burger_by_species["Krusty Combo"]["sea lion"]] 
      ]);
    
      var column1data = google.visualization.arrayToDataTable([
          ['Burger By Species', 'Krusty Deluxe'],
          ['Leatherback Turtle', text.burger_by_species["Krusty Deluxe"]["leatherback turtle"]],
          ['Salmon', text.burger_by_species["Krusty Deluxe"]["salmon"]],
          ['Seahorse', text.burger_by_species["Krusty Deluxe"]["seahorse"]],
          ['Coral', text.burger_by_species["Krusty Deluxe"]["coral"]],
          ['Giant Clam', text.burger_by_species["Krusty Deluxe"]["giant clam"]], 
          ['Gray Whale', text.burger_by_species["Krusty Deluxe"]["gray whale"]], 
          ['Sea Lion', text.burger_by_species["Krusty Deluxe"]["sea lion"]] 
      ]);
        
      var column2data = google.visualization.arrayToDataTable([
          ['Burger By Species', 'Krabby Pattie'],
          ['Leatherback Turtle', text.burger_by_species["Krabby Pattie"]["leatherback turtle"]],
          ['Salmon', text.burger_by_species["Krabby Pattie"]["salmon"]],
          ['Seahorse', text.burger_by_species["Krabby Pattie"]["seahorse"]],
          ['Coral', text.burger_by_species["Krabby Pattie"]["coral"]],
          ['Giant Clam', text.burger_by_species["Krabby Pattie"]["giant clam"]], 
          ['Gray Whale', text.burger_by_species["Krabby Pattie"]["gray whale"]], 
          ['Sea Lion', text.burger_by_species["Krabby Pattie"]["sea lion"]] 
      ]);      
        
        
      var pieoptions = {'title':'Species Sales', 'width':900, 'height':400};
      var baroptions = {'title':'Burger Sales', 'width':900, 'height':400};
      var columnoptions = {'title':'Krusty Combo Sales', 'width':900, 'height':400};
      var column1options = {'title':'Krusty Deluxe Sales', 'width':900, 'height':400};
      var column2options = {'title':'Krabby Pattie Sales', 'width':900, 'height':400};
      var lineoptions = {
          hAxis: {
              title: 'Hours per Day'
          },
          vAxis: {
              title: 'Sales'
          },
          
           width: 900, height: 400
      };  
        
        var weekoptions = {
          hAxis: {
              title: 'Day of the Week'
          },
          vAxis: {
              title: 'All Time Sales'
          },
          
           width: 900, height: 400
      }; 
        
//      var speciesoptions = {
//          hAxis: {
//              title: 'hours per day'
//          },
//          vAxis: {
//              title: 'Sales'
//          }
//      };    
        
      var piechart = new google.visualization.BarChart(document.getElementById('piechart'));
      var barchart = new google.visualization.BarChart(document.getElementById('barchart'));
      var columnchart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
      var column1chart = new google.visualization.ColumnChart(document.getElementById('column1chart'));
      var column2chart = new google.visualization.ColumnChart(document.getElementById('column2chart')); 
      var linechart = new google.visualization.LineChart(document.getElementById('linechart')); 
      var weekchart = new google.visualization.LineChart(document.getElementById('weekchart')); 
        
//      var specieschart = new google.visualization.LineChart(document.getElementById('speciessales')); 
          
        
      piechart.draw(piedata, pieoptions);
      barchart.draw(bardata, baroptions);
      columnchart.draw(columndata, columnoptions);
      column1chart.draw(column1data, column1options);
      column2chart.draw(column2data, column2options);
      linechart.draw(linedata, lineoptions);
      weekchart.draw(weekdata, weekoptions);
//      specieschart.draw(speciesdata, speciesoptions);
    }
}