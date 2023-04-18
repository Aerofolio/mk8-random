//################## Characters Stuff ##################
const characters = [
    {
        imagePath: 'images/characters/mario_icon.png',
        name: 'Mario',
        id: 1,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/luigi_icon.png',
        name: 'Luigi',
        id: 2,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/peach_icon.png',
        name: 'Peach',
        id: 3,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/daisy_icon.png',
        name: 'Daisy',
        id: 4,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/rosalina_icon.png',
        name: 'Rosalina',
        id: 5,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/tanookiMario_icon.png',
        name: 'Tanooki Mario',
        id: 6,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/catPeach_icon.png',
        name: 'Cat Peach',
        id: 7,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/birdo_icon.png',
        name: 'Birdo',
        id: 8,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/yoshi_icon.png',
        name: 'Yoshi',
        id: 9,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/toad_icon.png',
        name: 'Toad',
        id: 10,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/koopaTroopa_icon.png',
        name: 'Koopa Troopa',
        id: 11,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/shyGuy_icon.png',
        name: 'Shy Guy',
        id: 12,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/lakitu_icon.png',
        name: 'Lakitu',
        id: 13,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/toadette_icon.png',
        name: 'Toadette',
        id: 14,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/kingBoo_icon.png',
        name: 'King Boo',
        id: 15,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/babyMario_icon.webp',
        name: 'Baby Mario',
        id: 16,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/babyLuigi_icon.png',
        name: 'Baby Luigi',
        id: 17,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/babyPeach_icon.png',
        name: 'Baby Peach',
        id: 18,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/babyDaisy_icon.png',
        name: 'Baby Daisy',
        id: 19,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/babyRosalina_icon.png',
        name: 'Baby Rosalina',
        id: 20,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/metalMario_icon.png',
        name: 'Metal Mario',
        id: 21,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/pinkGoldPeach_icon.png',
        name: 'Pink Gold Peach',
        id: 22,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/wario_icon.png',
        name: 'Wario',
        id: 23,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/waluigi_icon.png',
        name: 'Waluigi',
        id: 24,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/donkeyKong_icon.png',
        name: 'Donkey Kong',
        id: 25,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/bowser_icon.png',
        name: 'Bowser',
        id: 26,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/dryBones_icon.png',
        name: 'Dry Bones',
        id: 27,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/bowserJr_icon.png',
        name: 'Bowser Jr.',
        id: 28,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/dryBowser_icon.png',
        name: 'Dry Bowser',
        id: 29,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/lemmy_icon.png',
        name: 'Lemmy',
        id: 30,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/larry_icon.png',
        name: 'Larry',
        id: 31,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/wendy_icon.png',
        name: 'Wendy',
        id: 32,
        selectable: true,
        type: 'small'
    },
    {
        imagePath: 'images/characters/ludwig_icon.png',
        name: 'Ludwig',
        id: 33,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/iggy_icon.png',
        name: 'Iggy',
        id: 34,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/roy_icon.png',
        name: 'Roy',
        id: 35,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/morton_icon.webp',
        name: 'Morton',
        id: 36,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/inklingGirl_icon.png',
        name: 'Inkling Girl',
        id: 37,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/inklingBoy_icon.png',
        name: 'Inkling Boy',
        id: 38,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/link_icon.png',
        name: 'Link',
        id: 39,
        selectable: true,
        type: 'large'
    },
    {
        imagePath: 'images/characters/villagerMale_icon.png',
        name: 'Villager (Male)',
        id: 40,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/villagerFemale_icon.png',
        name: 'Villager (Female)',
        id: 41,
        selectable: true,
        type: 'medium'
    },
    {
        imagePath: 'images/characters/isabelle_icon.png',
        name: 'Isabelle',
        id: 42,
        selectable: true,
        type: 'small'
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
    let charactersTableInnerHTML = '';
    let column = 0;
    let charactersTable = document.getElementById('charactersTable');
    let charactersDiv = document.getElementById('charactersDiv');

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
    charactersDiv.classList.add('tableSection');
    charactersDiv.classList.add('partSection');
    createCharatersButtonsDiv();
}

createCharatersButtonsDiv = () => {
    let charactersAndBtnDiv = document.getElementById('charactersAndBtnDiv');
    let charactersTable = document.getElementById('charactersTable');

    let charactersButtonsDiv = document.createElement('div');
    charactersButtonsDiv.id = 'charactersButtonsDiv';
    charactersButtonsDiv.classList.add('buttonsDiv');

    charactersAndBtnDiv.insertBefore(charactersButtonsDiv, charactersTable);
    charactersAndBtnDiv.classList.add('tableWithButtons');
    charactersButtonsDiv.append(createSelectAllCharactersButton());
    charactersButtonsDiv.append(createDeselectAllCharactersButton());
    charactersButtonsDiv.append(createSelectOnlyCharactersButton('small', 'green'));
    charactersButtonsDiv.append(createDeselectCharactersButton('small', 'green'));
    charactersButtonsDiv.append(createSelectOnlyCharactersButton('medium', 'orange'));
    charactersButtonsDiv.append(createDeselectCharactersButton('medium', 'orange'));
    charactersButtonsDiv.append(createSelectOnlyCharactersButton('large', 'pink'));
    charactersButtonsDiv.append(createDeselectCharactersButton('large', 'pink'));
}

createSelectAllCharactersButton = () => {
    let selectButton = document.createElement('button');
    selectButton.innerHTML = 'Select All';
    selectButton.id = 'btnSelectAll-Characters';
    selectButton.classList.add('button');
    selectButton.classList.add('blueButton');
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
    deselectButton.classList.add('button');
    deselectButton.classList.add('redButton');
    deselectButton.onclick = () => {
        let selectedCharacters = characters.filter(x => x.selectable);
        for(let i = 0; i < selectedCharacters.length; i++){
            selectCharacter(selectedCharacters[i].id, false);
        }
    };
    return deselectButton;
}

createSelectOnlyCharactersButton = (characterType, color) => {
    let selectOnlyCharactersButton = document.createElement('button');
    let buttonText = characterType.charAt(0).toUpperCase() + characterType.slice(1);

    selectOnlyCharactersButton.innerHTML = 'Select Only '+ buttonText;
    selectOnlyCharactersButton.id = 'btnSelectOnly' + buttonText + 'Characters';
    selectOnlyCharactersButton.classList.add('button');
    selectOnlyCharactersButton.classList.add(color + 'Button');
    selectOnlyCharactersButton.onclick = () => {
        let selectedCharacters = characters.filter(x => x.type == characterType);
        for(let i = 0; i < selectedCharacters.length; i++){
            selectCharacter(selectedCharacters[i].id, true);
        }

        let unSelectedCharacters = characters.filter(x => x.type != characterType);
        for(let i = 0; i < unSelectedCharacters.length; i++){
            selectCharacter(unSelectedCharacters[i].id, false);
        }
    };
    return selectOnlyCharactersButton;
}

createDeselectCharactersButton = (characterType, color) => {
    let deselectCharactersButton = document.createElement('button');
    let buttonText = characterType.charAt(0).toUpperCase() + characterType.slice(1);

    deselectCharactersButton.innerHTML = 'Deselect ' + buttonText;
    deselectCharactersButton.id = 'btnDeselectAll' + buttonText + 'Characters';
    deselectCharactersButton.classList.add('button');
    deselectCharactersButton.classList.add(color + 'Button');
    deselectCharactersButton.onclick = () => {
        let selectedCharacters = characters.filter(x => x.type == characterType);
        for(let i = 0; i < selectedCharacters.length; i++){
            selectCharacter(selectedCharacters[i].id, false);
        }
    };
    return deselectCharactersButton;
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
        name: 'Wild Wiggler',
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
    let kartsTable = document.getElementById('kartsTable');
    let kartsDiv = document.getElementById('kartsDiv');
    let kartsAndBtnDiv = document.getElementById('kartsAndBtnDiv');

    let standartBikesTable = document.getElementById('standartBikesTable');
    let standartBikesDiv = document.getElementById('standartBikesDiv');
    let standartBikesAndBtnDiv = document.getElementById('standartBikesAndBtnDiv');

    let sportBikesTable = document.getElementById('sportBikesTable');
    let sportBikesDiv = document.getElementById('sportBikesDiv');
    let sportBikesAndBtnDiv = document.getElementById('sportBikesAndBtnDiv');

    let atvsTable = document.getElementById('atvsTable');
    let atvsDiv = document.getElementById('atvsDiv');
    let atvsAndBtnDiv = document.getElementById('atvsAndBtnDiv');

    let vehiclesDiv = document.getElementById('vehiclesDiv');

    kartsDiv.classList.add('tableSection');
    standartBikesDiv.classList.add('tableSection');
    sportBikesDiv.classList.add('tableSection');
    atvsDiv.classList.add('tableSection');
    vehiclesDiv.classList.add('tableSection');
    vehiclesDiv.classList.add('partSection');

    let vehicleButtonsDiv = document.createElement('div');
    vehicleButtonsDiv.id = 'vehicleButtonsDiv';
    vehicleButtonsDiv.classList.add('buttonsDiv');
    vehicleButtonsDiv.append(createSelectAllVehiclesButton());
    vehicleButtonsDiv.append(createDeselectAllVehiclesButton());
    vehicleButtonsDiv.append(createSelectOnlyVehiclesButton('kart', 'Karts', 'green'));
    vehicleButtonsDiv.append(createSelectOnlyVehiclesButton('standartBike', 'Stadart Bikes', 'yellow'));
    vehicleButtonsDiv.append(createSelectOnlyVehiclesButton('sportBike', 'Sport Bikes', 'pink'));
    vehicleButtonsDiv.append(createSelectOnlyVehiclesButton('atv', 'ATVs', 'orange'));
    vehiclesDiv.insertBefore(vehicleButtonsDiv, kartsDiv);

    let kartsButtonsDiv = document.createElement('div');
    kartsButtonsDiv.id = 'kartsButtonsDiv';
    kartsButtonsDiv.classList.add('buttonsDiv');
    kartsAndBtnDiv.insertBefore(kartsButtonsDiv, kartsTable);
    kartsAndBtnDiv.classList.add('tableWithButtons');
    kartsButtonsDiv.append(createSelectAllVehicleButton('kart'));
    kartsButtonsDiv.append(createDeselectAllVehicleButton('kart'));
    kartsTable.innerHTML = createVehicleTableHTML(vehicles.filter(x => x.type == 'kart'));

    let standartBikesButtonsDiv = document.createElement('div');
    standartBikesButtonsDiv.id = 'standartBikesButtonsDiv';
    standartBikesButtonsDiv.classList.add('buttonsDiv');
    standartBikesAndBtnDiv.insertBefore(standartBikesButtonsDiv, standartBikesTable);
    standartBikesAndBtnDiv.classList.add('tableWithButtons');
    standartBikesButtonsDiv.append(createSelectAllVehicleButton('standartBike'));
    standartBikesButtonsDiv.append(createDeselectAllVehicleButton('standartBike'));
    standartBikesTable.innerHTML = createVehicleTableHTML(vehicles.filter(x => x.type == 'standartBike'));

    let sportBikesButtonsDiv = document.createElement('div');
    sportBikesButtonsDiv.id = 'sportBikesButtonsDiv';
    sportBikesButtonsDiv.classList.add('buttonsDiv');
    sportBikesAndBtnDiv.insertBefore(sportBikesButtonsDiv, sportBikesTable);
    sportBikesAndBtnDiv.classList.add('tableWithButtons');
    sportBikesButtonsDiv.append(createSelectAllVehicleButton('sportBike'));
    sportBikesButtonsDiv.append(createDeselectAllVehicleButton('sportBike'));
    sportBikesTable.innerHTML = createVehicleTableHTML(vehicles.filter(x => x.type == 'sportBike'));

    let atvsButtonsDiv = document.createElement('div');
    atvsButtonsDiv.id = 'atvsButtonsDiv';
    atvsButtonsDiv.classList.add('buttonsDiv');
    atvsAndBtnDiv.insertBefore(atvsButtonsDiv, atvsTable);
    atvsAndBtnDiv.classList.add('tableWithButtons');
    atvsButtonsDiv.append(createSelectAllVehicleButton('atv'));
    atvsButtonsDiv.append(createDeselectAllVehicleButton('atv'));
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
    selectButton.classList.add('button');
    selectButton.classList.add('blueButton');
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
    deselectButton.classList.add('button');
    deselectButton.classList.add('redButton');
    deselectButton.onclick = () => {
        let selectedVehicles = vehicles.filter(x => x.type == vehicleType && x.selectable);
        for(let i = 0; i < selectedVehicles.length; i++){
            selectVehicle(selectedVehicles[i].id, false);
        }
    };
    return deselectButton;
}

createSelectAllVehiclesButton = () => {
    let selectButton = document.createElement('button');
    selectButton.innerHTML = 'Select All';
    selectButton.id = 'btnSelectAll-Vehicles';
    selectButton.classList.add('button');
    selectButton.classList.add('blueButton');
    selectButton.onclick = () => {
        let selectedVehicles = vehicles.filter(x => !x.selectable);
        for(let i = 0; i < selectedVehicles.length; i++){
            selectVehicle(selectedVehicles[i].id, true);
        }
    };
    return selectButton;
}

createDeselectAllVehiclesButton = () => {
    let deselectButton = document.createElement('button');
    deselectButton.innerHTML = 'Deselect All';
    deselectButton.id = 'btnDeselectAll-Vehicles';
    deselectButton.classList.add('button');
    deselectButton.classList.add('redButton');
    deselectButton.onclick = () => {
        let selectedVehicles = vehicles.filter(x => x.selectable);
        for(let i = 0; i < selectedVehicles.length; i++){
            selectVehicle(selectedVehicles[i].id, false);
        }
    };
    return deselectButton;
}

createSelectOnlyVehiclesButton = (vehicleType, buttonText, color) => {
    let selectOnlyVehiclesButton = document.createElement('button');
    let vehicleTypeCapitalaized = vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1);

    selectOnlyVehiclesButton.innerHTML = 'Select Only '+ buttonText;
    selectOnlyVehiclesButton.id = 'btnSelectOnly' + vehicleTypeCapitalaized + 'Vehicles';
    selectOnlyVehiclesButton.classList.add('button');
    selectOnlyVehiclesButton.classList.add(color + 'Button');
    selectOnlyVehiclesButton.onclick = () => {
        let selectedVehicles = vehicles.filter(x => x.type == vehicleType);
        for(let i = 0; i < selectedVehicles.length; i++){
            selectVehicle(selectedVehicles[i].id, true);
        }

        let unselectedVehicles = vehicles.filter(x => x.type != vehicleType);
        for(let i = 0; i < unselectedVehicles.length; i++){
            selectVehicle(unselectedVehicles[i].id, false);
        }
    };
    return selectOnlyVehiclesButton;
}

//################## Tires Stuff ##################
const tires = [
    {
        imagePath: 'images/tires/standartTire.png',
        name: 'Standart',
        id: 1,
        selectable: true
    },
    {
        imagePath: 'images/tires/monsterTire.png',
        name: 'Monster',
        id: 2,
        selectable: true
    },
    {
        imagePath: 'images/tires/rollerTire.png',
        name: 'Roller',
        id: 3,
        selectable: true
    },
    {
        imagePath: 'images/tires/slimTire.png',
        name: 'Slim',
        id: 4,
        selectable: true
    },
    {
        imagePath: 'images/tires/slickTire.png',
        name: 'Slick',
        id: 5,
        selectable: true
    },
    {
        imagePath: 'images/tires/metalTire.png',
        name: 'Metal',
        id: 6,
        selectable: true
    },
    {
        imagePath: 'images/tires/butonTire.png',
        name: 'Button',
        id: 7,
        selectable: true
    },
    {
        imagePath: 'images/tires/offRoadTire.png',
        name: 'Off-Road',
        id: 8,
        selectable: true
    },
    {
        imagePath: 'images/tires/spongeTire.png',
        name: 'Sponge',
        id: 9,
        selectable: true
    },
    {
        imagePath: 'images/tires/woodTire.png',
        name: 'Wood',
        id: 10,
        selectable: true
    },
    {
        imagePath: 'images/tires/cushionTire.webp',
        name: 'Cushion',
        id: 11,
        selectable: true
    },
    {
        imagePath: 'images/tires/blueStandartTire.png',
        name: 'Blue Standart',
        id: 12,
        selectable: true
    },
    {
        imagePath: 'images/tires/hotMonsterTire.png',
        name: 'Hot Monster',
        id: 13,
        selectable: true
    },
    {
        imagePath: 'images/tires/azureRollerTire.png',
        name: 'Azure Roller',
        id: 14,
        selectable: true
    },
    {
        imagePath: 'images/tires/crimsonSlimTire.png',
        name: 'Crimson Slim',
        id: 15,
        selectable: true
    },
    {
        imagePath: 'images/tires/cyberSlickTire.png',
        name: 'Cyber Slick',
        id: 16,
        selectable: true
    },
    {
        imagePath: 'images/tires/retroOffRoadTire.png',
        name: 'Retro Off-Road',
        id: 17,
        selectable: true
    },
    {
        imagePath: 'images/tires/goldTiresTire.png',
        name: 'Gold Tires',
        id: 18,
        selectable: true
    },
    {
        imagePath: 'images/tires/glaTiresTire.png',
        name: 'GLA Tires',
        id: 19,
        selectable: true
    },
    {
        imagePath: 'images/tires/triforceTiresTire.png',
        name: 'Triforce Tires',
        id: 20,
        selectable: true
    },
    {
        imagePath: 'images/tires/ancientTiresTire.png',
        name: 'Ancient Tires',
        id: 21,
        selectable: true
    },
    {
        imagePath: 'images/tires/leafTiresTire.png',
        name: 'Leaf Tires',
        id: 22,
        selectable: true
    }
]

selectTire= (tireId, value) => {
    let tire = tires.find(x => x.id == tireId);
    if(value != undefined)
        tire.selectable = value;
    else
        tire.selectable = !tire.selectable;
    changeSelectableBorderColor(tire);
}

createTiresTable = () => {
    let tiresTableInnerHTML = '';
    let column = 0;
    let tiresTable = document.getElementById('tiresTable');
    let tiresAndBtnDiv = document.getElementById('tiresAndBtnDiv');
    let tiresDiv = document.getElementById('tiresDiv');

    for(let i = 0; i < tires.length; i++){
        if(column == 0) tiresTableInnerHTML += '<tr>';
    
        let tire = tires[i];
        tiresTableInnerHTML += '<td id="' + tire.name + '-' + tire.id + '" class="selectableCell" onclick="selectTire(' + tire.id + ')">';
        tiresTableInnerHTML += '<span>' + tire.name + '</span>';
        tiresTableInnerHTML += '<br>';
        tiresTableInnerHTML += '<img class="tireIcon" src="' + tire.imagePath + '">';
        tiresTableInnerHTML += '</td>';
    
        column++;
        if(column == numberOfColumns){
            tiresTableInnerHTML += '</tr>';
            column = 0;
        }
    }
    
    tiresTable.innerHTML = tiresTableInnerHTML;
    tiresDiv.classList.add('tableSection');
    tiresDiv.classList.add('partSection');

    let tiresButtonsDiv = document.createElement('div');
    tiresButtonsDiv.id = 'tiresButtonsDiv';
    tiresButtonsDiv.classList.add('buttonsDiv');
    tiresAndBtnDiv.insertBefore(tiresButtonsDiv, tiresTable);
    tiresAndBtnDiv.classList.add('tableWithButtons');
    tiresButtonsDiv.append(createSelectAllTiresButton());
    tiresButtonsDiv.append(createDeselectAllTiresButton());
}

createSelectAllTiresButton = () => {
    let selectButton = document.createElement('button');
    selectButton.innerHTML = 'Select All';
    selectButton.id = 'btnSelectAll-Tires';
    selectButton.classList.add('button');
    selectButton.classList.add('blueButton');
    selectButton.onclick = () => {
        let selectedTires = tires.filter(x => !x.selectable);
        for(let i = 0; i < selectedTires.length; i++){
            selectTire(selectedTires[i].id, true);
        }
    };
    return selectButton;
}

createDeselectAllTiresButton = () => {
    let deselectButton = document.createElement('button');
    deselectButton.innerHTML = 'Deselect All';
    deselectButton.id = 'btnDeselectAll-Tires';
    deselectButton.classList.add('button');
    deselectButton.classList.add('redButton');
    deselectButton.onclick = () => {
        let selectedTires = tires.filter(x => x.selectable);
        for(let i = 0; i < selectedTires.length; i++){
            selectTire(selectedTires[i].id, false);
        }
    };
    return deselectButton;
}

//################## Gliders Stuff ##################
const gliders = [
    {
        imagePath: 'images/gliders/superGliderGlider.png',
        name: 'Super Glider',
        id: 1,
        selectable: true
    },
    {
        imagePath: 'images/gliders/cloudGliderGlider.png',
        name: 'Cloud Glider',
        id: 2,
        selectable: true
    },
    {
        imagePath: 'images/gliders/warioWingGlider.png',
        name: 'Wario Wing',
        id: 3,
        selectable: true
    },
    {
        imagePath: 'images/gliders/waddleWingGlider.png',
        name: 'Waddle Wing',
        id: 4,
        selectable: true
    },
    {
        imagePath: 'images/gliders/peachParasolGlider.png',
        name: 'Peach Parasol',
        id: 5,
        selectable: true
    },
    {
        imagePath: 'images/gliders/parachuteGlider.png',
        name: 'Parachute',
        id: 6,
        selectable: true
    },
    {
        imagePath: 'images/gliders/parafoilGlider.png',
        name: 'Parafoil',
        id: 7,
        selectable: true
    },
    {
        imagePath: 'images/gliders/flowerGliderGlider.png',
        name: 'Flower Glider',
        id: 8,
        selectable: true
    },
    {
        imagePath: 'images/gliders/bowserKiteGlider.png',
        name: 'Bowser Kite',
        id: 9,
        selectable: true
    },
    {
        imagePath: 'images/gliders/planeGliderGlider.png',
        name: 'Plane Glider',
        id: 10,
        selectable: true
    },
    {
        imagePath: 'images/gliders/mktvParafoilGlider.png',
        name: 'MKTV Parafoil',
        id: 11,
        selectable: true
    },
    {
        imagePath: 'images/gliders/goldGliderGlider.png',
        name: 'Gold Glider',
        id: 12,
        selectable: true
    },
    {
        imagePath: 'images/gliders/hylianKiteGlider.png',
        name: 'Hylian Kite',
        id: 13,
        selectable: true
    },
    {
        imagePath: 'images/gliders/paragliderGlider.png',
        name: 'Paraglider',
        id: 14,
        selectable: true
    },
    {
        imagePath: 'images/gliders/paperGliderGlider.png',
        name: 'Paper Glider',
        id: 15,
        selectable: true
    }
]

selectGlider = (gliderId, value) => {
    let glider = gliders.find(x => x.id == gliderId);
    if(value != undefined)
        glider.selectable = value;
    else
        glider.selectable = !glider.selectable;
    changeSelectableBorderColor(glider);
}

createGlidersTable = () => {
    let glidersTableInnerHTML = '';
    let column = 0;
    let glidersTable = document.getElementById('glidersTable');
    let glidersAndBtnDiv = document.getElementById('glidersAndBtnDiv');
    let glidersDiv = document.getElementById('glidersDiv');

    for(let i = 0; i < gliders.length; i++){
        if(column == 0) glidersTableInnerHTML += '<tr>';
    
        let glider = gliders[i];
        glidersTableInnerHTML += '<td id="' + glider.name + '-' + glider.id + '" class="selectableCell" onclick="selectGlider(' + glider.id + ')">';
        glidersTableInnerHTML += '<span>' + glider.name + '</span>';
        glidersTableInnerHTML += '<br>';
        glidersTableInnerHTML += '<img class="gliderIcon" src="' + glider.imagePath + '">';
        glidersTableInnerHTML += '</td>';
    
        column++;
        if(column == numberOfColumns){
            glidersTableInnerHTML += '</tr>';
            column = 0;
        }
    }
    
    glidersTable.innerHTML = glidersTableInnerHTML;
    glidersDiv.classList.add('tableSection');
    glidersDiv.classList.add('partSection');

    let glidersButtonsDiv = document.createElement('div');
    glidersButtonsDiv.id = 'glidersButtonsDiv';
    glidersButtonsDiv.classList.add('buttonsDiv');
    glidersAndBtnDiv.insertBefore(glidersButtonsDiv, glidersTable);
    glidersAndBtnDiv.classList.add('tableWithButtons');
    glidersButtonsDiv.append(createSelectAllGlidersButton());
    glidersButtonsDiv.append(createDeselectAllGlidersButton());
}

createSelectAllGlidersButton = () => {
    let selectButton = document.createElement('button');
    selectButton.innerHTML = 'Select All';
    selectButton.id = 'btnSelectAll-Gliders';
    selectButton.classList.add('button');
    selectButton.classList.add('blueButton');
    selectButton.onclick = () => {
        let selectedGliders = gliders.filter(x => !x.selectable);
        for(let i = 0; i < selectedGliders.length; i++){
            selectGlider(selectedGliders[i].id, true);
        }
    };
    return selectButton;
}

createDeselectAllGlidersButton = () => {
    let deselectButton = document.createElement('button');
    deselectButton.innerHTML = 'Deselect All';
    deselectButton.id = 'btnDeselectAll-Gliders';
    deselectButton.classList.add('button');
    deselectButton.classList.add('redButton');
    deselectButton.onclick = () => {
        let selectedGliders = gliders.filter(x => x.selectable);
        for(let i = 0; i < selectedGliders.length; i++){
            selectGlider(selectedGliders[i].id, false);
        }
    };
    return deselectButton;
}

//################## Build Randomizer Stuff ##################
createBuildRandomizerTable = () => {
    const numberOfRandomizedParts = 4;
    let buildTableInnerHTML = '';
    let buildTable = document.getElementById('buildTable');
    let buildDiv = document.getElementById('buildDiv');
    let buildTableAndBtnDiv = document.getElementById('buildTableAndBtnDiv');

    buildDiv.classList.add('partSection');
    buildDiv.classList.add('tableSection');
    buildTableAndBtnDiv.classList.add('buttonsDiv');
    buildTableInnerHTML += '<tr>';
    for(let i = 0; i < numberOfRandomizedParts; i++){
        switch(i){
            case 0:
                buildTableInnerHTML += '<td id="randomCharacter" class="randomParts">';
                buildTableInnerHTML += '<span id="randomCharacterName"></span>';
                buildTableInnerHTML += '<br>';
                buildTableInnerHTML += '<img id="randomCharacterImage" class="charactersIcon" src="images/other/interrogation.png">';
                buildTableInnerHTML += '</td>';
                break;
            case 1:
                buildTableInnerHTML += '<td id="randomVehicle" class="randomParts">';
                buildTableInnerHTML += '<span id="randomVehicleName"></span>';
                buildTableInnerHTML += '<br>';
                buildTableInnerHTML += '<img id="randomVehicleImage" class="charactersIcon" src="images/other/interrogation.png">';
                buildTableInnerHTML += '</td>';
                break;
            case 2:
                buildTableInnerHTML += '<td id="randomTire" class="randomParts">';
                buildTableInnerHTML += '<span id="randomTireName"></span>';
                buildTableInnerHTML += '<br>';
                buildTableInnerHTML += '<img id="randomTireImage" class="charactersIcon" src="images/other/interrogation.png">';
                buildTableInnerHTML += '</td>';
                break;
            case 3:
                buildTableInnerHTML += '<td id="randomGlider" class="randomParts">';
                buildTableInnerHTML += '<span id="randomGliderName"></span>';
                buildTableInnerHTML += '<br>';
                buildTableInnerHTML += '<img id="randomGliderImage" class="charactersIcon" src="images/other/interrogation.png">';
                buildTableInnerHTML += '</td>';
                break;
        }
    }
    buildTableInnerHTML += '</tr>';

    buildTableInnerHTML += '<tr>';
    for(let i = 0; i < numberOfRandomizedParts; i++){
        buildTableInnerHTML += '<td>';
        switch(i){
            case 0:
                let rerollCharacterButton = document.createElement('button');
                rerollCharacterButton.innerHTML = 'Reroll Character';
                rerollCharacterButton.id = 'btnRerollCharacter'
                rerollCharacterButton.classList.add('button');
                rerollCharacterButton.classList.add('yellowButton');
                buildTableInnerHTML += rerollCharacterButton.outerHTML;
                break;
            case 1:
                let rerollVehicleButton = document.createElement('button');
                rerollVehicleButton.innerHTML = 'Reroll Vehicle';
                rerollVehicleButton.id = 'btnRerollVehicle'
                rerollVehicleButton.classList.add('button');
                rerollVehicleButton.classList.add('greenButton');
                buildTableInnerHTML += rerollVehicleButton.outerHTML;
                break;
            case 2:
                let rerollTireButton = document.createElement('button');
                rerollTireButton.innerHTML = 'Reroll Tire';
                rerollTireButton.id = 'btnRerollTire'
                rerollTireButton.classList.add('button');
                rerollTireButton.classList.add('orangeButton');
                rerollTireButton.onclick = () => {};
                buildTableInnerHTML += rerollTireButton.outerHTML;
                break;
            case 3:
                let rerollGliderButton = document.createElement('button');
                rerollGliderButton.innerHTML = 'Reroll Glider';
                rerollGliderButton.id = 'btnRerollGlider'
                rerollGliderButton.classList.add('button');
                rerollGliderButton.classList.add('pinkButton');
                rerollGliderButton.onclick = () => {};
                buildTableInnerHTML += rerollGliderButton.outerHTML;
                break;
        }
        buildTableInnerHTML += '</td>';
    }
    buildTableInnerHTML += '</tr>';
    buildTable.innerHTML = buildTableInnerHTML;

    document.getElementById('btnRerollCharacter').onclick = randomizeCharacter;
    document.getElementById('btnRerollVehicle').onclick = randomizeVehicle;
    document.getElementById('btnRerollTire').onclick = randomizeTire;
    document.getElementById('btnRerollGlider').onclick = randomizeGlider;

    let randomizeButton = document.createElement('button');
    randomizeButton.innerHTML = 'Randomize!';
    randomizeButton.id = 'btnRandomize';
    randomizeButton.classList.add('cellSizeButton');
    randomizeButton.classList.add('yellowButton');
    randomizeButton.onclick = () => {
        randomizeCharacter();
        randomizeVehicle();
        randomizeTire();
        randomizeGlider();
    };
    buildTable.after(randomizeButton);
}

randomizeCharacter = () => {
    let avaliableCharacters = characters.filter(x => x.selectable);
    if(avaliableCharacters.length == 0){
        document.getElementById('randomCharacterName').innerHTML = 'Error!';
        document.getElementById('randomCharacterImage').src = 'images/other/interrogation.png';
        document.getElementById('randomCharacter').classList.replace('randomParts', 'errorRandomParts');
    }else{
        let randomizedCharacter = avaliableCharacters[getRandomIntBetween(0, avaliableCharacters.length - 1)];
        document.getElementById('randomCharacterName').innerHTML = randomizedCharacter.name;
        document.getElementById('randomCharacterImage').src = randomizedCharacter.imagePath;
        document.getElementById('randomCharacter').classList.replace('errorRandomParts', 'randomParts');
    }
}

randomizeVehicle = () =>{
    let avaliableVehicles = vehicles.filter(x => x.selectable);
    if(avaliableVehicles.length == 0){
        document.getElementById('randomVehicleName').innerHTML = 'Error!';
        document.getElementById('randomVehicleImage').src = 'images/other/interrogation.png';
        document.getElementById('randomVehicle').classList.replace('randomParts', 'errorRandomParts');
        document.getElementById('randomVehicleImage').classList.replace('vehiclePart', 'charactersIcon');
    }else{
        let randomizedVehicle = avaliableVehicles[getRandomIntBetween(0, avaliableVehicles.length - 1)];
        document.getElementById('randomVehicleName').innerHTML = randomizedVehicle.name;
        document.getElementById('randomVehicleImage').src = randomizedVehicle.imagePath;
        document.getElementById('randomVehicle').classList.replace('errorRandomParts', 'randomParts');
        document.getElementById('randomVehicleImage').classList.replace('charactersIcon', 'vehiclePart');
    }
}

randomizeTire = () =>{
    let avaliableTires = tires.filter(x => x.selectable);
    if(avaliableTires.length == 0){
        document.getElementById('randomTireName').innerHTML = 'Error!';
        document.getElementById('randomTireImage').src = 'images/other/interrogation.png';
        document.getElementById('randomTire').classList.replace('randomParts', 'errorRandomParts');
        document.getElementById('randomTireImage').classList.replace('vehiclePart', 'charactersIcon');
    }else{
        let randomizedTire = avaliableTires[getRandomIntBetween(0, avaliableTires.length - 1)];
        document.getElementById('randomTireName').innerHTML = randomizedTire.name;
        document.getElementById('randomTireImage').src = randomizedTire.imagePath;
        document.getElementById('randomTire').classList.replace('errorRandomParts', 'randomParts');
        document.getElementById('randomTireImage').classList.replace('charactersIcon', 'tireIcon');
    }
}

randomizeGlider = () =>{
    let avaliableGliders = gliders.filter(x => x.selectable);
    if(avaliableGliders.length == 0){
        document.getElementById('randomGliderName').innerHTML = 'Error!';
        document.getElementById('randomGliderImage').src = 'images/other/interrogation.png';
        document.getElementById('randomGlider').classList.replace('randomParts', 'errorRandomParts');
        document.getElementById('randomGliderImage').classList.replace('vehiclePart', 'charactersIcon');
    }else{
        let randomizedGlider = avaliableGliders[getRandomIntBetween(0, avaliableGliders.length - 1)];
        document.getElementById('randomGliderName').innerHTML = randomizedGlider.name;
        document.getElementById('randomGliderImage').src = randomizedGlider.imagePath;
        document.getElementById('randomGlider').classList.replace('errorRandomParts', 'randomParts');
        document.getElementById('randomGliderImage').classList.replace('charactersIcon', 'gliderIcon');
    }
}

//################## Util ##################
changeSelectableBorderColor = (element) => {
    let characterHTMLCell = document.getElementById(element.name + '-' + element.id);

    if(element.selectable)
        characterHTMLCell.classList.replace('unselectableCell', 'selectableCell');
    else
        characterHTMLCell.classList.replace('selectableCell', 'unselectableCell');
}

getRandomIntBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//################## Start ##################
const numberOfColumns = 8;
createCharactersTable();
createVehiclesTables();
createTiresTable();
createGlidersTable();
createBuildRandomizerTable();