!function(){var e=document.getElementById("user_name"),n=document.getElementById("user_email"),t=document.getElementById("user_message");document.getElementsByClassName("js-form")[0].addEventListener("submit",(function(o){o.preventDefault(),console.log("HeLLoW click");var a="\n     <b>Somebody was on your site and leave a comment </b> 😉\n      <br>\n      <br>\n      <b>Name: </b>".concat(e.value,"\n      <br>\n      <b>Email: </b>").concat(n.value,"\n      <br>\n      <b>Comment: </b>").concat(t.value,"\n      <br>\n    ");Email.send({SecureToken:"5d022fc2-bc33-4252-bae5-97f2ad695e11",To:"torisolt@gmail.com",From:"mmmdems.omp@gmail.com",Subject:'site "Viktoria Soltis-Doan" => from '+n.value,Body:a}).then((function(e){return alert(e)})),e.value="",n.value="",t.value=""}))}();
//# sourceMappingURL=contact.07550983.js.map
