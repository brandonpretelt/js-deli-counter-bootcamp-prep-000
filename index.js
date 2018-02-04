var katzDeliLine = []; 

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name); 
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
} 

function nowServing(serving) {
    if (serving.length === 0) {
        return 'There is nobody waiting to be served!';
    } else {
       return 'Currently serving ' + serving.shift() + ".";
    }
}

function currentLine(line) {
    var i = 0; 
    if (line.length === 0) {
        return "The line is currently empty."
    } else {
        for (i; i < line.length; i++) {
            return "The line is currently: " + i + ". " + line[i];
        }
    }
}