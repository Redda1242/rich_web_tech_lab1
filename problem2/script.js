function addNote()
{
    const note = document.getElementById("note-input").value;
    const noteColor = document.getElementById("color-picker").value;
    const noteElement = createNote(note, noteColor)
    document.getElementById('notes-container').appendChild(noteElement);
    document.getElementById('note-input').value = '';
    
}

function createNote(noteText, noteColor)
{
    const noteElement = document.createElement("div");
    noteElement.style.backgroundColor = noteColor;

    const note = document.createElement('p');
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'X';
    note.textContent = noteText;

    deleteBtn.addEventListener('click', ()=> deleteNote(noteElement));
    noteElement.appendChild(deleteBtn);
    
    noteElement.appendChild(note);
    const editButton = document.createElement('span');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editNoteText(noteElement));
    noteElement.appendChild(editButton);
    
    return noteElement;

}

function deleteNote(noteElement)
{
    noteElement.remove();
}

function editNoteText(note)
{
    const newText = prompt('Edit the note:', note.querySelector('p').textContent);
    if (newText !== null && newText.trim() !== '') {
        note.querySelector('p').textContent = newText;
    }
}