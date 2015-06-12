
var NForm = Thtml.NForm;
$(document).ready(function () {
    var form = new NForm("/home/register", "POST", "MyForm", "MyForm", "MyFormCSS");
    // form.AddLabel("Enter your username", "lbl", "lbl", "class");
    // form.AddInput("username", "username", "form-control", "text");
    // form.AddLabel("Enter your passowrd", "lbl", "lbl", "class");
    // form.AddInput("password", "password", "form-control", "password");
    // form.AddInput("submit", "submitbutton", "btn btn-primary", "submit");
    // form.Render();
    form.CreateFormFromArray(["Enter your username",
        "username",
        "Enter your password",
        "password",
        "submit",
        "Register"]);
    form.Render();
    $("body").prepend($(form._obj));
});
//# sourceMappingURL=test.js.map