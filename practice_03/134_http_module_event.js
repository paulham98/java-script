const http = require('http');

const server = http.createServer();

server.on('request', () => {
    console.log('Request');
});

server.on('connection', () => {
    console.log('Connection');
});

server.listen(50000, () => {
    console.log('서버가 작동 중입니다, http://127.0.0.1:50000');
});

const testClose = function () {
    server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
};

setTimeout(testClose, 10000);