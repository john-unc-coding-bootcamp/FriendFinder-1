var data = require('../data/friends');

module.exports = function(app) {

    app.get("/api/v1/friends", function(req, res) {
        res.json(data);
    });

    app.post("/api/v1/friends", function(req, res) {

        var person = req.body;
        var lowestScore;
        var bestMatch;

        // Calculate closest match
        for (var i=0; i<data.length; i++) {
            var score = 0;
            for(var j=0; j<person.scores.length; j++) {
                score += Math.abs(person.scores[j] - data[i].scores[j]);
            }
            if (score < lowestScore || lowestScore === undefined) {
                lowestScore = score;
                bestMatch = data[i];
            }
        }
        // Add new person
        data.push(req.body);

        // Return best match
        res.send(bestMatch);
    });

}
