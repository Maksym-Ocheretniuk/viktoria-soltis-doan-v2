const e=document.getElementById("user_name"),n=document.getElementById("user_email"),o=document.getElementById("user_message");document.getElementsByClassName("js-form")[0].addEventListener("submit",(function(t){t.preventDefault(),console.log("HeLLoW click");let a=`\n     <b>Somebody was on your site and leave a comment </b> 😉\n      <br>\n      <br>\n      <b>Name: </b>${e.value}\n      <br>\n      <b>Email: </b>${n.value}\n      <br>\n      <b>Comment: </b>${o.value}\n      <br>\n    `;Email.send({SecureToken:"c13a1f3b-32ac-4c8f-9f5d-2568db68dd9e",To:"Viktoriabookart@gmail.com",From:"Viktoriabookart@gmail.com",Subject:'site "Viktoria Soltis-Doan" => from '+n.value,Body:a}).then((e=>alert(e))),e.value="",n.value="",o.value=""}));
//# sourceMappingURL=contact.1431af05.js.map