
$('#registrationtable').hide();
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;
document.getElementById("txtdate").value = today;
$('#txtdate').attr('min', today);

function register() {
    var textBox = document.getElementById("txtNineoneNumber");
    var textLength = textBox.value.length;
    var textphonenumber = document.getElementById("txtphoneNumber");
    var phonenum = textphonenumber.value.length;
    if (document.getElementById("txtGivenName").value.length <= 0) {
       
        document.getElementById("lblalert").innerHTML = " please enter first Name"

        $('#Alertmsg').show();
        $('#txtGivenName').focus();
        return false;
    }
    if (document.getElementById("txtLastName").value.length <= 0) {
        document.getElementById("lblalert").innerHTML = " please enter Last Name"
        $('#Alertmsg').show();
        $('#txtLastName').focus();
        return false;
    }
    if (document.getElementById("txtNineoneNumber").value.length <= 0) {
        document.getElementById("lblalert").innerHTML = " please enter 919# Number"
        $('#Alertmsg').show();
        $('#txtNineoneNumber').focus();
        return false;
    }
    if (textBox <= 9) {
     
        document.getElementById("lblalert").innerHTML = "Please enter 9 digit 919number"
        $('#txtNineoneNumber').focus();
        return false;

    }

    const datereg = $('#txtdate').val()
    if (datereg == "") {
        document.getElementById("lblalert").innerHTML = "Please enter date"
        $('#Alertmsg').show();
        return false;
    }
    if (document.getElementById("txtphoneNumber").value.length <= 0) {
        document.getElementById("lblalert").innerHTML = " please enter Phone Number"
        $('#Alertmsg').show();
        $('#txtphoneNumber').focus();
        return false;
    }
    if (document.getElementById("dropdown1").value <= 0) {
        document.getElementById("lblalert").innerHTML = " please select degree"
        $('#Alertmsg').show();
        $('#dropdown1').focus();
        return false;
    }
    if (phonenum < 10) {
     
        document.getElementById("lblalert").innerHTML = "Please enter 10 digit  phone number"
        $('#Alertmsg').show();
        $('#txtphoneNumber').focus();
        return false;

    }

    if (document.getElementById("txtEmail").value.length <= 0) {
        document.getElementById("lblalert").innerHTML = " please enter email"
        $('#Alertmsg').show();
        $('#txtEmail').focus();
        return false;
    }
    if (document.getElementById("txtareaaddress").value.length <= 0) {
        document.getElementById("lblalert").innerHTML = " please enter Address"
        $('#Alertmsg').show();
        $('#txtareaaddress').focus();
        return false;
    }


    document.getElementById("lblregistorgivenName").innerHTML = document.getElementById("txtGivenName").value
    document.getElementById("lblregistorlastName").innerHTML = document.getElementById("txtLastName").value

    document.getElementById("lblregistorGender").innerHTML = $('input[name="genderS"]:checked').val();
    document.getElementById("lblregistorphoneNumber").innerHTML = document.getElementById("txtphoneNumber").value
    document.getElementById("lblregistordate").innerHTML = $('#txtdate').val()
    var sel = document.getElementById("dropdown1");
    document.getElementById("lblregistordegree").innerHTML = sel.options[sel.selectedIndex].text
    var sel2 = document.getElementById("dropdown2");
    document.getElementById("lblregistorcourse").innerHTML = sel2.options[sel2.selectedIndex].text
    document.getElementById("lblregistorEmail").innerHTML = document.getElementById("txtEmail").value
    document.getElementById("lblregistorNine").innerHTML = document.getElementById("txtNineoneNumber").value
    document.getElementById("lblregistoraddress").innerHTML = document.getElementById("txtareaaddress").value

    Swal.fire({
        title: "<i>Course Registration</i>",
        html: "Successfully registered",
        confirmButtonText: "OK",
    });
    $('#registrationgird').hide();

    $('#registrationtable').show();



}

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        Swal.fire({
            title: "<i>Email</i>",
            html: "Invalid Email Address",
            confirmButtonText: "OK",
        });


        return false;
    }

    return true;

}


function popup() {
 
    var val = $('#dropdown1').val();
    document.getElementById("dropdown2").innerHTML = " ";
    $('#dropdown2').val();
    if ($('#dropdown1').val() == "1") {
      var options = ["Computer Science", "Applied Health Science", "Agricultural Education", "Finance", "History", "Graphic Design"];
    }
    if ($('#dropdown1').val() == "2") {
      var options = ["School of Business", "Computer Science", "Health Science", "School of Education", "Social Sciences", "Mathematics & Statistics"];
    }
    var select = document.getElementById("dropdown2");
     for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        select.appendChild(el);
    }
}


function clreg(){

   Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
            
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
            
            
          )
          location.reload();
        } 
       
      })
  


}

