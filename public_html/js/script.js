$(document).ready(function (){
  $('#contact').validate({
    debug: true,
    errorClass: 'alert alert-danger',
    ErrorLabelContainer: '#output-area',
    errorElement: 'div',
    // to define what good and bad inputs
    // each rule is going to start with the form input element's name attribute
    rules: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      emailInfo: {
        required: true
      },
      comments: {
        required: true,
        maxlength: 2000
      }
    },
    messages: {
      firstName: {
        required: 'Name is required'
      },
      emailInfo: {
        emailInfo: 'Please provide a valid email.',
        required: 'Email is required'
      },
    comments: {
      required: 'A message is required',
      maxlength: 'Message must be 2000 characters or less.'
     }
    },
    submitHandler: (form) => {
      $('#contact').ajaxSubmit({
        type: 'POST',
        url: $('contact').attr('action'),
        success: (ajaxOutput) => {
          $('#output-area').css('display','')
          $('#output-area').html(ajaxOutput)

          if ($('.alert-success') >= 1){
            $('contact')[0].reset()
          }
        }
      })
    }

  })
})