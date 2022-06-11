//selectam nume, subiect, mesaj
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit",sendMsg);

//mailto:arad@codeschoolclubs.ro?subject=valoare&body=mesaj

const emailLink = "mailto:niculeasaraisa@gmail.com"

function sendMsg(event) {
    event.preventDefault();
    const url = emailLink + "?subject=" + subject.value + "&body=" + "Mesaj nou de la:" + name.value + " " + message.value
    console.log(url)
    window.location.href = url;
   
}