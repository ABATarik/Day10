function getUserName(email) {
    var username = '';

    var email = {

        "user1@mail.com": ["user1"],
        "user2@mail.com": ["user2"],
        "user3@mail.com": ["user3"],
        "user4@mail.com": ["user4"],
        "user5@mail.com": ["user5"],
        "user6@mail.com": ["user6"]


    }
    username=email[email];
    return email;
};
console.log(getUserName("user1@mail.com"));
module.exports = getUserName;