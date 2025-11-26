// Stellingen per ronde - pas deze aan naar jouw stellingen
const statements = {
    1: {
        1: "Wie heeft ooit iets stoms gedaan om indruk te maken",
        2: "Wie is ooit betrapt op een leugen",
        3: "Wie heeft een slechte gewoonte die ze niet kunnen afleren",
        4: "Wie heeft ooit iets gestolen (hoe klein ook)",
        5: "Wie is weleens wakker geworden op een vreemde plek",
        6: "Wie heeft ooit iemand geblokkeerd en dat nooit uitgelegd",
        7: "Wie heeft ooit iets gezegd wat ze meteen betreurden",
        8: "Wie heeft een geheim dat niemand weet",
        9: "Wie heeft ooit een crush gehad op iemand die ze niet mochten leuk vinden",
        10: "Wie heeft ooit een dronken bericht gestuurd dat ze nu zouden verwijderen",
        11: "Wie heeft ooit een vreemde taal geprobeerd te spreken en gefaald",
        12: "Wie is ooit betrapt tijdens een gênant moment",
        13: "Wie heeft ooit iemand genegeerd zonder reden",
        14: "Wie heeft ooit gedaan alsof ze nuchter waren",
        15: "Wie heeft ooit iets stiekem weggegooid dat niet van hen was",
        16: "Wie heeft ooit een foute beslissing genomen op vakantie",
        17: "Wie heeft ooit iemand jaloers proberen te maken",
        18: "Wie heeft ooit iets gebroken op een feestje",
        19: "Wie heeft ooit een crush gehad op iemand van werk of school",
        20: "Wie heeft ooit iets verkeerd gestuurd naar de verkeerde persoon",
        21: "Wie heeft ooit een maaltijd laten aanbranden",
        22: "Wie heeft ooit gelogen om drama te vermijden",
        23: "Wie heeft ooit iemand laten wachten zonder reden",
        24: "Wie heeft ooit een gênante bijnaam gekregen",
        25: "Wie heeft ooit iemand ontweken in het openbaar",
        26: "Wie heeft ooit een vriendschap verwaarloosd",
        27: "Wie heeft ooit een avond verpest met te veel drank",
        28: "Wie heeft ooit iemand teleurgesteld en daar spijt van",
        29: "Wie heeft ooit een fout geheim gehouden",
        30: "Wie heeft ooit iets doms gekocht uit impuls",
        31: "Wie heeft ooit een geheim verklapt zonder het te beseffen",
        32: "Wie heeft ooit een compliment niet gemeend",
        33: "Wie heeft ooit gedaan alsof ze iemand niet herkenden",
        34: "Wie heeft ooit een plan afgezegd met een smoes",
        35: "Wie heeft ooit iemand gebruikt voor aandacht",
        36: "Wie heeft ooit gelogen tijdens een spelletje",
        37: "Wie heeft ooit iets gedaan wat tegen hun principes inging",
        38: "Wie heeft ooit iemand genegeerd in een groepsapp",
        39: "Wie heeft ooit te veel gedeeld op social media",
        40: "Wie heeft ooit spijt gehad van eerlijkheid",
        41: "Wie heeft ooit iemand in deze groep beledigd (bewust of niet)",
        42: "Wie heeft ooit een geheim verteld dat niet van hen was",
        43: "Wie heeft ooit iets verdraaid om er beter uit te zien",
        44: "Wie heeft ooit een ander de schuld gegeven van hun fout",
        45: "Wie heeft ooit iets gedaan waar ze nu om kunnen lachen",
        46: "Wie heeft ooit een gênante uitspraak gedaan in gezelschap",
        47: "Wie heeft ooit iets vergeten wat belangrijk was",
        48: "Wie heeft ooit een vreemde versierd voor de grap",
        49: "Wie heeft ooit iets fout geïnterpreteerd en zich belachelijk gemaakt",
        50: "Wie heeft ooit iemand onterecht beschuldigd"
    },
    2: {
        1: "Becky",
        2: "Zoete aardappelfriet",
        3: "Enzo Knol",
        4: "Zürich",
        5: "Thor",
        6: "André Hazes",
        7: "Blauwe vinvis",
        8: "Fortnite",
        9: "Willempie",
        10: "SpongeBob",
        11: "Mount Everest",
        12: "Gaby",
        13: "Wesley Sneijder",
        14: "Gers Pardoel",
        15: "Rusland",
        16: "Voldemort",
        17: "Martin Garrix",
        18: "Ik ben Ludwig",
        19: "Yoshi",
        20: "Joey",
        21: "Mercurius",
        22: "Netflix",
        23: "K3",
        24: "De Nijl",
        25: "Spider-Man",
        26: "Danny Z",
        27: "Azië",
        28: "Thomas",
        29: "Steve Jobs",
        30: "Dires",
        31: "Eiffeltoren",
        32: "Minecraft",
        33: "Johan Cruijff",
        34: "Oempa Loompa",
        35: "Gio Latooy",
        36: "Sahara",
        37: "Duncan Laurence",
        38: "Instagram",
        39: "Carice van Houten",
        40: "Jachtluipaard",
        41: "Danny M",
        42: "Vaticaanstad",
        43: "Bløf",
        44: "Atlantische Oceaan",
        45: "Superman",
        46: "Ajax",
        47: "Yen",
        48: "Joel",
        49: "Vakansie Vincens",
        50: "GUYON!"
    },
    3: {
        1: "Martin Garrix - Animals",
        2: "Jan Smit - Tranquilo",
        3: "Doe Maar - Smoorverliefd",
        4: "Kygo & Conrad Sewell - Firestone",
        5: "Avicii - Levels",
        6: "VIZE, Joker Bra & Leony - Paradise",
        7: "André Hazes Jr. - Leef",
        8: "Ali B, The Partysquad & Yes-R - Rampeneren",
        9: "Ronnie Flex & Frenna - Energie",
        10: "K3 - Oya Lélé",
        11: "Parla & Pardoux - Liberté",
        12: "George Baker Selection - Una Paloma Blanca",
        13: "Guns N' Roses - Sweet Child O' Mine",
        14: "Het Goede Doel - Belgie",
        15: "Klapperkebab & Kale Toeter - Sinterklaasjournaal Techno",
        16: "De Jeugd Van Tegenwoordig - Sterrenstof",
        17: "Marco Borsato - Rood",
        18: "Frenna & Shallipopi - ZAAZAA",
        19: "Andre Hazes - Bloed, Zweet En Tranen",
        20: "Kraantje Pappie - Best Wel Een Ding",
        21: "David Guetta ft. Nicki Minaj, Bebe Rexha & Afrojack - Hey Mama",
        22: "B-Brave & Sevn Alias - One Night Stand",
        23: "Sam Smith - Stay With Me",
        24: "Goldband - Noodgeval",
        25: "The Opposites - Slaap",
        26: "Michael Jackson - Dirty Diana",
        27: "Sade - Smooth Operator",
        28: "Imagine Dragons - Demons",
        29: "Martin Solveig & Dragonette - Hello",
        30: "Avicii - Waiting For Love",
        31: "Guns N' Roses - Paradise City",
        32: "ABBA - Gimme! Gimme! Gimme!",
        33: "Eminem - Without Me",
        34: "Ed Sheeran - Shivers",
        35: "André van Duin - Het Pizzalied",
        36: "Paul de Leeuw - Vlieg Met Me Mee",
        37: "Suzan & Freek - Als Het Avond Is",
        38: "Thijs Boontjes - Deze Nacht",
        39: "Dio & Sef - Tijdmachine",
        40: "Anouk - Girl",
        41: "Porter Robinson & Madeon - Shelter",
        42: "Martin Garrix, Sem Vox & Jaimes - Gravity",
        43: "Maroon 5 - Maps",
        44: "HAVEN. - I Run",
        45: "A Touch Of Class - Around the World",
        46: "Elvis Presley - Return to Sender",
        47: "Cartoon, Jéja & Daniel Levi - On & On",
        48: "Joost - Europapa",
        49: "Eminem - Houdini",
        50: "Michael Jackson - Liberian Girl"
    }
};

// Vragen voor ronde 2 (voor op het display)
const round2Questions = {
    1: "Ik ben de grootste streamer van Nederland",
    2: "Ik ben een oranje snack die gefrituurde aardappel is",
    3: "Ik ben een bekende Nederlandse YouTuber met meer dan 2 miljoen subs",
    4: "Ik ben de hoofdstad van Zwitserland",
    5: "Ik ben een superheld met een hamer en kom uit Asgard",
    6: "Ik ben een Nederlandse zanger die bekend is van 'Zij Gelooft In Mij'",
    7: "Ik ben het grootste zoogdier ter wereld",
    8: "Ik ben een populaire battle royale game met een storm",
    9: "Ik ben de Nederlandse koning",
    10: "Ik ben een geel vierkant animatiefiguur die woont in een ananas",
    11: "Ik ben de hoogste berg ter wereld",
    12: "Ik heb een relatie met iemand uit de mooiste stad van NL",
    13: "Ik ben een Nederlandse voetballer die speelde voor Real Madrid",
    14: "Ik ben een Nederlandse rapper die bekend werd met 'Ik Neem Je Mee'",
    15: "Ik ben het grootste land ter wereld",
    16: "Ik ben een bekende schurk uit Harry Potter zonder neus",
    17: "Ik ben een Nederlandse DJ die bekend werd met 'Animals'",
    18: "Heet je echt zo?",
    19: "Ik ben een groene dinosaurus uit een Nintendo game",
    20: "Ik heb tank gereden",
    21: "Ik ben de planeet die het dichtst bij de zon staat",
    22: "Ik ben een streaming dienst met rode letters",
    23: "Ik ben een Vlaamse popgroep met 3 meisjes",
    24: "Ik ben de langste rivier ter wereld",
    25: "Ik ben een superheld met een web",
    26: "Ik kan eigenlijk niet voetballen maar doe het toch",
    27: "Ik ben het grootste continent ter wereld",
    28: "Ik word altijd nat op de motor",
    29: "Ik ben de oprichter van Apple (niet meer in leven)",
    30: "Ik heb een stoel gekregen van me ouders om het verdriet te verwerken",
    31: "Ik ben de hoogste toren van Parijs",
    32: "Ik ben een populaire game waar je blokjes plaatst",
    33: "Ik ben een Nederlandse voetballer die speelde voor Barcelona en had nummer 14",
    34: "Ik ben de president van Amerika (2025)",
    35: "Ik ben een bekende Nederlandse YouTuber met meer dan 1 miljoen subs",
    36: "Ik ben het grootste woestijn ter wereld",
    37: "Ik ben een Nederlandse zanger die won met 'Arcade'",
    38: "Ik ben een social media platform waar je foto's deelt",
    39: "Ik ben een Nederlandse actrice die speelde in Game of Thrones",
    40: "Ik ben de snelste landdier ter wereld",
    41: "Ik geloof in de WEF en de toekomst van AI",
    42: "Ik ben het kleinste land ter wereld",
    43: "Ik ben een Nederlandse band die bekend werd met 'Dichterbij'",
    44: "Ik ben de oceaan tussen Europa en Amerika",
    45: "Ik ben een superheld die kan vliegen en van krypton komt",
    46: "Ik ben een Nederlandse voetbalclub uit Amsterdam",
    47: "Ik ben de munteenheid van Japan",
    48: "Wie haat er Marvel films?",
    49: "Mag ik èèn patat mayo?",
    50: "Ik hou van blauwe oog schaduw"
};

// Audio configuratie
const audioConfig = {
    backgroundMusic: {
        folder: 'sounds/background/',
        files: [
            'Wii Party Soundtrack 016 - Bingo [9cJGHyxwftc].mp3'
        ],
        currentIndex: 0,
        volume: 0.1
    },
    effects: {
        folder: 'sounds/effects/',
        files: [
                "alloo.wav",
                "Becky lach.wav",
                "Becky nooit wijn.mp3",
                "becky_lach.wav",
                "Blaadypoep.wav",
                "Bram mamamelk.mp3",
                "Danny - Pats broek vol.mp3",
                "Danny - Seks.mp3",
                "Danny - tantoe ziek.mp3",
                "Danny - wine op de cockie.mp3",
                "Danny cumsho.wav",
                "Danny relatie.mp3",
                "danny_mees_s.wav",
                "danny reet neuken.mp3",
                "die bweeg niet meer.mp3",
                "Donder.wav",
                "doritos.wav",
                "Dries - ik wil dood.mp3",
                "Dries - kan me niet schelen.mp3",
                "Dries - neuken.mp3",
                "Dries clipje.m4a",
                "Geen dick.wav",
                "Gewoon conte.wav",
                "Gewoon conte2.wav",
                "Goeiemorgen vriend.mp3",
                "Guyon - andere bitch neuken.mp3",
                "Guyon - boef man.mp3",
                "Guyon - GANG.mp3",
                "Guyon - Grappig.mp3",
                "Guyon - hou je bek.mp3",
                "Guyon - Reet neuken.mp3",
                "Guyon - vallen.mp3",
                "Guyon gvange.wav",
                "Guyon net.wav",
                "Guyon raar.wav",
                "Guyon.wav",
                "Hallo blauw.wav",
                "hehehehehe.wav",
                "Ik ben homo.wav",
                "Ik_hou_van_p.wav",
                "ik_kan_alles.wav",
                "Ik_zit_er_ni.wav",
                "Joel - gekkie.m4a",
                "Joel - reet zien.mp3",
                "Joel bambu.m4a",
                "Kei sexy.wav",
                "Kevin - Maar.wav",
                "Knuffelen.wav",
                "kut spel.wav",
                "kutje.m4a",
                "LELELE.wav",
                "Lenny koekoe.wav",
                "mugdood.wav",
                "Nandi.wav",
                "Onlyfans.wav",
                "patat mayo m.wav",
                "Pik.wav",
                "Pjenis.wav",
                "spuug.m4a",
                "Thomas - Baby.mp3",
                "Thomas - gek geluid.mp3",
                "Thomas - ohneee.mp3",
                "Thomas - Vieze moeder.mp3",
                "Thomas gek geluidje.mp3",
                "Untitled video - Made with Clipchamp (17).m4a",
                "Untitled video - Made with Clipchamp (21).m4a",
                "Untitled video - Made with Clipchamp (27).m4a",
                "Untitled video - Made with Clipchamp (40).m4a",
                "Untitled video - Made with Clipchamp (41).m4a",
                "Untitled video - Made with Clipchamp (42).m4a",
                "Untitled video - Made with Clipchamp (44).m4a",
                "Untitled video - Made with Clipchamp (45).m4a",
                "Untitled video - Made with Clipchamp (48).m4a",
                "Untitled video - Made with Clipchamp (49).m4a",
                "Untitled video - Made with Clipchamp.m4a",
                "verkrachten.wav",
                "Wil_jij_een_.wav"
        ],
        volume: 1.0
    }
};

// Audio elementen
let backgroundMusic = null;
let effectSound = null;
let isMusicPlaying = false;

// Shuffle systeem voor effecten
let effectsPlaylist = [];
let effectsPlaylistIndex = 0;
let lastPlayedEffect = null; // Houd laatste effect bij

// Shuffle een array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialiseer de effects playlist
function initEffectsPlaylist() {
    effectsPlaylist = shuffleArray(audioConfig.effects.files);
    effectsPlaylistIndex = 0;
    console.log('🔀 Effecten playlist geshuffled:', effectsPlaylist.length, 'effecten');
}

// Staat van het spel
let currentRound = null;
let availableNumbers = [];
let usedNumbers = [];
let statementHistory = [];
let totalStatements = 0;
let historyIndex = -1; // Voor navigatie door geschiedenis
let currentDisplayStatement = ''; // Voor sync naar display (alleen vraag bij ronde 2)

// BINGO doelen systeem
const bingoGoals = [
    { id: 'line', name: 'Horizontale of Verticale Lijn', achieved: false },
    { id: 'full', name: 'Volle Kaart', achieved: false }
];
let currentGoalIndex = 0;

// Initialiseer audio bij laden van pagina
function initAudio() {
    backgroundMusic = document.getElementById('backgroundMusic');
    effectSound = document.getElementById('effectSound');
    
    // Bewaar volume voordat we files overschrijven
    const effectsVolume = audioConfig.effects.volume;
    
    // Bouw volledige paden voor effecten
    audioConfig.effects.files = audioConfig.effects.files.map(file => 
        audioConfig.effects.folder + file
    );
    
    // Herstel volume (voor zekerheid)
    audioConfig.effects.volume = effectsVolume;
    
    console.log('🔍 Audio systeem geladen');
    console.log(`🎵 Achtergrondmuziek: ${audioConfig.backgroundMusic.files.length} bestand(en)`);
    console.log(`🔊 Geluidseffecten: ${audioConfig.effects.files.length} bestand(en)`);
    console.log(`🔊 Effects volume: ${audioConfig.effects.volume}`);
    
    // Initialiseer de shuffled playlist voor effecten
    if (audioConfig.effects.files.length > 0) {
        initEffectsPlaylist();
    }
    
    // Stel volumes in
    if (backgroundMusic) {
        backgroundMusic.volume = audioConfig.backgroundMusic.volume;
        backgroundMusic.loop = true; // Zet loop aan voor continue muziek
        
        // Laad eerste achtergrondmuziek (maar start niet automatisch)
        if (audioConfig.backgroundMusic.files.length > 0) {
            loadBackgroundMusic();
            
            // Event listener voor als muziek eindigt (alleen voor multi-file playlists)
            if (audioConfig.backgroundMusic.files.length > 1) {
                backgroundMusic.addEventListener('ended', playNextBackgroundMusic);
            }
        } else {
            console.log('ℹ️ Geen achtergrondmuziek geconfigureerd');
        }
    }
    
    if (effectSound) {
        effectSound.volume = audioConfig.effects.volume;
        
        if (audioConfig.effects.files.length === 0) {
            console.log('ℹ️ Geen geluidseffecten geconfigureerd - gebruik fallback geluid');
        }
    }
}

// Laad achtergrondmuziek
function loadBackgroundMusic() {
    if (!backgroundMusic || audioConfig.backgroundMusic.files.length === 0) return;
    
    const musicFile = audioConfig.backgroundMusic.folder + 
                     audioConfig.backgroundMusic.files[audioConfig.backgroundMusic.currentIndex];
    backgroundMusic.src = musicFile;
    console.log('🎵 Geladen:', musicFile);
    
    // Probeer te laden, als het mislukt gebruik fallback
    backgroundMusic.addEventListener('error', () => {
        console.error('❌ Muziekbestand niet gevonden:', musicFile);
    }, { once: true });
}

// Speel volgende muziek in de playlist
function playNextBackgroundMusic() {
    audioConfig.backgroundMusic.currentIndex = 
        (audioConfig.backgroundMusic.currentIndex + 1) % audioConfig.backgroundMusic.files.length;
    loadBackgroundMusic();
    if (isMusicPlaying) {
        backgroundMusic.play().catch(e => console.log('Autoplay geblokkeerd'));
    }
}

// Toggle achtergrondmuziek
function toggleBackgroundMusic() {
    if (!backgroundMusic) return;
    
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        document.getElementById('musicIcon').innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        backgroundMusic.play()
            .then(() => {
                isMusicPlaying = true;
                document.getElementById('musicIcon').innerHTML = '<i class="fas fa-volume-up"></i>';
            })
            .catch(e => {
                console.log('Kan muziek niet afspelen:', e);
                alert('Klik eerst ergens op de pagina om muziek in te schakelen (browser beveiliging)');
            });
    }
}

// Stel muziek volume in
function setMusicVolume(value) {
    audioConfig.backgroundMusic.volume = value / 100;
    if (backgroundMusic) {
        backgroundMusic.volume = audioConfig.backgroundMusic.volume;
    }
    document.getElementById('musicVolumeValue').textContent = value + '%';
}

// Stel effecten volume in
function setEffectsVolume(value) {
    audioConfig.effects.volume = value / 100;
    if (effectSound) {
        effectSound.volume = audioConfig.effects.volume;
    }
    document.getElementById('effectsVolumeValue').textContent = value + '%';
}

// Speel random sound effect
function playRandomEffect() {
    if (!effectSound) {
        console.error('❌ Effect sound element niet gevonden');
        playDingSound();
        return;
    }
    
    if (effectsPlaylist.length === 0) {
        console.log('ℹ️ Geen effecten geregistreerd - gebruik fallback geluid');
        playDingSound();
        return;
    }
    
    // Haal volgende effect uit de playlist
    const effectFile = effectsPlaylist[effectsPlaylistIndex];
    effectsPlaylistIndex++;
    
    // Sla laatste effect op voor replay
    lastPlayedEffect = effectFile;
    
    // Als we aan het einde zijn, shuffle opnieuw
    if (effectsPlaylistIndex >= effectsPlaylist.length) {
        console.log('🔄 Alle effecten afgespeeld! Shuffle opnieuw...');
        initEffectsPlaylist();
    }
    
    console.log(`🔊 Speel effect (${effectsPlaylistIndex}/${effectsPlaylist.length}):`, effectFile);
    
    effectSound.src = effectFile;
    effectSound.currentTime = 0; // Reset naar begin
    effectSound.play()
        .catch(e => {
            console.error('❌ Effect niet afgespeeld:', effectFile, e.message);
            // Alleen fallback als er echt een fout is
            playDingSound();
        });
}

// Speel laatste effect opnieuw af
function replayLastEffect() {
    if (!lastPlayedEffect) {
        console.log('ℹ️ Geen effect om opnieuw af te spelen');
        return;
    }
    
    if (!effectSound) {
        console.error('❌ Effect sound element niet gevonden');
        return;
    }
    
    console.log('🔁 Replay:', lastPlayedEffect);
    
    effectSound.src = lastPlayedEffect;
    effectSound.currentTime = 0;
    effectSound.play()
        .catch(e => {
            console.error('❌ Replay mislukt:', lastPlayedEffect, e.message);
        });
}

// Maak geluid (Web Audio API fallback omdat we geen externe bestanden hebben)
function playDingSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio niet ondersteund');
    }
}

// Update progress bar
function updateProgress() {
    const total = totalStatements;
    const used = usedNumbers.length;
    const percentage = total > 0 ? (used / total) * 100 : 0;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${used} / ${total}`;
}

// Selecteer een ronde
function selectRound(roundNumber) {
    currentRound = roundNumber;
    availableNumbers = Object.keys(statements[roundNumber]).map(Number);
    usedNumbers = [];
    statementHistory = [];
    totalStatements = availableNumbers.length;
    historyIndex = -1;
    
    // Reset BINGO doelen
    bingoGoals.forEach(goal => goal.achieved = false);
    currentGoalIndex = 0;
    updateBingoGoal();
    
    // Update UI
    document.getElementById('currentRound').textContent = `Ronde ${roundNumber}`;
    document.getElementById('numberDisplay').textContent = '-';
    document.getElementById('numberDisplay').style.backgroundColor = '#667eea';
    document.getElementById('statementDisplay').textContent = 'Klik op "Volgende Stelling" om te beginnen';
    document.getElementById('usedNumbers').innerHTML = '';
    updateProgress();
    
    // Update actieve knop
    document.querySelectorAll('.round-btn').forEach((btn, index) => {
        if (index + 1 === roundNumber) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Sync naar display scherm
    syncToDisplay();
    
        // Zet audio sliders opnieuw zodat volume klopt
        const musicSlider = document.getElementById('musicVolume');
        if (musicSlider) setMusicVolume(musicSlider.value);
        const effectsSlider = document.getElementById('effectsVolume');
        if (effectsSlider) setEffectsVolume(effectsSlider.value);
    // Toon ronde start overlay
    showRondeStartOverlay(roundNumber);
    
    // Start achtergrondmuziek bij eerste ronde selectie
    if (backgroundMusic && !isMusicPlaying) {
        backgroundMusic.play().then(() => {
            isMusicPlaying = true;
            document.getElementById('musicIcon').innerHTML = '<i class="fas fa-volume-up"></i>';
            console.log('🎵 Achtergrondmuziek gestart');
        }).catch(err => {
            console.log('ℹ️ Muziek kon niet starten:', err.message);
        });
    }
}

// Toon ronde start overlay
function showRondeStartOverlay(roundNumber) {
    const overlay = document.getElementById('rondeStartOverlay');
    document.getElementById('rondeStartRoundNumber').textContent = roundNumber;
    document.getElementById('rondeStartGoalText').textContent = bingoGoals[0].name;
    overlay.classList.remove('hidden');
    
    // Bepaal ronde naam voor display
    let roundName;
    if (roundNumber === 1) {
        roundName = 'Ronde 1 - Stellingen';
    } else if (roundNumber === 2) {
        roundName = 'Ronde 2 - Wie of Wat Ben Ik?';
    } else if (roundNumber === 3) {
        roundName = 'Ronde 3 - Muziekronde';
    } else {
        roundName = `Ronde ${roundNumber}`;
    }
    
    // Sync naar display
    localStorage.setItem('bingo_round_start_overlay', 'true');
    localStorage.setItem('bingo_round_start_number', roundNumber);
    localStorage.setItem('bingo_round_start_name', roundName);
    localStorage.setItem('bingo_round_start_goal', bingoGoals[0].name);
}

// Sluit ronde start overlay
function closeRondeStart() {
    const overlay = document.getElementById('rondeStartOverlay');
    overlay.classList.add('hidden');
    
    // Clear display overlay
    localStorage.setItem('bingo_round_start_overlay', 'false');
}

// Functie om de kleur te bepalen op basis van het nummer
function getNumberColor(number) {
    if (number >= 1 && number <= 10) return '#e74c3c'; // Rood
    if (number >= 11 && number <= 20) return '#3498db'; // Blauw
    if (number >= 21 && number <= 30) return '#f1c40f'; // Geel
    if (number >= 31 && number <= 40) return '#2ecc71'; // Groen
    if (number >= 41 && number <= 51) return '#9b59b6'; // Paars
    return '#667eea'; // Standaard
}

// Toon volgende willekeurige stelling
function nextStatement() {
    if (currentRound === null) {
        alert('Selecteer eerst een ronde!');
        return;
    }
    
    if (availableNumbers.length === 0) {
        alert('Alle stellingen van deze ronde zijn gebruikt! Klik op "Reset Ronde" om opnieuw te beginnen.');
        return;
    }
    
    // Kies willekeurig nummer
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const selectedNumber = availableNumbers[randomIndex];
    
    // Verwijder nummer uit beschikbare nummers
    availableNumbers.splice(randomIndex, 1);
    usedNumbers.push(selectedNumber);
    
    // Haal stelling op
    let statement, controlStatement, displayStatement;
    
    if (currentRound === 2) {
        // Voor ronde 2: vraag voor display, vraag+antwoord voor control panel
        const question = round2Questions[selectedNumber];
        const answer = statements[currentRound][selectedNumber];
        displayStatement = question; // Alleen vraag voor publiek display
        controlStatement = `${question}\n\n💡 Antwoord: ${answer}`; // Vraag + antwoord voor control
        statement = question; // Voor history
        console.log('Ronde 2 - Vraag:', question, 'Antwoord:', answer);
    } else {
        // Voor andere rondes: gewoon de stelling
        statement = statements[currentRound][selectedNumber];
        controlStatement = statement;
        displayStatement = statement;
    }
    
    // Voeg toe aan geschiedenis (met vraag voor ronde 2)
    statementHistory.push({ 
        number: selectedNumber, 
        statement: statement,
        displayStatement: displayStatement,
        controlStatement: controlStatement
    });
    historyIndex = statementHistory.length - 1; // Huidige positie in geschiedenis
    
    // Update display met verbeterde animatie
    const numberDisplay = document.getElementById('numberDisplay');
    const statementDisplay = document.getElementById('statementDisplay');
    
    // Animatie uit
    numberDisplay.style.transform = 'scale(0) rotate(-180deg)';
    statementDisplay.style.transform = 'scale(0)';
    statementDisplay.style.opacity = '0';
    
    setTimeout(() => {
        numberDisplay.textContent = selectedNumber;
        numberDisplay.style.backgroundColor = getNumberColor(selectedNumber);
        statementDisplay.textContent = controlStatement; // Toon vraag+antwoord op control
        
        // Sla display statement op voor sync
        currentDisplayStatement = displayStatement;
        
        // Voeg rolling animatie toe
        numberDisplay.classList.add('rolling');
        
        // Verwijder animatie class na afloop
        setTimeout(() => {
            numberDisplay.classList.remove('rolling');
        }, 800);
        
        // Animatie in
        numberDisplay.style.transform = 'scale(1) rotate(0deg)';
        statementDisplay.style.transform = 'scale(1)';
        statementDisplay.style.opacity = '1';
        
        // Sync naar display scherm
        syncToDisplay();
        
        // Speel sound effect
        playRandomEffect();
    }, 300);
    
    // Update gebruikte nummers en progress
    updateUsedNumbers();
    updateProgress();
}

// Update de lijst met gebruikte nummers
function updateUsedNumbers() {
    const container = document.getElementById('usedNumbers');
    
    // Sorteer de gebruikte nummers
    const sortedUsed = [...usedNumbers].sort((a, b) => a - b);
    
    // Check welke nummers al bestaan in de container
    const existingNumbers = Array.from(container.children).map(el => parseInt(el.textContent));
    
    // Vind nieuwe nummers die nog niet in de lijst staan
    const newNumbers = sortedUsed.filter(num => !existingNumbers.includes(num));
    
    // Als er nieuwe nummers zijn, herbouw de hele lijst (voor correcte sortering)
    if (newNumbers.length > 0) {
        container.innerHTML = '';
        
        sortedUsed.forEach((num, index) => {
            const span = document.createElement('span');
            span.className = 'used-number';
            span.textContent = num;
            span.style.backgroundColor = getNumberColor(num);
            
            // Alleen nieuwe nummers krijgen de animatie
            const isNew = newNumbers.includes(num);
            if (!isNew) {
                // Disable animatie voor bestaande nummers
                span.style.animation = 'none';
            }
            
            // Voeg tooltip toe met de stelling
            const statementData = statementHistory.find(s => s.number === num);
            if (statementData) {
                span.title = statementData.statement;
                span.style.cursor = 'pointer';
                
                // Klik om stelling te tonen
                span.addEventListener('click', () => {
                    const numberDisplay = document.getElementById('numberDisplay');
                    const statementDisplay = document.getElementById('statementDisplay');
                    
                    numberDisplay.textContent = num;
                    numberDisplay.style.backgroundColor = getNumberColor(num);
                    statementDisplay.textContent = statementData.statement;
                });
            }
            
            container.appendChild(span);
        });
    }
}

// Reset de huidige ronde
function resetRound() {
    if (currentRound === null) {
        alert('Selecteer eerst een ronde!');
        return;
    }
    
    if (confirm('Weet je zeker dat je deze ronde wilt resetten?')) {
        selectRound(currentRound);
        
        // Clear display statement
        currentDisplayStatement = '';
        
        // Clear display data
        localStorage.removeItem('bingo_currentNumber');
        localStorage.removeItem('bingo_currentStatement');
        localStorage.removeItem('bingo_numberColor');
        localStorage.removeItem('bingo_winner');
        localStorage.removeItem('bingo_goal_achieved');
        localStorage.setItem('bingo_celebration', 'false');
    }
}

// Toon vorige stelling
function showPreviousStatement() {
    if (statementHistory.length === 0) {
        alert('Geen vorige stelling beschikbaar!');
        return;
    }
    
    // Als we op de huidige stelling staan, ga naar de vorige
    if (historyIndex > 0) {
        historyIndex--;
    } else if (historyIndex === -1 && statementHistory.length > 0) {
        // Als we net begonnen zijn, start bij de laatste
        historyIndex = statementHistory.length - 1;
    } else {
        alert('Je bent al bij de eerste stelling!');
        return;
    }
    
    const previous = statementHistory[historyIndex];
    const numberDisplay = document.getElementById('numberDisplay');
    const statementDisplay = document.getElementById('statementDisplay');
    
    // Toon de stelling zonder animatie
    numberDisplay.textContent = previous.number;
    numberDisplay.style.backgroundColor = getNumberColor(previous.number);
    statementDisplay.textContent = `[Geschiedenis] ${previous.controlStatement || previous.statement}`;
    
    // Update display statement voor sync
    currentDisplayStatement = previous.displayStatement || previous.statement;
    
    // Sync naar display
    syncToDisplay();
}

// Toon volgende stelling uit geschiedenis (nieuwe functie)
function showNextInHistory() {
    if (historyIndex === -1 || historyIndex >= statementHistory.length - 1) {
        alert('Je bent al bij de laatste stelling!');
        return;
    }
    
    historyIndex++;
    const next = statementHistory[historyIndex];
    const numberDisplay = document.getElementById('numberDisplay');
    const statementDisplay = document.getElementById('statementDisplay');
    
    numberDisplay.textContent = next.number;
    numberDisplay.style.backgroundColor = getNumberColor(next.number);
    statementDisplay.textContent = `[Geschiedenis] ${next.controlStatement || next.statement}`;
    
    // Update display statement voor sync
    currentDisplayStatement = next.displayStatement || next.statement;
    
    // Sync naar display
    syncToDisplay();
}

// Fullscreen toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert('Fullscreen niet mogelijk: ' + err.message);
        });
        document.getElementById('fullscreenIcon').innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        document.exitFullscreen();
        document.getElementById('fullscreenIcon').innerHTML = '<i class="fas fa-expand"></i>';
    }
}

// Open bingokaarten generator
function openBingoCards() {
    window.open('bingokaarten.html', '_blank');
}

// Update BINGO doel display
function updateBingoGoal() {
    const goalElement = document.getElementById('bingoGoal');
    if (currentGoalIndex < bingoGoals.length) {
        const currentGoal = bingoGoals[currentGoalIndex];
        goalElement.textContent = currentGoal.name;
        goalElement.style.color = '#667eea';
    } else {
        goalElement.textContent = 'Alle doelen behaald! 🎉';
        goalElement.style.color = '#2ecc71';
    }
    
    // Sync naar display
    syncToDisplay();
}

// BINGO effect triggeren
function triggerBingo() {
    if (currentGoalIndex >= bingoGoals.length) {
        alert('Alle BINGO doelen zijn al behaald! 🎉');
        return;
    }
    
    const currentGoal = bingoGoals[currentGoalIndex];
    
    // Toon bevestigingsoverlay
    const overlay = document.getElementById('bingoConfirmOverlay');
    const goalNameElement = document.getElementById('bingoConfirmGoalText');
    goalNameElement.textContent = currentGoal.name;
    
    // Toon gebruikte nummers
    const usedNumbersContainer = document.getElementById('bingoUsedNumbers');
    usedNumbersContainer.innerHTML = '';
    
    usedNumbers.sort((a, b) => a - b).forEach(num => {
        const span = document.createElement('span');
        span.className = 'used-number';
        span.textContent = num;
        span.style.backgroundColor = getNumberColor(num);
        usedNumbersContainer.appendChild(span);
    });
    
    overlay.classList.remove('hidden');
    
    // Focus op naam invoerveld
    setTimeout(() => {
        document.getElementById('winnerName').focus();
    }, 100);
    
    // Toon pending BINGO op display
    localStorage.setItem('bingo_pending', 'true');
    localStorage.setItem('bingo_pending_goal', currentGoal.name);
}

// Update pending BINGO met naam
function updatePendingBingo() {
    const winnerName = document.getElementById('winnerName').value.trim();
    if (winnerName) {
        localStorage.setItem('bingo_pending_name', winnerName);
    } else {
        localStorage.removeItem('bingo_pending_name');
    }
}

// Bevestig of annuleer BINGO
function confirmBingo(isConfirmed) {
    // Verberg bevestigingsoverlay
    const confirmOverlay = document.getElementById('bingoConfirmOverlay');
    confirmOverlay.classList.add('hidden');
    
    // Clear pending status
    localStorage.setItem('bingo_pending', 'false');
    localStorage.removeItem('bingo_pending_name');
    localStorage.removeItem('bingo_pending_goal');
    
    if (!isConfirmed) {
        console.log('❌ BINGO geannuleerd');
        // Speel het "lost" geluid af bij foute bingo
        const lostAudio = new Audio('sounds/lost/take-the-l-fortnite-emote-audiotrimmer.mp3');
        if (typeof audioConfig !== 'undefined' && audioConfig.effects && typeof audioConfig.effects.volume === 'number') {
            lostAudio.volume = audioConfig.effects.volume;
        } else {
            lostAudio.volume = 1;
        }
        lostAudio.play().catch(e => console.log('Kan lost-audio niet afspelen:', e));
        return;
    }
    
    // Haal winnaarsnaam op
    const winnerNameInput = document.getElementById('winnerName');
    const winnerName = winnerNameInput.value.trim() || 'Onbekende speler';
    
    // Reset het invoerveld voor volgende keer
    winnerNameInput.value = '';
    
    // Bevestigde BINGO - markeer als behaald
    const currentGoal = bingoGoals[currentGoalIndex];
    currentGoal.achieved = true;
    
    // Speel BINGO effecten
    playBingoEffect();
    
    // Toon vieringsoverlay met winnaarsnaam
    const vieringOverlay = document.getElementById('bingoVieringOverlay');
    const goalNameElement = document.getElementById('bingoVieringGoalText');
    const winnerElement = document.getElementById('bingoVieringWinner');
    
    goalNameElement.textContent = currentGoal.name;
    winnerElement.textContent = `🏆 ${winnerName} heeft gewonnen! 🏆`;
    
    vieringOverlay.classList.remove('hidden');
    
    // Sync winnaar naar display
    localStorage.setItem('bingo_winner', winnerName);
    localStorage.setItem('bingo_goal_achieved', currentGoal.name);
    localStorage.setItem('bingo_celebration', 'true');
}

// Sluit viering en ga naar volgend doel
function closeBingoViering() {
    // Verberg vieringsoverlay
    const vieringOverlay = document.getElementById('bingoVieringOverlay');
    vieringOverlay.classList.add('hidden');
    
    // Clear celebration op display
    localStorage.setItem('bingo_celebration', 'false');
    
    // Ga naar volgend doel
    currentGoalIndex++;
    updateBingoGoal();
    
    // Toon overlay over volgend doel of voltooiing
    if (currentGoalIndex < bingoGoals.length) {
        setTimeout(() => {
            showVolgendDoelOverlay();
        }, 300);
    } else {
        setTimeout(() => {
            showAlleDoelentOverlay();
        }, 300);
    }
}

// Toon volgend doel overlay
function showVolgendDoelOverlay() {
    const overlay = document.getElementById('volgendDoelOverlay');
    const doelText = document.getElementById('volgendDoelText');
    doelText.textContent = bingoGoals[currentGoalIndex].name;
    overlay.classList.remove('hidden');
    
    // Sync naar display
    localStorage.setItem('bingo_next_goal_overlay', 'true');
    localStorage.setItem('bingo_next_goal_text', bingoGoals[currentGoalIndex].name);
}

// Sluit volgend doel overlay
function closeVolgendDoel() {
    const overlay = document.getElementById('volgendDoelOverlay');
    overlay.classList.add('hidden');
    
    // Clear display overlay
    localStorage.setItem('bingo_next_goal_overlay', 'false');
}

// Toon alle doelen behaald overlay
function showAlleDoelentOverlay() {
    const overlay = document.getElementById('alleDoelenhOverlay');
    overlay.classList.remove('hidden');
    
    // Sync naar display
    localStorage.setItem('bingo_all_goals_overlay', 'true');
}

// Sluit alle doelen overlay
function closeAlleDoelen() {
    const overlay = document.getElementById('alleDoelenhOverlay');
    overlay.classList.add('hidden');
    
    // Clear display overlay
    localStorage.setItem('bingo_all_goals_overlay', 'false');
    
    // Reset volledige spel na volle kaart BINGO
    if (confirm('Volle kaart BINGO behaald! Wil je het spel volledig resetten voor een nieuwe ronde?')) {
        // Reset ronde
        currentRound = null;
        availableNumbers = [];
        usedNumbers = [];
        statementHistory = [];
        totalStatements = 0;
        historyIndex = -1;
        
        // Reset BINGO doelen
        bingoGoals.forEach(goal => goal.achieved = false);
        currentGoalIndex = 0;
        
        // Reset UI
        document.getElementById('currentRound').textContent = 'Geen ronde geselecteerd';
        document.getElementById('numberDisplay').textContent = '-';
        document.getElementById('numberDisplay').style.backgroundColor = '#667eea';
        document.getElementById('statementDisplay').textContent = 'Selecteer een ronde om te beginnen';
        document.getElementById('usedNumbers').innerHTML = '';
        updateProgress();
        updateBingoGoal();
        
        // Deactiveer alle ronde knoppen
        document.querySelectorAll('.round-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Reset display volledig
        localStorage.removeItem('bingo_currentRound');
        localStorage.removeItem('bingo_currentGoal');
        localStorage.removeItem('bingo_currentNumber');
        localStorage.removeItem('bingo_currentStatement');
        localStorage.removeItem('bingo_usedNumbers');
        localStorage.removeItem('bingo_numberColor');
        localStorage.removeItem('bingo_winner');
        localStorage.removeItem('bingo_goal_achieved');
        localStorage.removeItem('bingo_updateTime');
        localStorage.setItem('bingo_celebration', 'false');
        localStorage.setItem('bingo_pending', 'false');
        localStorage.removeItem('bingo_pending_name');
        localStorage.removeItem('bingo_pending_goal');
        
        console.log('🔄 Spel volledig gereset na volle kaart BINGO');
    }
}

// Speel BINGO geluid effect
function playBingoEffect() {
    // Speel victory geluid
    if (effectSound) {
        effectSound.src = 'sounds/victory/pokimons.mp3';
        const volume = audioConfig.effects.volume || 0.5;
        console.log('🎵 Victory volume:', volume, 'Type:', typeof volume);
        effectSound.volume = volume;
        effectSound.play().catch(e => console.error('Error playing victory sound:', e));
    }
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkModeIcon');
    const isDark = document.body.classList.contains('dark-mode');
    
    icon.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Bewaar voorkeur
    localStorage.setItem('bingo_darkMode', isDark ? 'true' : 'false');
}

// Laad dark mode voorkeur bij opstarten
document.addEventListener('DOMContentLoaded', function() {
    const darkModePreference = localStorage.getItem('bingo_darkMode');
    if (darkModePreference === 'true') {
        document.body.classList.add('dark-mode');
        const icon = document.getElementById('darkModeIcon');
        if (icon) icon.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

window.toggleDarkMode = toggleDarkMode;

// Toggle Controls Panel
function toggleControlsPanel() {
    const panel = document.getElementById('controlsPanel');
    panel.classList.toggle('hidden');
}

window.toggleControlsPanel = toggleControlsPanel;

// Download Stellingen als PDF
function downloadStatementsPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const pageWidth = 210; // A4 width
        const margin = 20;
        const lineHeight = 8;
        let yPosition = 20;
        
        // Titel
        pdf.setFontSize(20);
        pdf.setFont(undefined, 'bold');
        pdf.text(`BINGO - Alle Stellingen`, margin, yPosition);
        
        yPosition += 15;
        
        // Loop door alle 3 rondes
        for (let roundNum = 1; roundNum <= 3; roundNum++) {
            if (roundNum > 1) {
                pdf.addPage();
                yPosition = 20;
            }
            const roundStatements = statements[roundNum];
            // Ronde titel
            pdf.setFontSize(16);
            pdf.setFont(undefined, 'bold');
            pdf.setTextColor(102, 126, 234); // Paarse kleur
            pdf.text(`Ronde ${roundNum}`, margin, yPosition);
            pdf.setTextColor(0);
            yPosition += 10;
            // Headers
            pdf.setFontSize(12);
            pdf.setFont(undefined, 'bold');
            if (roundNum === 2) {
                pdf.text('Nr', margin, yPosition);
                pdf.text('Vraag', margin + 15, yPosition);
                pdf.text('Antwoord', margin + 120, yPosition);
            } else {
                pdf.text('Nr', margin, yPosition);
                pdf.text('Stelling', margin + 15, yPosition);
            }
            yPosition += 5;
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 8;
            // Stellingen
            pdf.setFont(undefined, 'normal');
            pdf.setFontSize(10);
            // Houd bij op welke pagina's inhoud staat
            const usedPages = new Set();
            for (let num = 1; num <= 50; num++) {
                // Nummer
                pdf.setFont(undefined, 'bold');
                pdf.text(num.toString(), margin + 2, yPosition);
                // Vraag/Antwoord of Stelling
                if (roundNum === 2) {
                    const vraag = round2Questions[num] || '-';
                    const antwoord = statements[2][num] || '-';
                    pdf.setFont(undefined, 'normal');
                    const vraagMaxWidth = 100;
                    const vraagLines = pdf.splitTextToSize(vraag, vraagMaxWidth);
                    vraagLines.forEach((line, index) => {
                        pdf.text(line, margin + 15, yPosition + (index * lineHeight));
                    });
                    pdf.setFont(undefined, 'bold');
                    pdf.text(antwoord, margin + 120, yPosition);
                    yPosition += Math.max(lineHeight, vraagLines.length * lineHeight);
                } else {
                    const statement = roundStatements[num] || '-';
                    pdf.setFont(undefined, 'normal');
                    const maxWidth = pageWidth - margin - 35;
                    const lines = pdf.splitTextToSize(statement, maxWidth);
                    lines.forEach((line, index) => {
                        pdf.text(line, margin + 15, yPosition + (index * lineHeight));
                    });
                    yPosition += Math.max(lineHeight, lines.length * lineHeight);
                }
                // Voeg een nieuwe pagina toe als er te weinig ruimte is voor de volgende stelling
                if (yPosition > 270 && num < 50) {
                    pdf.addPage();
                    yPosition = 20;
                }
            }
        }
        
        // Footer op elke pagina
        const pageCount = pdf.internal.getNumberOfPages();
        // Verwijder laatste pagina als die leeg is
        if (pageCount > 1) {
            const lastPage = pageCount;
            pdf.setPage(lastPage);
            // Check of er tekst op de pagina staat (simpele check: yPosition is nog op startpositie)
            if (yPosition === 20) {
                pdf.deletePage(lastPage);
            }
        }
        
        // Download
        const date = new Date().toLocaleDateString('nl-NL').replace(/\//g, '-');
        pdf.save(`BINGO_Alle_Stellingen_${date}.pdf`);
        
    } catch (error) {
        console.error('PDF generatie fout:', error);
        alert('❌ PDF generatie mislukt. Controleer of jsPDF correct is geladen.');
    }
}

window.downloadStatementsPDF = downloadStatementsPDF;

// Sneltoetsen
document.addEventListener('keydown', (e) => {
    // Negeer keyboard shortcuts als een input veld focus heeft
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // Alleen Enter laten werken in input velden voor BINGO bevestiging
        if (e.key === 'Enter' && document.activeElement.id === 'winnerName') {
            const bingoConfirmOverlay = document.getElementById('bingoConfirmOverlay');
            if (!bingoConfirmOverlay.classList.contains('hidden')) {
                e.preventDefault();
                confirmBingo(true);
            }
        }
        return; // Stop verdere verwerking van shortcuts
    }
    
    // Enter = Actieve overlay doorgaan
    if (e.key === 'Enter') {
        // Check welke overlay actief is en klik de juiste knop
        const rondeStartOverlay = document.getElementById('rondeStartOverlay');
        const bingoConfirmOverlay = document.getElementById('bingoConfirmOverlay');
        const bingoVieringOverlay = document.getElementById('bingoVieringOverlay');
        const volgendDoelOverlay = document.getElementById('volgendDoelOverlay');
        const alleDoelenhOverlay = document.getElementById('alleDoelenhOverlay');
        
        if (!rondeStartOverlay.classList.contains('hidden')) {
            e.preventDefault();
            closeRondeStart();
        } else if (!bingoConfirmOverlay.classList.contains('hidden')) {
            e.preventDefault();
            confirmBingo(true); // Enter = JA bij bevestiging
        } else if (!bingoVieringOverlay.classList.contains('hidden')) {
            e.preventDefault();
            closeBingoViering();
        } else if (!volgendDoelOverlay.classList.contains('hidden')) {
            e.preventDefault();
            closeVolgendDoel();
        } else if (!alleDoelenhOverlay.classList.contains('hidden')) {
            e.preventDefault();
            closeAlleDoelen();
        }
    }
    
    // Backspace = BINGO weigeren
    if (e.key === 'Backspace') {
        const bingoConfirmOverlay = document.getElementById('bingoConfirmOverlay');
        if (!bingoConfirmOverlay.classList.contains('hidden')) {
            e.preventDefault();
            confirmBingo(false); // Backspace = NEE bij bevestiging
        }
    }
    
    // Escape = exit fullscreen
    if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
    }
    
    // Spatiebalk = volgende stelling
    if (e.code === 'Space') {
        e.preventDefault();
        nextStatement();
    }
    // R = herhaal laatste effect
    if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        replayLastEffect();
    }
    // B = BINGO!
    if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        triggerBingo();
    }
    // Pijltje links = vorige stelling
    if (e.key === 'ArrowLeft') {
        showPreviousStatement();
    }
    // Pijltje rechts = volgende in geschiedenis
    if (e.key === 'ArrowRight') {
        showNextInHistory();
    }
});

// Voeg CSS transitie toe voor animaties
document.addEventListener('DOMContentLoaded', () => {
    // Initialiseer audio
    initAudio();
    
    const displays = document.querySelectorAll('.display-box');
    displays.forEach(display => {
        display.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    });
    
    const numberDisplay = document.getElementById('numberDisplay');
    numberDisplay.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    
    // Clear celebration flag bij laden
    localStorage.setItem('bingo_celebration', 'false');
});

// Reset display scherm
function resetDisplay() {
    if (confirm('Weet je zeker dat je het display scherm wilt resetten?')) {
        localStorage.removeItem('bingo_currentRound');
        localStorage.removeItem('bingo_currentGoal');
        localStorage.removeItem('bingo_currentNumber');
        localStorage.removeItem('bingo_currentStatement');
        localStorage.removeItem('bingo_usedNumbers');
        localStorage.removeItem('bingo_numberColor');
        localStorage.removeItem('bingo_winner');
        localStorage.removeItem('bingo_goal_achieved');
        localStorage.removeItem('bingo_updateTime');
        localStorage.setItem('bingo_celebration', 'false');
        localStorage.setItem('bingo_pending', 'false');
        localStorage.removeItem('bingo_pending_name');
        localStorage.removeItem('bingo_pending_goal');
        localStorage.setItem('bingo_next_goal_overlay', 'false');
        localStorage.removeItem('bingo_next_goal_text');
        localStorage.setItem('bingo_all_goals_overlay', 'false');
        localStorage.setItem('bingo_round_start_overlay', 'false');
        localStorage.removeItem('bingo_round_start_number');
        localStorage.removeItem('bingo_round_start_goal');
        alert('Display scherm is gereset!');
    }
}

// Sync data naar display scherm via localStorage
function syncToDisplay() {
    try {
        // Huidige ronde met naam
        if (currentRound) {
            let roundName;
            if (currentRound === 1) {
                roundName = 'Ronde 1 - Stellingen';
            } else if (currentRound === 2) {
                roundName = 'Ronde 2 - Wie of Wat Ben Ik?';
            } else if (currentRound === 3) {
                roundName = 'Ronde 3 - Muziekronde';
            } else {
                roundName = `Ronde ${currentRound}`;
            }
            localStorage.setItem('bingo_currentRound', roundName);
        }
        
        // Huidig doel
        if (currentGoalIndex < bingoGoals.length) {
            localStorage.setItem('bingo_currentGoal', bingoGoals[currentGoalIndex].name);
        }
        
        // Huidig nummer
        const numberDisplay = document.getElementById('numberDisplay');
        const currentNumber = numberDisplay.textContent;
        if (currentNumber && currentNumber !== '-') {
            localStorage.setItem('bingo_currentNumber', currentNumber);
            localStorage.setItem('bingo_numberColor', numberDisplay.style.backgroundColor);
            localStorage.setItem('bingo_updateTime', Date.now().toString());
        }
        
        // Huidige stelling
        // Voor display: gebruik currentDisplayStatement (alleen vraag bij ronde 2)
        if (currentDisplayStatement && !currentDisplayStatement.includes('Klik op')) {
            console.log('Syncing display statement:', currentDisplayStatement);
            localStorage.setItem('bingo_currentStatement', currentDisplayStatement);
        }
        
        // Gebruikte nummers
        localStorage.setItem('bingo_usedNumbers', JSON.stringify(usedNumbers));
        
    } catch (error) {
        console.error('Fout bij sync naar display:', error);
    }
}

// Open display scherm in nieuw venster
function openDisplayWindow() {
    const displayWindow = window.open('display.html', 'BingoDisplay', 'width=1920,height=1080');
    if (displayWindow) {
        console.log('📺 Display scherm geopend');
    } else {
        alert('Kon display scherm niet openen. Controleer of pop-ups zijn toegestaan.');
    }
}

// Open het gordijn op het display scherm
function openCurtain() {
    localStorage.setItem('bingo_open_curtain', 'true');
    localStorage.setItem('bingo_paused', 'false');
    console.log('🎭 Gordijn wordt geopend op display');
    
    // Update pauze knop
    updatePauseButton(false);
}

// Toggle pauze functie
let isPaused = false;

function togglePause() {
    isPaused = !isPaused;
    localStorage.setItem('bingo_paused', isPaused ? 'true' : 'false');
    
    if (isPaused) {
        console.log('⏸️ Pauze geactiveerd');
    } else {
        // Bij hervatten: open gordijn
        localStorage.setItem('bingo_open_curtain', 'true');
        console.log('▶️ Pauze beëindigd');
    }
    
    updatePauseButton(isPaused);
}

function updatePauseButton(paused) {
    const pauseBtn = document.getElementById('pauseBtn');
    if (pauseBtn) {
        const icon = pauseBtn.querySelector('i');
        if (paused) {
            icon.className = 'fas fa-play';
            pauseBtn.title = 'Hervat';
            pauseBtn.style.background = '#27ae60';
        } else {
            icon.className = 'fas fa-pause';
            pauseBtn.title = 'Pauze / Hervat';
            pauseBtn.style.background = '#FF8C00';
        }
    }
}

// Maak functies globaal beschikbaar voor onclick handlers
window.triggerBingo = triggerBingo;
window.confirmBingo = confirmBingo;
window.closeBingoViering = closeBingoViering;
window.closeRondeStart = closeRondeStart;
window.closeVolgendDoel = closeVolgendDoel;
window.closeAlleDoelen = closeAlleDoelen;
window.openDisplayWindow = openDisplayWindow;
window.openCurtain = openCurtain;
window.togglePause = togglePause;
window.resetDisplay = resetDisplay;
window.updatePendingBingo = updatePendingBingo;

// Foto timer - countdown van 60 seconden
let photoCountdown = 60;

function updatePhotoTimer() {
    const timerElement = document.getElementById('photoTimer');
    if (timerElement) {
        timerElement.textContent = photoCountdown;
        
        photoCountdown--;
        
        if (photoCountdown < 0) {
            photoCountdown = 60; // Reset naar 60 seconden
        }
    }
}

// Start de foto timer
setInterval(updatePhotoTimer, 1000); // Update elke seconde

