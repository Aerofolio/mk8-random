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

selectCharacter = (characterId, value) => {
    let character = characters.find(x => x.id == characterId);
    if(value != undefined)
        character.selectable = value;
    else
        character.selectable = !character.selectable;
    changeSelectableBorderColor(character);
}

createCharactersTable = () => {
    let charactersTableInnerHTML = '',
        column = 0,
        charactersTable = document.getElementById('charactersTable'),
        charactersDiv = document.getElementById('charactersDiv');

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
    
    charactersTable.innerHTML = charactersTableInnerHTML;
    charactersDiv.insertBefore(createSelectAllCharactersButton(), charactersTable);
    charactersDiv.insertBefore(createDeselectAllCharactersButton(), charactersTable);
}

createSelectAllCharactersButton = () => {
    let selectButton = document.createElement('button');
    selectButton.innerHTML = 'Select All';
    selectButton.id = 'btnSelectAll-Characters';
    selectButton.classList.add('selectAllButton');
    selectButton.onclick = () => {
        let selectedCharacters = characters.filter(x => !x.selectable);
        for(let i = 0; i < selectedCharacters.length; i++){
            selectCharacter(selectedCharacters[i].id, true);
        }
    };
    return selectButton;
}

createDeselectAllCharactersButton = () => {
    let deselectButton = document.createElement('button');
    deselectButton.innerHTML = 'Deselect All';
    deselectButton.id = 'btnDeselectAll-Characters';
    deselectButton.classList.add('deselectAllButton');
    deselectButton.onclick = () => {
        let selectedCharacters = characters.filter(x => x.selectable);
        for(let i = 0; i < selectedCharacters.length; i++){
            selectCharacter(selectedCharacters[i].id, false);
        }
    };
    return deselectButton;
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
        imagePath: 'images/vehicles/karts/pipeFrameKart.png',
        name: 'Pipe Frame',
        id: 2,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/mach8Kart.png',
        name: 'Mach 8',
        id: 3,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/steelDriverKart.png',
        name: 'Steel Driver',
        id: 4,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/catCruiserKart.png',
        name: 'Cat Cruiser',
        id: 5,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/circuitSpecialKart.png',
        name: 'Circuit Special',
        id: 6,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/triSpeederKart.png',
        name: 'Tri-Speeder',
        id: 7,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/badWagonKart.png',
        name: 'Bad Wagon',
        id: 8,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/PrancerKart.png',
        name: 'Prancer',
        id: 9,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/biddybuggyKart.png',
        name: 'Biddybuggy',
        id: 10,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/landshipKart.png',
        name: 'Landship',
        id: 11,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/sneekerKart.png',
        name: 'Sneeker',
        id: 12,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/sportsCoupeKart.png',
        name: 'Sports Coupe',
        id: 13,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/goldStandartKart.png',
        name: 'Gold Standart',
        id: 14,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/glaKart.png',
        name: 'GLA',
        id: 15,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/w25SilverArrowKart.png',
        name: 'W 25 Silver Arrow',
        id: 16,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/300SLRoadsterKart.png',
        name: '300 SL Roadster',
        id: 17,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/blueFalconKart.png',
        name: 'Blue Falcon',
        id: 18,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/tanookiKartKart.png',
        name: 'Tanooki Kart',
        id: 19,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/bDasherKart.png',
        name: 'B Dasher',
        id: 20,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/streetleKart.png',
        name: 'Steetle',
        id: 21,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/pWingKart.png',
        name: 'P Wing',
        id: 22,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/karts/koopaClownKart.png',
        name: 'Koopa Clown',
        id: 23,
        selectable: true,
        type: 'kart'
    },
    {
        imagePath: 'images/vehicles/standartBikes/standartBikeBike.png',
        name: 'Standart Bike',
        id: 24,
        selectable: true,
        type: 'standartBike'
    },
    {
        imagePath: 'images/vehicles/standartBikes/theDukeBike.png',
        name: 'The Duke',
        id: 25,
        selectable: true,
        type: 'standartBike'
    },
    {
        imagePath: 'images/vehicles/standartBikes/flameRiderBike.png',
        name: 'Flame Rider',
        id: 26,
        selectable: true,
        type: 'standartBike'
    },
    {
        imagePath: 'images/vehicles/standartBikes/varmitBike.png',
        name: 'Varmit',
        id: 27,
        selectable: true,
        type: 'standartBike'
    },
    {
        imagePath: 'images/vehicles/standartBikes/mrScootyBike.png',
        name: 'Mr. Scooty',
        id: 28,
        selectable: true,
        type: 'standartBike'
    },
    {
        imagePath: 'images/vehicles/standartBikes/masterCycleZeroBike.png',
        name: 'Master Cycle Zero',
        id: 29,
        selectable: true,
        type: 'standartBike'
    },
    {
        imagePath: 'images/vehicles/standartBikes/CityTripperBike.png',
        name: 'City Tripper',
        id: 30,
        selectable: true,
        type: 'standartBike'
    },
    {
        imagePath: 'images/vehicles/sportBikes/cometBike.png',
        name: 'Comet',
        id: 31,
        selectable: true,
        type: 'sportBike'
    },
    {
        imagePath: 'images/vehicles/sportBikes/sportBikeBike.png',
        name: 'Sport Bike',
        id: 32,
        selectable: true,
        type: 'sportBike'
    },
    {
        imagePath: 'images/vehicles/sportBikes/jetBikeBike.png',
        name: 'Jet Bike',
        id: 33,
        selectable: true,
        type: 'sportBike'
    },
    {
        imagePath: 'images/vehicles/sportBikes/yoshiBikeBike.png',
        name: 'Yoshi Bike',
        id: 34,
        selectable: true,
        type: 'sportBike'
    },
    {
        imagePath: 'images/vehicles/sportBikes/masterCycleBike.png',
        name: 'Master Cycle',
        id: 35,
        selectable: true,
        type: 'sportBike'
    },
    {
        imagePath: 'images/vehicles/atvs/standartATVATV.png',
        name: 'Standart ATV',
        id: 36,
        selectable: true,
        type: 'atv'
    },
    {
        imagePath: 'images/vehicles/atvs/wildWigglerATV.png',
        name: 'wild Wiggler',
        id: 37,
        selectable: true,
        type: 'atv'
    },
    {
        imagePath: 'images/vehicles/atvs/teddyBuggyATV.png',
        name: 'Teddy Buggy',
        id: 38,
        selectable: true,
        type: 'atv'
    },
    {
        imagePath: 'images/vehicles/atvs/boneRattlerATV.png',
        name: 'Bone Rattler',
        id: 39,
        selectable: true,
        type: 'atv'
    },
    {
        imagePath: 'images/vehicles/atvs/splattBuggyATV.png',
        name: 'Splat Buggy',
        id: 40,
        selectable: true,
        type: 'atv'
    },
    {
        imagePath: 'images/vehicles/atvs/inkstrikerATV.png',
        name: 'Inkstriker',
        id: 41,
        selectable: true,
        type: 'atv'
    }
]

selectVehicle = (vehicleId, value) => {
    let vehicle = vehicles.find(x => x.id == vehicleId);
    if(value != undefined)
        vehicle.selectable = value;
    else
        vehicle.selectable = !vehicle.selectable;

    changeSelectableBorderColor(vehicle);
}

createVehiclesTables = () => {
    let kartsTable = document.getElementById('kartsTable'),
        kartsDiv = document.getElementById('kartsDiv'),

        standartBikesTable = document.getElementById('standartBikesTable'),
        standartBikesDiv = document.getElementById('standartBikesDiv'),

        sportBikesTable = document.getElementById('sportBikesTable'),
        sportBikesDiv = document.getElementById('sportBikesDiv'),

        atvsTable = document.getElementById('atvsTable'),
        atvsDiv = document.getElementById('atvsDiv');
    
    kartsDiv.insertBefore(createSelectAllVehicleButton('kart'), kartsTable);
    kartsDiv.insertBefore(createDeselectAllVehicleButton('kart'), kartsTable);
    kartsTable.innerHTML = createVehicleTableHTML(vehicles.filter(x => x.type == 'kart'));

    standartBikesDiv.insertBefore(createSelectAllVehicleButton('standartBike'), standartBikesTable);
    standartBikesDiv.insertBefore(createDeselectAllVehicleButton('standartBike'), standartBikesTable);
    standartBikesTable.innerHTML = createVehicleTableHTML(vehicles.filter(x => x.type == 'standartBike'));

    sportBikesDiv.insertBefore(createSelectAllVehicleButton('sportBike'), sportBikesTable);
    sportBikesDiv.insertBefore(createDeselectAllVehicleButton('sportBike'), sportBikesTable);
    sportBikesTable.innerHTML = createVehicleTableHTML(vehicles.filter(x => x.type == 'sportBike'));

    atvsDiv.insertBefore(createSelectAllVehicleButton('atv'), atvsTable);
    atvsDiv.insertBefore(createDeselectAllVehicleButton('atv'), atvsTable);
    atvsTable.innerHTML = createVehicleTableHTML(vehicles.filter(x => x.type == 'atv'));
}

createVehicleTableHTML = (vehiclesArray) => {
    let vehicleTableInnerHTML = '';
    let column = 0;

    for(let i = 0; i < vehiclesArray.length; i++){
        if(column == 0) vehicleTableInnerHTML += '<tr>';
    
        let vehicle = vehiclesArray[i];
        vehicleTableInnerHTML += '<td id="' + vehicle.name + '-' + vehicle.id + '" class="selectableCell" onclick="selectVehicle(' + vehicle.id + ')">';
        vehicleTableInnerHTML += '<span>' + vehicle.name + '</span>';
        vehicleTableInnerHTML += '<br>';
        vehicleTableInnerHTML += '<img class="vehiclePart" src="' + vehicle.imagePath + '">';
        vehicleTableInnerHTML += '</td>';
    
        column++;
        if(column == numberOfColumns){
            vehicleTableInnerHTML += '</tr>';
            column = 0;
        }
    }

    return vehicleTableInnerHTML;
}

createSelectAllVehicleButton = (vehicleType) => {
    let selectButton = document.createElement('button');
    selectButton.innerHTML = 'Select All';
    selectButton.id = 'btnSelectAll-' + vehicleType;
    selectButton.classList.add('selectAllButton');
    selectButton.onclick = () => {
        let selectedVehicles = vehicles.filter(x => x.type == vehicleType && !x.selectable);
        for(let i = 0; i < selectedVehicles.length; i++){
            selectVehicle(selectedVehicles[i].id, true);
        }
    };
    return selectButton;
}

createDeselectAllVehicleButton = (vehicleType) => {
    let deselectButton = document.createElement('button');
    deselectButton.innerHTML = 'Deselect All';
    deselectButton.id = 'btnDeselectAll-' + vehicleType;
    deselectButton.classList.add('deselectAllButton');
    deselectButton.onclick = () => {
        let selectedVehicles = vehicles.filter(x => x.type == vehicleType && x.selectable);
        for(let i = 0; i < selectedVehicles.length; i++){
            selectVehicle(selectedVehicles[i].id, false);
        }
    };
    return deselectButton;
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