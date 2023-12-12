function editElement(reference, match, replacer) {
    let content = reference.textContent;
    editedText = content.replace(new RegExp(match, 'g'), replacer);
    reference.textContent = editedText;
}