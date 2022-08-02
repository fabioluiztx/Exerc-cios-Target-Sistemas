function reverterString(str) {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    console.log(novaString);
}

reverterString('Target'); //digitar a palavra que deseja reverter