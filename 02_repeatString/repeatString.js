const repeatString = function(string,num) {
    let joint = "";
    if (num > 0){
        let count = 0;
        while (count < num){
            joint = joint.concat(string);
            count++;
        }
    }
    return joint;
};

// Do not edit below this line
module.exports = repeatString;
