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
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>This is your TaskList</h1>")
    var a = url.parse(req.url, true).query;
    var q = a.deadline;
    for (var i = 0; i < taskArray.length; i++) {
        if (q === taskArray[i].Deadline) {
            res.write(`
            <div>
            <h2>${taskArray[i].TaskName}</h2>
            <h2>${taskArray[i].Deadline}</h2>
            </div>
            `);
        }
    }
    res.end();
}).listen(8080);