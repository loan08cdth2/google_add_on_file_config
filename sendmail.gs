function sendEmail() {
  try {
    var emailAddress = "loan08cdth2@gmail.com"; // First column
    var message = getEmail() + " chưa được đăng kí"; // Second column
    var subject = 'Sending emails from a Spreadsheet';
    MailApp.sendEmail(emailAddress, subject, message);
  }
  catch(e){
    
  }
}
