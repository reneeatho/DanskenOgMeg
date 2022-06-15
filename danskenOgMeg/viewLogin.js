
function updateViewLogin(){
    html = /*html*/
    `
    <div class="header"${Header()}</div>


<div class="Login-wrapper">
<input type="text" placeholder="Username"oninput=""/> 
<input type="text" placeholder="Password"oninput=""/>
<button onclick="">Login</button>
</div>
    
  
    ` 
    return html;
};



// Line 9 and 9 Requires oninputs
// Login require onclick => Login w/Username/PW => Welcome User === User: {user} [is Logged in.] => Login ~~ log out.