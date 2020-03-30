
function lowd() {


    const konvert = new Intl.NumberFormat('en');    
    const persent = new Intl.NumberFormat('en',{style:'percent'});

    fetch('https://thevirustracker.com/free-api?global=stats')
    .then(response => response.json())
    .then(data => {

        var object = JSON.stringify(data); // string first 
        var par = JSON.parse(object);  // convert back to object 



        // Total Case
        var ta = par.results[0].total_cases;
        var taa = konvert.format(ta);
        var bt = document.getElementById("name");  
         

        bt.innerHTML = ('Total no. of cases: ' + taa);  // result sa name
        console.log(ta);


        // Total Recovered
        var tb = par.results[0].total_recovered;
        var tbb = konvert.format(tb);
        var tbb1 = tbb.fontcolor('#27fa00');  // color
        var bk = document.getElementById("date");  
         

        bk.innerHTML = ('Total no. recovered: ' + tbb1);  


        // Total D
        var tc = par.results[0].total_deaths;
        var tcc = konvert.format(tc);
        var tcc1 = tcc.fontcolor('#f70d1a');  // color
        var bk1 = document.getElementById("confirm");  
            

        bk1.innerHTML = ('Total no. of deaths: ' + tcc1);  

        // Total Unresolved
        var td = par.results[0].total_unresolved;
        var tdd = konvert.format(td);
        var tdd1 = tdd.fontcolor('#FFEB3B');  // color
        var bk2 = document.getElementById("recovered");  
            

        bk2.innerHTML = ('Total no. of unresolved: ' + tdd1);  


        // Total Case for today
        var te = par.results[0].total_active_cases;
        var tee = konvert.format(te);
        var tee1 = tee.fontcolor('#e53935');  // color
        var bk3 = document.getElementById("stat");  
            

        bk3.innerHTML = ('Total no. of active cases: ' + tee1);  // result sa name
         


    }  

     
    )};



function selek() {



    var balyu = document.getElementById("format").value;

    // Constructor

    const konvert = new Intl.NumberFormat('en');    
    const persent = new Intl.NumberFormat('en',{style:'percent'});

    fetch('https://corona-api.com/countries/' + balyu)
        .then(response => response.json())
        .then(data => {

        
            
         var object = JSON.stringify(data); // string first 
         var par = JSON.parse(object);  // convert back to object 

         var a = par.data.name;   //name of the country
         var b = document.getElementById("name");  
         

         b.innerHTML = ('Country Name: ' + a);  // result sa name


         var a1 = par.data.updated_at;   //deyt
         var newdayt = moment(a1).format('lll');;
         var b1 = document.getElementById("date");           

         b1.innerHTML = ('Recorded date as of: ' + newdayt);  // result sa date



         var a2 = par.data.latest_data.confirmed;   //confirmed 
         var b2 = document.getElementById("confirm");           

         b2.innerHTML = ('Total no. of confirmed cases:  ' + konvert.format(a2));  // result sa confirmed



         var a3 = par.data.latest_data.recovered;   // recovered
         //var aa3 = JSON.stringify(a3);   // convert tostring fiorst 
         var aa3 = konvert.format(a3);
         var aaa3 = aa3.fontcolor('#27fa00');  // color
                         

         var b3 = document.getElementById("recovered");    

         b3.innerHTML = ('Total no. of recovered cases:  ' + aaa3); // result sa recovered



         var ad = par.data.latest_data.deaths;   // d
         var ad1 = konvert.format(ad);
         var add1 = ad1.fontcolor('#f70d1a');  // color
                         

         var b4 = document.getElementById("d");    

         b4.innerHTML = ('Total no. of deaths:  ' + add1); // result sa d


         //todays data

         var b5 = document.getElementById("stat");   
         b5.innerHTML = ('INCIDENT FOR TODAY');  // stat text


         // data 

         var zz = par.data.today.confirmed;   // d
         var zz1 = konvert.format(zz);
         var azz1 = zz1.fontcolor('#27fa00');  // color
                         

         var b6 = document.getElementById("tconf");    

         b6.innerHTML = ('No. of confirmed cases:  ' + azz1); // result sa d




         var xx = par.data.today.deaths;   // d
         var xx1 = konvert.format(xx);        
         var xxxy = xx1.fontcolor('#f70d1a');  // color
        
                         

         var b7 = document.getElementById("td");    

         b7.innerHTML = ('No. of confirmed deaths:  ' + xxxy );  // result sa d


         
         


            

         


      

        }
    

        )
}
