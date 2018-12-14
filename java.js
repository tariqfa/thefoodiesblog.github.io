<!DOCTYPE html>
<html>

function submitarequest()
{
    var submitarequest = document.contact us.html("SubmitaRequest");
    if (SubmitaRequestValidate(SubmitaRequestObj))
    {
        var Name = valueName(NameObj);
        if (NameObj.details.checked)
            displayDetails(NameObj, Name);
        else
            alert("Name:" + valueTo1DecimalPlace(Name));
    }
    
    {
        var Email = valueEmail(EmailObj);
        if (EmailObj.details.checked)
            displayDetails(EmailObj, Email);
        else
            alert("Email:" + valueTo1DecimalPlace(Email));
    }
}



</body>
</html>
