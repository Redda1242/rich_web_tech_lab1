function addNote()
{
    const note = document.getElementById("note-input").value;
    const noteColor = getRandomColor();
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
function getRandomColor() {
    const colors = ["#FFB6C1", "#FFC0CB", "#FF69B4", "#FFD1DC", "#FF1493", "#FF66CC", "#E0FFFF", "#89CFF0", "#008080", "#00FFFF","#40E0D0", "#87CEEB" ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
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