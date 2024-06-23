const messageObject = {
    informativeMessages: [
        "Remember to back up your files regularly.",
        "The deadline for project submissions is next Friday.",
        "Please ensure you update your contact information in the HR system.",
        "Check the latest company policy updates on the intranet.",
        "Reminder: All hands meeting at 10 AM tomorrow."
    ],
    motivationalMessages: [
        "You're making great progress! Keep it up!",
        "Believe you can and you're halfway there.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Strive for progress, not perfection.",
        "Your hard work will pay off soon."
    ],
    announcementMessages: [
        "New office hours starting next month: 9 AM - 5 PM.",
        "Welcome our new team members: Sarah and James!",
        "Holiday closure notice: The office will be closed on July 4th.",
        "Upcoming team-building event: Mark your calendars for July 15th!",
        "IT system maintenance scheduled for this weekend. Expect brief disruptions."
    ]
};

console.log("Random Messages");
console.log("______________")

let finalMessage = [];


const generateRandomNumber = (num) => {
    return randomNumber = Math.floor(Math.random() * num);
}


for (let item in messageObject) {
    let position = generateRandomNumber(messageObject[item].length);

    if (item === "informativeMessages"){
        finalMessage.push(`Informative message: ${messageObject[item][position]}`);
    }else if(item === "motivationalMessages"){
        finalMessage.push(`Motivation is: ${messageObject[item][position]}`);
    }else{
        finalMessage.push(`Announcement is: ${messageObject[item][position]}`)
    }

}



console.log(finalMessage.join('\n'));