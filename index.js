function removeAll() {
    document.querySelectorAll('.rm').forEach(e => e.remove());
}
function myFunction() {
    var input = document.getElementById('fname')
    var div = document.getElementById('divID');
    div.innerHTML = div.innerHTML + input.value;
}