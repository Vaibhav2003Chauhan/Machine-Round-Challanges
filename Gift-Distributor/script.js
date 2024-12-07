let all_user = [];
const gifts = ["Sweets", "watches", "anar", "Chakri", "Laddo"]
var is_gift_assigned = false

function addUser() {
    let username = document.getElementById("username").value;
    all_user.push(username)
    console.log("Function invoked")

    let show_user = document.getElementsByClassName('mid_box')[0];

    if (!is_gift_assigned) {
        show_user.innerHTML += `<p id="user_info">${username} : No gifts are been assigned </p>
            <button onclick="del_user()">Remove</button>`
    }
    else {
        console.log("function has been invoke of the Assign Gifts")
        assign_gifts()
    }
}

function assign_gifts() {
    is_gift_assigned = true
    console.log("Assign Gifts!!!!!")
}