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
            photo: $('#photoLink').val().trim(),
            scores: [$("#one").val().trim(), $("#two").val().trim(), $("#three").val().trim(), $("#four").val().trim(), $("#five").val().trim(), $("#six").val().trim(), $("#seven").val().trim(), $("#eight").val().trim(), $("#nine").val().trim(), $("#ten").val().trim()]
        }
    };
    
})