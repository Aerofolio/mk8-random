//################## Characters Stuff ##################
let characters = [
    {
        imagePath: 'images/characters/mario_icon.png',
        name: 'Mario',
        id: 1,
        selectable: true
    },
    {
        imagePath: 'images/characters/luigi_icon.png',
        name: 'Luigi',
        id: 2,
        selectable: true
    },
    {
        imagePath: 'images/characters/peach_icon.png',
        name: 'Peach',
        id: 3,
        selectable: true
    },
    {
        imagePath: 'images/characters/daisy_icon.png',
        name: 'Daisy',
        id: 4,
        selectable: true
    },
    {
        imagePath: 'images/characters/rosalina_icon.png',
        name: 'Rosalina',
        id: 5,
        selectable: true
    },
    {
        imagePath: 'images/characters/tanookiMario_icon.png',
        name: 'Tanooki Mario',
        id: 6,
        selectable: true
    },
    {
        imagePath: 'images/characters/catPeach_icon.png',
        name: 'Cat Peach',
        id: 7,
        selectable: true
    },
    {
        imagePath: 'images/characters/birdo_icon.png',
        name: 'Birdo',
        id: 8,
        selectable: true
    },
    {
        imagePath: 'images/characters/yoshi_icon.png',
        name: 'Yoshi',
        id: 9,
        selectable: true
    },
    {
        imagePath: 'images/characters/toad_icon.png',
        name: 'Toad',
        id: 10,
        selectable: true
    },
    {
        imagePath: 'images/characters/koopaTroopa_icon.png',
        name: 'Koopa Troopa',
        id: 11,
        selectable: true
    },
    {
        imagePath: 'images/characters/shyGuy_icon.png',
        name: 'Shy Guy',
        id: 12,
        selectable: true
    },
    {
        imagePath: 'images/characters/lakitu_icon.png',
        name: 'Lakitu',
        id: 13,
        selectable: true
    },
    {
        imagePath: 'images/characters/toadette_icon.png',
        name: 'Toadette',
        id: 14,
        selectable: true
    },
    {
        imagePath: 'images/characters/kingBoo_icon.png',
        name: 'King Boo',
        id: 15,
        selectable: true
    },
    {
        imagePath: 'images/characters/babyMario_icon.webp',
        name: 'Baby Mario',
        id: 16,
        selectable: true
    },
    {
        imagePath: 'images/characters/babyLuigi_icon.png',
        name: 'Baby Luigi',
        id: 17,
        selectable: true
    },
    {
        imagePath: 'images/characters/babyPeach_icon.png',
        name: 'Baby Peach',
        id: 18,
        selectable: true
    },
    {
        imagePath: 'images/characters/babyDaisy_icon.png',
        name: 'Baby Daisy',
        id: 19,
        selectable: true
    },
    {
        imagePath: 'images/characters/babyRosalina_icon.png',
        name: 'Baby Rosalina',
        id: 20,
        selectable: true
    },
    {
        imagePath: 'images/characters/metalMario_icon.png',
        name: 'Metal Mario',
        id: 21,
        selectable: true
    },
    {
        imagePath: 'images/characters/pinkGoldPeach_icon.png',
        name: 'Pink Gold Peach',
        id: 22,
        selectable: true
    },
    {
        imagePath: 'images/characters/wario_icon.png',
        name: 'Wario',
        id: 23,
        selectable: true
    },
    {
        imagePath: 'images/characters/waluigi_icon.png',
        name: 'Waluigi',
        id: 24,
        selectable: true
    },
    {
        imagePath: 'images/characters/donkeyKong_icon.png',
        name: 'Donkey Kong',
        id: 25,
        selectable: true
    },
    {
        imagePath: 'images/characters/bowser_icon.png',
        name: 'Bowser',
        id: 26,
        selectable: true
    },
    {
        imagePath: 'images/characters/dryBones_icon.png',
        name: 'Dry Bones',
        id: 27,
        selectable: true
    }
]

selectCharacter = (characterId) => {
    let character = characters.find(x => x.id == characterId);
    character.selectable = !character.selectable;
    changeSelectableBorderColor(character);
}

//################## Util ##################
changeSelectableBorderColor = (element) => {
    let characterHTMLCell = document.getElementById(element.name + '-' + element.id);

    if(element.selectable)
        characterHTMLCell.classList.replace('unselectableCell', 'selectableCell');
    else
        characterHTMLCell.classList.replace('selectableCell', 'unselectableCell');
}

//################## Start ##################
//Characters Table
let charactersTableInnerHTML = '';
let column = 0;
let characterIndex = 0;

while(characterIndex < characters.length){
    if(column == 0) charactersTableInnerHTML += '<tr>';

    charactersTableInnerHTML += '<td id="' + characters[characterIndex].name + '-' + characters[characterIndex].id + '" class="selectableCell" onclick="selectCharacter(' + characters[characterIndex].id + ')">';
    charactersTableInnerHTML += '<span>' + characters[characterIndex].name + '</span>';
    charactersTableInnerHTML += '<br>';
    charactersTableInnerHTML += '<img class="charactersIcon" src="' + characters[characterIndex].imagePath + '">';
    charactersTableInnerHTML += '</td>';

    characterIndex++;
    column++;
    if(column == 7){
        charactersTableInnerHTML += '</tr>';
        column = 0;
    }
}

document.getElementById('charactersTable').innerHTML = charactersTableInnerHTML;