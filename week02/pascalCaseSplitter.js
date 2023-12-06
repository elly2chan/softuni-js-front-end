function splitter(text) {
    text = text.split(/(?=[A-Z])/);
    console.log(text.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');