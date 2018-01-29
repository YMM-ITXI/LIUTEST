(function () {
    "use strict";
    document.addEventListener("deviceready", onDeviceReady.bind(this), false);
    function onDeviceReady() {
    	
        document.getElementById("btnSave").addEventListener("click", Save);
		
		document.getElementById("txtEmail").value = "MyEmail@hotmail.com";
		document.getElementById("txtName").value = "MyUser";
		document.getElementById("txtPassword").value = "MyPassword";
    };
	
	function Save(){
		
			var Email = document.getElementById("txtEmail").value;
			var Name = document.getElementById("txtName").value;
			var Password = document.getElementById("txtPassword").value;

            if(Email.length == 0)
				alert("Enter Email");
			else if (Name.length == 0)
                alert("Enter name");
			else if(Password.length <6 || Password.length>20)
				alert("Password length must be between 6 and 20 characters")
            else {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                        if (xmlhttp.responseText)
                            alert("Data was successfully saved");
						else
							alert("User already exist");
                };
                xmlhttp.open("POST", "https://ide.monaca.mobi/project/5a6f50dae78885b5318b4568?_ga=2.79991696.647975554.1517244310-1782001105.1517244310/www/components/Signup.php?Email=" + Email + "&Name=" + Name + "&Password=" + Password, true);
                xmlhttp.send();
            }
	}
})();