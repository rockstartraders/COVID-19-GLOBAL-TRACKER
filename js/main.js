





function selek() {



    var balyu = document.getElementById("format").value;

    fetch('https://corona-api.com/countries/' + balyu)
        .then(response => response.json())
        .then(data => {

        
            
         var object = JSON.stringify(data); // string first 
         var par = JSON.parse(object);  // convert back to object 

         var a = par.data.name;   //name of the country
         var b = document.getElementById("name");  
         

         b.innerHTML = ('Country Name : ' + a);  // result sa name


         var a1 = par.data.updated_at;   //deyt
         var newdayt = moment(a1).format('lll');;
         var b1 = document.getElementById("date");           

         b1.innerHTML = ('Recorded date as of : ' + newdayt);  // result sa date



         var a2 = par.data.latest_data.confirmed;   //confirmed 
         var b2 = document.getElementById("confirm");           

         b2.innerHTML = ('Total no. of confirmed cases :  ' + a2);  // result sa confirmed



         var a3 = par.data.latest_data.recovered;   // recovered
         var aa3 = JSON.stringify(a3);   // convert tostring fiorst 
         var aaa3 = aa3.fontcolor('#27fa00');  // color
                         

         var b3 = document.getElementById("recovered");    

         b3.innerHTML = ('Total no. of recovered cases :  ' + aaa3);  // result sa recovered



         var ad = par.data.latest_data.deaths;   // d
         var ad1 = JSON.stringify(ad);   // convert tostring first 
         var add1 = ad1.fontcolor('#D50000');  // color
                         

         var b4 = document.getElementById("d");    

         b4.innerHTML = ('Total no. of deaths :  ' + add1);  // result sa d


         //todays data

         var b5 = document.getElementById("stat");   
         b5.innerHTML = ('Todays data :');  // stat text


         // data 

         var zz = par.data.today.confirmed;   // d
         var zz1 = JSON.stringify(zz);   // convert tostring first 
         var azz1 = zz1.fontcolor('#27fa00');  // color
                         

         var b6 = document.getElementById("tconf");    

         b6.innerHTML = ('No. of confirmed cases:  ' + azz1);  // result sa d




         var xx = par.data.today.deaths;   // d
         var xx1 = JSON.stringify(xx);   // convert tostring first 
         var axx1 = xx1.fontcolor('#D50000');  // color
                         

         var b7 = document.getElementById("td");    

         b7.innerHTML = ('No. of confirmed deaths:  ' + axx1);  // result sa d
         


            

         


      

        }
    

        )
}
