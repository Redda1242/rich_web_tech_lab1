
let notes = [];

// add a note function
function addNote() {
    const noteText = document.getElementById('note-input').value;
    const noteColor = getRandomColor();
    const noteElement = createNoteElement(noteText, noteColor);
    notes.push({ text: noteText, color: noteColor });

    document.getElementById('notes-container').appendChild(noteElement);
    document.getElementById('note-input').value = '';
}

function getRandomColor() {
    var letters = '0123456789ABCDEFGH';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}


// Function to create a note element
function createNoteElement(text, color) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.style.backgroundColor = color;

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', () => deleteNote(note));

	const editButton = document.createElement('span');
    editButton.classList.add('edit-button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => editNoteText(note));
	
    const noteText = document.createElement('p');
    noteText.innerText = text;

    note.appendChild(deleteButton);
    note.appendChild(noteText);
	note.appendChild(editButton);

    return note;
}

function editNoteText(note) {
    const newText = prompt('Edit the note:', note.querySelector('p').innerText);
    if (newText !== null && newText.trim() !== '') {
        note.querySelector('p').innerText = newText;
        const noteIndex = Array.from(document.querySelectorAll('.note')).indexOf(note);
        if (noteIndex !== -1) {
            notes[noteIndex].text = newText;
        }
    }
}

// Function to delete a note
function deleteNote(note) {
    const noteIndex = Array.from(document.querySelectorAll('.note')).indexOf(note);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        note.remove();
    }
}

