// Setting all the lines

function setUp() {
    let top_line = document.getElementById('top-line');
    let line_1 = document.getElementById('line-1');
    let line_2 = document.getElementById('line-2');
    let line_3 = document.getElementById('line-3');
    let line_4 = document.getElementById('line-4');
    
    let lines = [top_line, line_1, line_2, line_3, line_4];
    
    top_line.innerText = "Check";
    
    document.getElementById('line-1').innerText = "Check";
    
    // Check by commenting
    
    console.log("Welcome!");
    
    // Empty all lines
    
    for (i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        lines[i].innerHTML = "";
    }
}
