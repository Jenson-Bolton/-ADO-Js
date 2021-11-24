var gun = Gun(['http://localhost:8765/gun', 'https://gun-manhattan.herokuapp.com/gun'/*, 'https://ado-gun-relay.herokuapp.com/'*/]);

var user = gun.user();

var newtask = document.getElementById('newtask');
var todo = document.getElementById('to-do');

document.getElementById('register').addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value
    user.create(username, password, (ack) => {
        if (typeof ack.err !== 'undefined') {
            document.getElementById('err').innerHTML = ack.err;
        }
    });
    user.auth(username, password);
    sessionStorage.setItem('username', username);
});

document.getElementById('sign-in').addEventListener('click', (e) => {
    e.preventDefault();
    user.auth(document.getElementById('username').value, document.getElementById('password').value, (ack) => {
        if (typeof ack.err !== 'undefined') {
            document.getElementById('err').innerHTML = ack.err;
        }
    });
});

document.getElementById('resetpass').addEventListener('click', (e) => {
    e.preventDefault();
    user.auth(sessionStorage.getItem('username'),
        document.getElementById('currentpass').value,
        (ack) => {
            document.getElementById('reseterr').innerHTML = ack.err;
        },
        {
            change: document.getElementById('newpass').value
        }
    );
});

document.getElementById('newtask-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (!user.is) { return }
    user.get('tasks').set(newtask.value);
    newtask.value = "";
})

function UI(say, id){
    if (say === null) { return }
    var node = document.createElement('li');
    node.setAttribute("id", id);
    node.setAttribute("onclick", "deleteTask(this.id)");
    node.appendChild(document.createTextNode(say));
     
    todo.appendChild(node);
};

// https://stackoverflow.com/questions/49977624/get-clicked-elements-id-and-include-it-in-a-function-with-pure-js

function deleteTask(e) {
    user.get('tasks').get(e).put(null);
    todo.removeChild(document.getElementById(e));
}

gun.on('auth', function(){
    document.getElementById('entry-form').style.display = "none";
    document.getElementById('workspace').style.display = "block";
    user.get('tasks').map().once(UI);
});