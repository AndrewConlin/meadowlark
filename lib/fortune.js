var fortunes = ["Conquer your fears or they will conquer you.",
                "riveres eed springs.",
                "Do not fear what you don't know.",
                "You will have a pleasant surprise.",
                "Whenever possible, keep it simple."
              ];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};
