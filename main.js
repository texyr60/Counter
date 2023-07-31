let count = 0;

document.getElementById('msto').onclick = function() {
    count-=100
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('malo').onclick = function() {
    count-=1000
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('minus').onclick = function() {
    count -=1
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('reset').onclick = function() {
    count = 0
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('plus').onclick = function() {
    count +=1
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('duzo').onclick = function() {
    count+=1000
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('sto').onclick = function() {
    count+= 100
    document.getElementById('countLabel').innerHTML = count;
}
