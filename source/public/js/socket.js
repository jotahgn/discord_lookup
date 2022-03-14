var socket = io();

var form = document.getElementById('form-discord');
var _dcID = document.getElementById('dc-search');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (_dcID.value) {
        socket.emit('discord', { id: _dcID.value });
    }else {
        console.log('error :(')
    }
});