const result = document.getElementById('result');

function compute()
{
    let principal = document.getElementById("principal").value
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    let interest = principal * years * rate / 100;

    let year = new Date().getFullYear()+parseInt(years);

    document.getElementById('result').innerHTML = `
    <div>
        <p>If you deposit <span class="yellow-bg">${principal}</span>,</p>
        <p>at an interest rate of <span class="yellow-bg">${rate}</span>.</p>
        <p>You will recieve an amount of <span class="yellow-bg">${interest}</span>,</p>
        <p>in the year <span class="yellow-bg">${year}</span>.</p>
    </div>
    `

    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false
    }
    return true
}
        
function updateRate() 
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}