// Create a web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');
var _ = require('lodash');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/comments', function(req, res) {
    fs.readFile(commentsPath, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

app.post('/comments', function(req, res) {
    fs.readFile(commentsPath, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var comments = JSON.parse(data);
        var newComment = {
            id: Date.now(),