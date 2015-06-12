# THtml
Typescript based object oriented html generator.

The Coding style example

	var form: NForm = new NForm("/home/register", "POST", "MyForm", "MyForm", "MyFormCSS");
	
	if you want to add elements one by one you can add like this
	
form.AddLabel("[Text]", "[name]", "[id]", "[class]");
form.AddInput("username", "username", "form-control", "text");
form.AddLabel("Enter your passowrd", "lbl", "lbl", "class");
form.AddInput("password", "password", "form-control", "password");
form.AddInput("submit", "submitbutton", "btn btn-primary", "submit");

and then Render the form

form.Render();
	
	or we can implement helper and helper can create form from array like [ displayText1,inputname1,... ]
	
	form.CreateFormFromArray(
		["Enter your username",
			"username",
			"Enter your password",
			"password",
			"submit",
			"Register"]);
	form.Render();

	$("body").prepend($(form._obj));
