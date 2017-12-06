function contact(){
	var contactInfo=document.getElementById('fullName').value;
	var contactEmail=document.getElementById('email').value;
     
       if(contactInfo=="" && contactEmail==""){
       	alert("Please fill the form");
       }


}
document.getElementById('send').addEventListener('click', contact, false);