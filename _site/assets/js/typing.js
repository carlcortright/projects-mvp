var typewriter1 = new Typewriter('.typer1', {
    cursorClassName: 'cursor1'
});

var typewriter2 = new Typewriter('.typer2', {
    cursorClassName: 'cursor2'
});

typewriter1.typeString('Software Development').start()

setTimeout(() => typewriter2.typeString('Made better with friends').start(), 3000);