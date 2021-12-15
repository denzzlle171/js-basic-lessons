const EmailList = ['Denzle', 'Zoya', 'Alex', 'Mike', 'Ket', 'Leo', 'Anna'];

function sendEmail(userName) {
  console.log('Gromcode party invitation was sent to ' + userName + '!');
}


function sendEmailList(userNames) {
 
for(let index=0; index < userNames.length; index+=1 ){
    const mail = userNames[index];
    sendEmail(mail)
}
}

sendEmailList(EmailList)

