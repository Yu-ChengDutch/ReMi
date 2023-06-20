// Setting all the lines

let punctum_HTML = "<div id=\"punctum\"></div>";

let solfege_names = ["Do1", "Re1", "Mi1", "Fa1", "So1", "La1", "Ti1", "Do2"]

let solfege_positions = {
    "Do1": [4,0],
    "Re1": [3,2.5],
    "Mi1": [3,0],
    "Fa1": [2,2.5],
    "So1": [2,0],
    "La1": [1,2.5],
    "Ti1": [1,0],
    "Do2": [0,2.5],
};

let lines = [];

let displayed_note = "XX";

function setUp() {
    let top_line = document.getElementById('top-line');
    let line_1 = document.getElementById('line-1');
    let line_2 = document.getElementById('line-2');
    let line_3 = document.getElementById('line-3');
    let line_4 = document.getElementById('line-4');
    
    lines = [top_line, line_1, line_2, line_3, line_4];
    
    addNote();

}

function addNote(){

    // Clear notes

    for (i = 0; i < lines.length; i++) {
        lines[i].innerHTML = "";
    }

    // Put a random note somewhere
        
    let index = Math.floor(Math.random() * solfege_names.length);

    note = solfege_names[index];

    console.log("Chosen: " + note);

    lines[solfege_positions[note][0]].innerHTML = punctum_HTML;
    document.getElementById("punctum").style.setProperty('margin-top', solfege_positions[note][1] + "vw");

    // Return the name of the note

    displayed_note = note;

}

function checkNote(clicked_element) {

    entered_note = clicked_element.innerText

    console.log("Entered: " + entered_note);
    console.log("Displaying: " + displayed_note);

    if (displayed_note.includes(entered_note)) {

        console.log("Hoorah!");
        document.getElementById("punctum").style.setProperty('background-color', "green");

        setTimeout(addNote, 500);

    }
}
