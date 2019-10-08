$('#formSubmit').on('click', function(){

    function surveyConfirm(){
        var formValidation = true;
        $('.form-control').each(function(){
            if($(this).val().trim() == ''){
                formValidation = false;
            }
        });
        return formValidation;
    }


    if(surveyConfirm()){
        var surveyInformation = {
            name: $('#userName').val().trim(),
            photo: $('#photoLink').val().trim()
        }
    }
    
})