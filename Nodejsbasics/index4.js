var taskArray = [{
        TaskName: "A",
        Deadline: "today"
    },
    {
        TaskName: "B",
        Deadline: "yesterday"
    },
    {
        TaskName: "C",
        Deadline: "tomorrow"
    },
    {
        TaskName: "D",
        Deadline: "today"
    },
    {
        TaskName: "E",
        Deadline: "today"
    },
    {
        TaskName: "F",
        Deadline: "tomorrow"
    }
];

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') {
        res.writeHead(404);
    }
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    var a = url.parse(req.url, true).query;
    var q = a.deadline;
    if (q === undefined) {
        res.write(JSON.stringify(taskArray));
        res.end()
    }
    res.writeHead(500);
    res.end();
}).listen(8080);