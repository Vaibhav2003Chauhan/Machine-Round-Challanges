let all_user = [];
var gifts = ["Sweets", "watches", "anar", "Chakri", "Laddo"]
var is_gift_assigned = false

function addUser() {
    let username = document.getElementById("username").value;
    if (username == null) {
        alert("Please enter the name ")
    }
    else {
        all_user.push(username)
        console.log("Function invoked")
        console.log("ALL USER ORIGINAL Array ", all_user)

    }

    let user_info = document.getElementsByClassName('mid_box')[0];

    if (!is_gift_assigned) {
        user_info.innerHTML += `<p id="user_info">${username} : No gifts are been assigned </p>
            <button onclick="del_user('${username}')" >Remove</button>`
    }
    else {
        console.log("function has been invoke of the Assign Gifts")
        assign_gifts()
    }
}
const shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assign_gifts() {
    is_gift_assigned = true;
    console.log("Assign gift invoke")
    // console.log("THE original array is ", gifts)
    // gifts = shuffle(gifts);
    // console.log("SHuffled array of Gifts ", gifts)
    // console.log("Assign Gifts!!!!!")
    let user_info = document.getElementsByClassName('mid_box')[0];
    user_info.innerHTML = " "
    for (let i = 0; i < all_user.length; i++) {
        user_info.innerHTML += `<p id="user_info">${all_user[i]} : ${gifts[i]}</p>
            <button onclick="del_user('${all_user[i]}')" >Remove</button>`
    }

}

function del_user(username) {
    console.log("This username is going to be deleted: ", username)
    let index = all_user.indexOf(username)
    console.log("The index of the username is as:", index)
    all_user.splice(index, 1)
    console.log(all_user + " The modifies all user array after deletion")
    let user_info = document.getElementsByClassName('mid_box')[0];
    user_info.innerHTML = " ";
    for (let i = 0; i < all_user.length; i++) {
        if (!is_gift_assigned) {
            user_info.innerHTML += `<p id="user_info">${all_user[i]} : No gifts are been assigned </p>
            <button onclick="del_user('${all_user[i]}')" >Remove</button>`
        }
        else {
            user_info.innerHTML += `<p id="user_info">${all_user[i]} : ${gifts[i]}</p>
            <button onclick="del_user('${all_user[i]}')" >Remove</button>`
        }
    }

}
function shuffle_gifts() {
    console.log("The Original array before the shuffling is as :", gifts);
    gifts = shuffle(gifts);
    console.log("The Modified array after the shuffling is as :", gifts);
    let user_info = document.getElementsByClassName('mid_box')[0];
    user_info.innerHTML = " ";
    for (let i = 0; i < all_user.length; i++) {
        if (!is_gift_assigned) {
            user_info.innerHTML += `<p id="user_info">${all_user[i]} : No gifts are been assigned </p>
            <button onclick="del_user('${all_user[i]}')" >Remove</button>`
        }
        else {
            user_info.innerHTML += `<p id="user_info">${all_user[i]} : ${gifts[i]}</p>
            <button onclick="del_user('${all_user[i]}')" >Remove</button>`
        }
    }

}