//Send a user happy birthday emails.
function sendEmail() {
  Logger.log("Quota: " + MailApp.getRemainingDailyQuota())
  
  
  var age = 15 //Age of the person you are sending to
  var base = 2 //Base to use
  var senderName = "Anonymous" //Sender Name
  var receiverEmail = "" //Email to send happy birthday messages to.
  
  
  var newAge = Number(age.toString(base)) //Convert age specified base
  for (var i=1;i<=newAge;i++) {
    //TODO: Use nth st, and rd when correct, instead of using th.
    MailApp.sendEmail(receiverEmail, "Happy Birthday " + i + "!!!", "Happy " + age + "th Birthday! \nIt shall be celebrated by sending you your age in base " + base + " emails (unless Google stops me early)!!!\nMessage " + i + " of " + newAge + "\n\n" + senderName)
    Logger.log(i + " emails sent")
  }
  Logger.log("Remaining Quota: " + MailApp.getRemainingDailyQuota())
}


//Getting around email quotas by sharing a document.
function emailer() {
  var address = "" //Email to send messages to.
  var emailCount = 50 //Number of emails to send
  
  var start = Date.now()
  var file = DriveApp.createFile("Happy Birthday!", "Happy Birthday!", "text/plain")
  Logger.log("Created File")
  Logger.log("Sending emails to " + address)
  for (var i=0;i<emailCount;i++) {
    file.addViewer(address)
    Logger.log((i+1) + " emails sent. " + ((Date.now() - start)/1000) + " seconds elapsed. ")
    file.removeViewer(address)
  }
  file.setTrashed(true)
  Logger.log("Deleted File")
}
