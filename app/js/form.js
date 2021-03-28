$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});




/*"use strict"

document.addEventListener('DOMContentLoaded', function (){
const form = document.getElementById('form');
form.addEventListener('submit', forSend);

async function formSend(e){
    e.preventDefault();
 let error = formValidate(form);
}

function formValidate(form){
    let error = 0
    let forReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++){
        const input = formReq[index];
            formRemoveError(input)


            if(input.classList.contains('_email')){
               if(emailTest(input)){
                   formAddError(input);
                   error++;
               }
            }else if(input.getAttribute("type")=== "checkbox"&& input.checked === false){
                formAddError(input);
                error++
            }else{
                if (input.value === '') {
                    formAddError(input);
                    error++; 
                }
            }


    }
}
function formAddError(input){
    input.parentElement. classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input){
    input.parentElement. classList.remove('_error');
    input.classList.remove('_error');
}


function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\. \w{2,8})+$/.test(input.value);
}

});*/
