const musql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '패스워드',
    database: 'comicbook',
    port: '3306',
});

connection.connect();

connection.query('insert into books (genre, name, writer, releasedate) values' +
    '(\'fantasy\', \'LUMINE\', \'Emma Krogell\', \'2015-05-15\')
    , (\'comedy\, \'Mygiant Nerd Boyfriend\', \'fishball\', \'2017-03-03\')
    , (\'romance\', \'I Love Yoo\', \'Quimchee\', \'2016-08-21\')
    , (\'action\', \'Tower of God\', \'SIU\', \'2017-01-13\');'
, (error, results, fields) => {
        if (error) throw error;
        console.log(results);
});

    connection.end();