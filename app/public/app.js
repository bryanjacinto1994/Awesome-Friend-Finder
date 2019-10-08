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

        $.post(window.location.origin + '/api/friends', surveyInformation, function(res){
            $('#surveyMatches').text(res.name);
            $('#photoMatches').attr('src', res.photo);
            $('#exampleModal').modal('toggle');
        })
    }
    else{
        $('#alert').text("You Must Fill Everything Out Before Clicking Submitting Your Survey");
        $('#alert-modal').modal('toggle');
    }
    return false;
    
});