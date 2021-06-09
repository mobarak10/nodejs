/* eslint-disable prettier/prettier */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title></title></head>');
        res.write(
            '<body><form method="post" action="process"><input type="text" name="message" /></form></body>',
            );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            console.log('Strimed Finished');
            const parseBody = Buffer.concat(body).toString();

            console.log(parseBody);
        });
        res.write('Thank you for submitting');
        res.end();
    } else {
        res.write('Not found!!!');
        res.end();
    }
});

server.listen(3000);

console.log('server listening in 3000 port');
