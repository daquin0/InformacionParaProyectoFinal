document.getElementById("Enviar").addEventListener("click",()=>{
    let latitud=document.getElementById("Latitud").value;
    let longitud=document.getElementById("Longitud").value;
    var miURL=`http://api.weatherstack.com/current?access_key=d485c07c5b6d6b113d5f411b46c26638&query=${latitud},${longitud}`;
    console.log(miURL);
    loadXMLDoc(miURL,function(response){
       let data=JSON.parse(response);
       console.log(data);
    })
});

function loadXMLDoc(myurl, cb) 
{
   // Fallback to Microsoft.XMLHTTP if XMLHttpRequest does not exist.
   let xhr = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
 
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            if (typeof cb === 'function') cb(xhr.responseText);
        }
    }
 
   xhr.open("GET", myurl, true);
   xhr.send();
 
}
