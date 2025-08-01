function myFunction() {
    const demo = document.getElementById("demo");

    document.getElementById("result").innerHTML =
        demo.firstChild.nodeValue;

    document.getElementById("result1").innerHTML =
        demo.childNodes[0].nodeValue;
}
