
function lowd() {


    var balyu = document.getElementById("format").value;

    fetch('https://covid19.mathdro.id/api/countries/' + balyu) // rejects
      .then(function(response) {
        if (response.status !== 200) {


          // make the promise be rejected if we didn't get a 200 response


          //pang fetch ng Select Value

        var sagot = document.getElementById("format");
        var sagotuli= sagot.options[sagot.selectedIndex].text;
        var e = sagotuli.fontcolor('#FFC107');        
     


          aw = document.getElementById("date");  
          aw.innerHTML=(e +  '&nbsp ' + 'is not found via J.H.U database.');

          aww= document.getElementById("name");
          aww.innerHTML=('Possible that there is no recorded case yet');

          


          awe = document.getElementById("confirm");
          awe.innerHTML=('for this country.');


          awr = document.getElementById("recovered");
          awr.innerHTML=('');


          awt = document.getElementById("d");
          awt.innerHTML=('');

          awy = document.getElementById("stat");
          awy.innerHTML=('');


         throw new Error("Not 200 response")
        } else {
         

        var balyu = document.getElementById("format").value;

        // Constructor
    
        const konvert = new Intl.NumberFormat('en');    
        const persent = new Intl.NumberFormat('en',{style:'percent'});
    
       
    
        fetch('https://covid19.mathdro.id/api/countries/' + balyu)
            .then(response => response.json())
            .then(data => {
    
    
    
                 // paNG FETCH NG LAMAN NG SELECT BOX
    
                 var sagot = document.getElementById("format");
                 var sagotuli= sagot.options[sagot.selectedIndex].text;
                 var e = sagotuli.fontcolor('#f5f5f5');
                 var eee = document.getElementById("name");  
                 eee.innerHTML = ('Country Name:' +  '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + e);  // result sa name
     
     
    
              
                var a = data.lastUpdate;   //date  ito ok 
                var aa = moment(a).format('lll');
                var b = document.getElementById("date");  
                
       
                b.innerHTML = ('Last Updated: ' + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp '  + aa);  // result sa name
    
    
    
                var bb = data.confirmed.value;   //  para confirm
                var bb1 = konvert.format(bb);
                var bcolor = bb1.fontcolor('#42A5F5');  
                var bbb = document.getElementById("confirm");  
                
       
                bbb.innerHTML = ('Total no. of confirmed: ' +  '&nbsp &nbsp &nbsp &nbsp ' + bcolor);  // result sa name
    
    
    
                var cc = data.recovered.value;   //  para recovered
                var cc1 = konvert.format(cc);
                var ccolor = cc1.fontcolor('#27fa00');  
                var ccc = document.getElementById("recovered");  
                
       
                ccc.innerHTML = ('Total no. of recoveries: ' +  '&nbsp &nbsp &nbsp &nbsp &nbsp' + ccolor);  // result sa name
           
    
    
    
                var dd = data.deaths.value;   //  para d
                var dd1 = konvert.format(dd);
                var dcolor = dd1.fontcolor('#f70d1a');
                var ddd = document.getElementById("d");  
                
       
                ddd.innerHTML = ('Total no. of deaths: ' +  '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + dcolor);
           
                
                    
    
        }
        
    
        )
        }}).catch(function(err) {
       
  });
  
  }
  