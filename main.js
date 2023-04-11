//################## Characters Stuff ##################
const characters = [
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
    },
    {
        imagePath: 'images/characters/bowserJr_icon.png',
        name: 'Bowser Jr.',
        id: 28,
        selectable: true
    },
    {
        imagePath: 'images/characters/dryBowser_icon.png',
        name: 'Dry Bowser',
        id: 29,
        selectable: true
    },
    {
        imagePath: 'images/characters/lemmy_icon.png',
        name: 'Lemmy',
        id: 30,
        selectable: true
    },
    {
        imagePath: 'images/characters/larry_icon.png',
        name: 'Larry',
        id: 31,
        selectable: true
    },
    {
        imagePath: 'images/characters/wendy_icon.png',
        name: 'Wendy',
        id: 32,
        selectable: true
    },
    {
        imagePath: 'images/characters/ludwig_icon.png',
        name: 'Ludwig',
        id: 33,
        selectable: true
    },
    {
        imagePath: 'images/characters/iggy_icon.png',
        name: 'Iggy',
        id: 34,
        selectable: true
    },
    {
        imagePath: 'images/characters/roy_icon.png',
        name: 'Roy',
        id: 35,
        selectable: true
    },
    {
        imagePath: 'images/characters/morton_icon.webp',
        name: 'Morton',
        id: 36,
        selectable: true
    },
    {
        imagePath: 'images/characters/inklingGirl_icon.png',
        name: 'Inkling Girl',
        id: 37,
        selectable: true
    },
    {
        imagePath: 'images/characters/inklingBoy_icon.png',
        name: 'Inkling Boy',
        id: 38,
        selectable: true
    },
    {
        imagePath: 'images/characters/link_icon.png',
        name: 'Link',
        id: 39,
        selectable: true
    },
    {
        imagePath: 'images/characters/villagerMale_icon.png',
        name: 'Villager(Male)',
        id: 40,
        selectable: true
    },
    {
        imagePath: 'images/characters/villagerFemale_icon.png',
        name: 'Villager(Female)',
        id: 41,
        selectable: true
    },
    {
        imagePath: 'images/characters/isabelle_icon.png',
        name: 'Isabelle',
        id: 42,
        selectable: true
    },
    {
        imagePath: 'images/characters/mii_icon.png',
        name: 'Mii',
        id: 53,
        selectable: true
    }
]

selectCharacter = (characterId) => {
    let character = characters.find(x => x.id == characterId);
    character.selectable = !character.selectable;
    changeSelectableBorderColor(character);
}

createCharactersTable = () => {
    let charactersTableInnerHTML = '';
    let column = 0;
    for(let i = 0; i < characters.length; i++){
        if(column == 0) charactersTableInnerHTML += '<tr>';
    
        let character = characters[i];
        charactersTableInnerHTML += '<td id="' + character.name + '-' + character.id + '" class="selectableCell" onclick="selectCharacter(' + character.id + ')">';
        charactersTableInnerHTML += '<span>' + character.name + '</span>';
        charactersTableInnerHTML += '<br>';
        charactersTableInnerHTML += '<img class="charactersIcon" src="' + character.imagePath + '">';
        charactersTableInnerHTML += '</td>';
    
        column++;
        if(column == numberOfColumns){
            charactersTableInnerHTML += '</tr>';
            column = 0;
        }
    }
    
    document.getElementById('charactersTable').innerHTML = charactersTableInnerHTML;
}

//################## Vehicles Stuff ##################
const vehicles = [
    {
        imagePath: 'images/vehicles/karts/standartKart.webp',
        name: 'Standart Kart',
        id: 1,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/pipeFrameKart.webp',
        name: 'Pipe Frame',
        id: 2,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/mach8Kart.webp',
        name: 'Mach 8',
        id: 3,
        selectable: true,
        type: 'kart'
    }
]

selectVehicle = (vehicleId) => {
    let vehicle = vehicles.find(x => x.id == vehicleId);
    vehicle.selectable = !vehicle.selectable;
    changeSelectableBorderColor(vehicle);
}

createVehiclesTables = () => {
    let vehiclesTableInnerHTML = '';
    let column = 0;
    for(let i = 0; i < vehicles.length; i++){
        if(column == 0) charactersTableInnerHTML += '<tr>';
    
        let character = characters[i];
        charactersTableInnerHTML += '<td id="' + character.name + '-' + character.id + '" class="selectableCell" onclick="selectCharacter(' + character.id + ')">';
        charactersTableInnerHTML += '<span>' + character.name + '</span>';
        charactersTableInnerHTML += '<br>';
        charactersTableInnerHTML += '<img class="charactersIcon" src="' + character.imagePath + '">';
        charactersTableInnerHTML += '</td>';
    
        column++;
        if(column == numberOfColumns){
            charactersTableInnerHTML += '</tr>';
            column = 0;
        }
    }
    
    document.getElementById('charactersTable').innerHTML = charactersTableInnerHTML;
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
const numberOfColumns = 7;
createCharactersTable();
createVehiclesTables();