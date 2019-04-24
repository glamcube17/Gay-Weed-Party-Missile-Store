
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    console.log(document.cookie);
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log(c.substring(name.length, c.length));
            console.log('found');
            return c.substring(name.length, c.length);
        }
    }
    console.log('not found');
    return "";
}

function checkCookie() {
    var username = getCookie('username');
    if(username == ""){
        if(window.location.search.length > 1){
            let qa = window.location.search.substring(1).split(',');
            for(let i=0; i < qa.length; i++){
                if(qa[i].indexOf('user') != -1 && qa[i].split('=').length > 1){
                    username = qa[i].split('=')[1];
                    // setCookie('username',username,1);
                    document.cookie = 'username='+username;
                }
            }
        }
    }
    if (username != "") {
        // alert(username);
        document.getElementById("logboxdiv").innerHTML =
            `<div class='row'>
                <p>Welcome back, <b>${username}</b>!</p><br />
            </div>
            <div class='row' style='height:75%; position:relative;'>
                <span style='position:absolute; height:20%; bottom:0px; text-align:center'>
                    <a href="./cart.html" style='margin-left:0.5em; margin-right:0.5em;'>My Cart</a>
                    <a href="./orders.html" style='margin-left:0.5em; margin-right:0.5em;'>My Orders</a>
                    <a href="./preferences.html" style='margin-left:0.5em; margin-right:0.5em;'>Preferences</a>
                    <a href="./index.html" style='margin-left:0.5em; margin-right:0.5em;' onclick="document.cookie = 'username=';">Log out</a>
                </span>
            </div>`
        ;
        
    } else {
        // alert('not logged in');
        document.getElementById("logboxdiv").innerHTML =
            `<label style='width:20%; margin-right:2.5%; padding-top:5px;'>Username</label><input type="text"    style='width:75%;' id='unamebox'></input><br />
			<label style='width:20%; margin-right:2.5%; padding-top:5px;'>Password</label><input type="password" style='width:75%;' id='passwbox'></input><br />
			<div style='height:5%;'>&nbsp;</div>
			<div class='row'>
				<div class='col'>
					<span style='padding-left: 47.5%; text-align:center;'>
						<a href="./index.html" onclick="let uname = document.getElementById('unamebox').value; document.cookie = 'username='+uname; alert(uname); checkCookie(); ">Log in</a>
					</span>
				</div>
				<div class='col'>
					<span style='padding-right:2.5%; text-align:center;'>
						<a href="./signup.html">Register</a>
					</span>
				</div>
			</div>`
        ;
    }
}




