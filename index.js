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
  
}