// Setting all the lines

let punctum_HTML = "<div class=\"punctum\"></div>";

function setUp() {
    let top_line = document.getElementById('top-line');
    let line_1 = document.getElementById('line-1');
    let line_2 = document.getElementById('line-2');
    let line_3 = document.getElementById('line-3');
    let line_4 = document.getElementById('line-4');
    
    let lines = [top_line, line_1, line_2, line_3, line_4];
    
    // Put a random note somewhere
    
    let index = Math.floor(Math.random() * lines.length);

    lines[index].innerHTML = punctum_HTML;

    // Done
}
