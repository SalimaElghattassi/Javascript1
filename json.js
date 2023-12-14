//Question 2//
function valider(console,quantite){
    if(console.value!="Selectionner une console"&& Number(quantite.value)>0 && Number(quantite.value)<=20)
    return true;
    return false;
    }
    //Question 3//
    var donnees={"consoles":[
        {"ref":"Switch Oled","prix":4500,"manettes":2,"image":
     "image/img1.jpeg"},
        {"ref":"Playstation console PS5","prix":8500,"manettes":1,"image":
     "image/img2.jpeg"},
        {"ref":"Xbox Series 512G","prix":4600,"manettes":2,"image":
     "image/img3.jpeg"},
        {"ref":"Playstation PS4 1T0 PRO","prix":5300,"manettes":1,"image":
     "image/img4.jpeg"}
    ]
    }
    function remplirConsole(dropDownList){
        var option1=document.createElement("option");
        option1.value="Selectionner une console";
        option1.textContent="Selectionner une console";
        dropDownList.appendChild(option1);
        donnees.consoles.forEach(function(consol){
            {
                var newoption=document.createElement("option");
                newoption.value=consol.ref;
                newoption.textContent=consol.ref;
                dropDownList.appendChild(newoption);
            }
        })
    }
    remplirConsole(document.getElementById("consoles"));
  
    
    
    //Question 4
    const cs=document.getElementById("consoles");
       const panier=document.getElementById("Panier");
       const q=document.getElementById("quantite");
       const addToCart=document.getElementById("addToCart");
        const prixHT=document.getElementById("prixHT");
       const prixTTC=document.getElementById("prixTTC");
       function addConsoleToCart(console,table){
         if(valider(cs,q)){
              donnees.consoles.forEach(function(c){
             if(c.ref==cs.options[cs.selectedIndex].text){
             
                 const newRow=panier.insertRow(-1);
               const ref=newRow.insertCell(0);
               const quantite=newRow.insertCell(1);
               const prix=newRow.insertCell(2);

                const image=newRow.insertCell(3);
                 const supprimer=newRow.insertCell(4);
                 
                 ref.textContent=c.ref;
                 quantite.textContent=q.value;
                 prix.textContent=c.prix;
                 image.innerHTML='<img src='+c.image+' style="width:60px">';
                 supprimer.innerHTML=`<input type=button value=supprimer onclick=deleteConsoleFromCart(this) />` 
                 
                   panier.appendChild(newRow);
               
             
             }
          });
                  prixHT.textContent= calculerPrixHT();
         prixTTC.textContent=calculerPrixTTC();
         
       console.log(jsonSerializer());
         }
         else{
         
             alert("Valider Tous les champs SVP");
         }
       
       }
      addToCart.addEventListener('click',function(){
      addConsoleToCart(cs,panier);
      });
    
      
    
    //Question 5
    function deleteConsoleFromCart(button){
    const row=button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    prixHT.textContent= calculerPrixHT();
    prixTTC.textContent=calculerPrixTTC();
    }
    
    //Question 6
    function calculerPrixHT(){
    let prixHT=0;
    for(let i=1;i<panier.rows.length;i++){
    prixHT+=Number(panier.rows[i].cells[1].textContent)*Number(panier.rows[i].cells[2].textContent);
    }
    return Number(prixHT-(prixHT*0.1));
    }
    
    
    //QUESTION 7
    function calculerPrixTTC(){
    return calculerPrixHT()*1.2;
    }
    /*
    //Question8
    function jsonSerializer(){
    const myArray=new Array();
    for(let i=1;i<panier.rows.length;i++){
    const obj={};
    obj.code=panier.rows[i].cells[0].textContent;
    obj.qte=panier.rows[i].cells[2].textContent;
    myArray.push(obj);
    }
    return JSON.stringify(myArray);
    }
    */
  