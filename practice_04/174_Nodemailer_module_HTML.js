const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '지메일아이디@gmail.com',
        pass: '비밀번호'
    },
});

const mailOptions = {
    from: '지메일아이디@gmail.com',
    to: '지메일아이디@gmail.com',
    subject: 'Hello HTML',
    html: '<h1>Hello HTML</h1><p href="http://www.infopub.co.kr">' +
    '<img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg"/></p></a>',
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log(`Message sent: ${info.response}`);
    }
    transporter.close();
});