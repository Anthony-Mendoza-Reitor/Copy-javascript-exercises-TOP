const getTheTitles = function(books) {
    let aLength = books.length;
    const bucket = [];
    for (let i = 0; i < aLength; i++){
        bucket.push(books[i].title)
    } 
    return bucket;
};

// Do not edit below this line
module.exports = getTheTitles;
