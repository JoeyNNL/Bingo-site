// Stellingen per ronde - pas deze aan naar jouw stellingen
const statements = {
    1: {
        1: "Heeft ooit iets stoms gedaan om indruk te maken",
        2: "Is ooit betrapt op een leugen",
        3: "Heeft een slechte gewoonte die ze niet kunnen afleren",
        4: "Heeft ooit iets gestolen (hoe klein ook)",
        5: "Is weleens wakker geworden op een vreemde plek",
        6: "Heeft ooit iemand geblokkeerd en dat nooit uitgelegd",
        7: "Heeft ooit iets gezegd wat ze meteen betreurden",
        8: "Heeft een geheim dat niemand weet",
        9: "Heeft ooit een crush gehad op iemand die ze niet mochten leuk vinden",
        10: "Heeft ooit een dronken bericht gestuurd dat ze nu zouden verwijderen",
        11: "Heeft ooit een roddel verspreid",
        12: "Is ooit betrapt tijdens een gênant moment",
        13: "Heeft ooit iemand genegeerd zonder reden",
        14: "Heeft ooit gedaan alsof ze nuchter waren",
        15: "Heeft ooit iets stiekem weggegooid dat niet van hen was",
        16: "Heeft ooit een foute beslissing genomen op vakantie",
        17: "Heeft ooit iemand jaloers proberen te maken",
        18: "Heeft ooit iets gebroken op een feestje",
        19: "Heeft ooit een crush gehad op iemand van werk of school",
        20: "Heeft ooit iets verkeerd gestuurd naar de verkeerde persoon",
        21: "Heeft ooit een ex opgezocht op social media",
        22: "Heeft ooit gelogen om drama te vermijden",
        23: "Heeft ooit iemand laten wachten zonder reden",
        24: "Heeft ooit een gênante bijnaam gekregen",
        25: "Heeft ooit iemand ontweken in het openbaar",
        26: "Heeft ooit een vriendschap verwaarloosd",
        27: "Heeft ooit een avond verpest met te veel drank",
        28: "Heeft ooit iemand teleurgesteld en daar spijt van",
        29: "Heeft ooit een fout geheim gehouden",
        30: "Heeft ooit iets doms gekocht uit impuls",
        31: "Heeft ooit een foto verwijderd uit schaamte",
        32: "Heeft ooit een compliment niet gemeend",
        33: "Heeft ooit gedaan alsof ze iemand niet herkenden",
        34: "Heeft ooit een plan afgezegd met een smoes",
        35: "Heeft ooit iemand gebruikt voor aandacht",
        36: "Heeft ooit gelogen tijdens een spelletje",
        37: "Heeft ooit iets gedaan wat tegen hun principes inging",
        38: "Heeft ooit iemand genegeerd in een groepsapp",
        39: "Heeft ooit te veel gedeeld op social media",
        40: "Heeft ooit spijt gehad van eerlijkheid",
        41: "Heeft ooit iemand in deze groep beledigd (bewust of niet)",
        42: "Heeft ooit een geheim verteld dat niet van hen was",
        43: "Heeft ooit iets verdraaid om er beter uit te zien",
        44: "Heeft ooit een ander de schuld gegeven van hun fout",
        45: "Heeft ooit iets gedaan waar ze nu om kunnen lachen",
        46: "Heeft ooit een gênante uitspraak gedaan in gezelschap",
        47: "Heeft ooit iets vergeten wat belangrijk was",
        48: "Heeft ooit een vreemde versierd voor de grap",
        49: "Heeft ooit iets fout geïnterpreteerd en zich belachelijk gemaakt",
        50: "Heeft ooit iemand onterecht beschuldigd"
    },
    2: {
        1: "Heeft ooit gelogen over een relatie",
        2: "Heeft ooit gedaan alsof ze druk waren",
        3: "Heeft ooit een ex bericht gestuurd tegen beter weten in",
        4: "Heeft ooit iets gedaan wat totaal uit de hand liep",
        5: "Heeft ooit iemand laten struikelen (expres of niet)",
        6: "Heeft ooit een crush gehad op iemand in een relatie",
        7: "Heeft ooit een gênante spraakmemo gestuurd",
        8: "Heeft ooit iemand genegeerd om macht te houden",
        9: "Heeft ooit een domme uitdaging aangenomen",
        10: "Heeft ooit een geheim expres ontfutseld",
        11: "Heeft ooit iets kapot  gemaakt en gedaan alsof het niet zij waren",
        12: "Heeft ooit iemand laten lachen op een ongepast moment",
        13: "Heeft ooit een fout bericht doorgestuurd",
        14: "Heeft ooit een vriend(in) per ongeluk beledigd",
        15: "Heeft ooit gedaan alsof ze iemand aardig vonden terwijl dat niet zo was",
        16: "Heeft ooit een afspraak vergeten",
        17: "Heeft ooit gelogen om iemand beter te laten voelen",
        18: "Heeft ooit een domme weddenschap verloren",
        19: "Heeft ooit een crush verknald door iets stoms te zeggen",
        20: "Heeft ooit een slechte grap gemaakt op het verkeerde moment",
        21: "Heeft ooit te hard gelachen om andermans fout",
        22: "Heeft ooit iets stoms gedaan uit jaloezie",
        23: "Heeft ooit iets geheim gehouden voor de groep",
        24: "Heeft ooit een gênante voicemail achtergelaten",
        25: "Heeft ooit iets fout gedaan op werk/school",
        26: "Heeft ooit gedaan alsof ze iets snapten terwijl dat niet zo was",
        27: "Heeft ooit iemand per ongeluk genegeerd",
        28: "Heeft ooit een fout bericht naar hun baas gestuurd",
        29: "Heeft ooit iemand in verlegenheid gebracht zonder het te merken",
        30: "Heeft ooit iemand geghost zonder uitleg",
        31: "Heeft ooit iemand belachelijk gemaakt en er later spijt van gehad",
        32: "Heeft ooit iemand misleid met goede bedoelingen",
        33: "Heeft ooit iets doms gezegd tijdens een ruzie",
        34: "Heeft ooit een geheim niet kunnen bewaren",
        35: "Heeft ooit een cadeau hergebruikt",
        36: "Heeft ooit gedaan alsof ze ziek waren om thuis te blijven",
        37: "Heeft ooit iets gezegd dat verkeerd viel",
        38: "Heeft ooit iemand gemeden vanwege schuldgevoel",
        39: "Heeft ooit iets stoms gepost uit frustratie",
        40: "Heeft ooit gedaan alsof ze iemand vergaten",
        41: "Heeft ooit een crush geheim gehouden",
        42: "Heeft ooit een vriendschap beëindigd op een vreemde manier",
        43: "Heeft ooit een foute date gehad",
        44: "Heeft ooit een gênante herinnering verdrongen",
        45: "Heeft ooit iemand expres laten denken dat ze interesse hadden",
        46: "Heeft ooit een ander gebruikt om iemand jaloers te maken",
        47: "Heeft ooit een leugen verteld voor een grap",
        48: "Heeft ooit een fout geheim gehouden voor een vriend(in)",
        49: "Heeft ooit een gênant verhaal over zichzelf gedeeld",
        50: "Heeft ooit een ruzie verergerd door iets doms te zeggen"
    },
    3: {
        1: "Heeft ooit iemand laten schrikken met een prank",
        2: "Heeft ooit een fout toegegeven na weken ontkennen",
        3: "Heeft ooit iets fout gedaan maar het grappig gevonden",
        4: "Heeft ooit iets gestolen van een vriend(in)",
        5: "Heeft ooit een fout bericht gestuurd tijdens dronkenschap",
        6: "Heeft ooit iemand verraden zonder het te bedoelen",
        7: "Heeft ooit iemand genegeerd om drama te voorkomen",
        8: "Heeft ooit iemand laten denken dat ze boos waren voor aandacht",
        9: "Heeft ooit een gênante bijnaam gegeven die bleef hangen",
        10: "Heeft ooit een ongemakkelijke stilte veroorzaakt",
        11: "Heeft ooit iets stoms gedaan op vakantie",
        12: "Heeft ooit iemand onbewust beledigd",
        13: "Heeft ooit iets belangrijks vergeten op een feestje",
        14: "Heeft ooit iets romantisch geprobeerd dat mislukte",
        15: "Heeft ooit iemand verkeerd aangesproken in het openbaar",
        16: "Heeft ooit een grap verkeerd geïnterpreteerd",
        17: "Heeft ooit iets gepost en meteen verwijderd",
        18: "Heeft ooit iets fout onthouden en overtuigd volgehouden",
        19: "Heeft ooit iemand voor de grap gebeld en spijt gekregen",
        20: "Heeft ooit iemand per ongeluk gezoend",
        21: "Heeft ooit iets gedaan waar ze nog steeds om moeten lachen",
        22: "Heeft ooit een fout geheim gehouden voor de groep",
        23: "Heeft ooit een verkeerde naam gebruikt tijdens een gesprek",
        24: "Heeft ooit een verkeerde persoon getagd op social media",
        25: "Heeft ooit iemand laten struikelen (expres of niet)",
        26: "Heeft ooit een gênante foto laten circuleren",
        27: "Heeft ooit te veel gedeeld tijdens een dronken gesprek",
        28: "Heeft ooit gedaan alsof ze iets wisten wat niet zo was",
        29: "Heeft ooit iets fout gehoord en zich er druk om gemaakt",
        30: "Heeft ooit iemand laten geloven in een nepverhaal",
        31: "Heeft ooit een fout cadeau gegeven",
        32: "Heeft ooit te laat sorry gezegd",
        33: "Heeft ooit iets doms gekocht na middernacht",
        34: "Heeft ooit iets verkeerds gezegd tegen een crush",
        35: "Heeft ooit iemand verkeerd begrepen en boos geworden",
        36: "Heeft ooit een geheim opgebiecht aan de verkeerde persoon",
        37: "Heeft ooit een verkeerde afslag genomen in het leven (letterlijk of figuurlijk)",
        38: "Heeft ooit iemand per ongeluk laten huilen",
        39: "Heeft ooit een roddel ontkracht die waar bleek",
        40: "Heeft ooit een ex gezien en gedaan alsof ze hen niet zagen",
        41: "Heeft ooit een gênant moment op camera gehad",
        42: "Heeft ooit een ongemakkelijke stilte veroorzaakt tijdens eten",
        43: "Heeft ooit iemand uitgelachen op een verkeerd moment",
        44: "Heeft ooit een verkeerd nummer gebeld en meegepraat",
        45: "Heeft ooit iemand teleurgesteld door eerlijk te zijn",
        46: "Heeft ooit een belofte gedaan die ze niet nakwamen",
        47: "Heeft ooit iemand een bijnaam gegeven die ze niet leuk vonden",
        48: "Heeft ooit een fout bericht gestuurd in een groepsapp",
        49: "Heeft ooit te veel gelachen tijdens iets serieus",
        50: "Heeft ooit iets geks gedaan voor een weddenschap",
    }
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
            "die bweeg niet meer.mp3",
            "Donder.wav",
            "doritos.wav",
            "Dries - kan me niet schelen.mp3",
            "Dries - neuken.mp3",
            "Dries clipje.m4a",
            "Geen dick.wav",
            "Gewoon conte.wav",
            "Gewoon conte2.wav",
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

// Confetti animatie
function showConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#667eea'];
    
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((p, index) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
            
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            if (p.y > canvas.height) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(draw);
        }
    }
    
    draw();
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
    
    // Sync naar display
    localStorage.setItem('bingo_round_start_overlay', 'true');
    localStorage.setItem('bingo_round_start_number', roundNumber);
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
        showConfetti();
        return;
    }
    
    // Kies willekeurig nummer
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const selectedNumber = availableNumbers[randomIndex];
    
    // Verwijder nummer uit beschikbare nummers
    availableNumbers.splice(randomIndex, 1);
    usedNumbers.push(selectedNumber);
    
    // Haal stelling op
    const statement = statements[currentRound][selectedNumber];
    
    // Voeg toe aan geschiedenis
    statementHistory.push({ number: selectedNumber, statement: statement });
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
        statementDisplay.textContent = statement;
        
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
    
    // Confetti als laatste stelling
    if (availableNumbers.length === 0) {
        setTimeout(() => showConfetti(), 500);
    }
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
    statementDisplay.textContent = `[Geschiedenis] ${previous.statement}`;
    
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
    statementDisplay.textContent = `[Geschiedenis] ${next.statement}`;
    
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
        // Optioneel: speel een "fout" geluid
        if (effectSound) {
            playDingSound(); // Of een ander geluid voor foutieve BINGO
        }
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
    showMegaConfetti();
    
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
    // Speel nog een keer confetti voor de volledige voltooiing
    showMegaConfetti();
    
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

// Mega confetti voor BINGO
function showMegaConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c', '#e91e63'];
    
    // Veel meer confetti voor BINGO!
    for (let i = 0; i < 300; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 8 + 6,
            d: Math.random() * 15 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 20) - 10,
            tiltAngleIncremental: Math.random() * 0.1 + 0.05,
            tiltAngle: 0
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((p, index) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
            
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            if (p.y > canvas.height) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(draw);
        }
    }
    
    draw();
}

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
        // Huidige ronde
        if (currentRound) {
            localStorage.setItem('bingo_currentRound', `Ronde ${currentRound}`);
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
        const statementDisplay = document.getElementById('statementDisplay');
        const currentStatement = statementDisplay.textContent;
        if (currentStatement && !currentStatement.includes('Klik op')) {
            localStorage.setItem('bingo_currentStatement', currentStatement);
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

// Maak functies globaal beschikbaar voor onclick handlers
window.triggerBingo = triggerBingo;
window.confirmBingo = confirmBingo;
window.closeBingoViering = closeBingoViering;
window.closeRondeStart = closeRondeStart;
window.closeVolgendDoel = closeVolgendDoel;
window.closeAlleDoelen = closeAlleDoelen;
window.openDisplayWindow = openDisplayWindow;
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
            pdf.text('Nr', margin, yPosition);
            pdf.text('Stelling', margin + 15, yPosition);
            
            yPosition += 5;
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            
            yPosition += 8;
            
            // Stellingen
            pdf.setFont(undefined, 'normal');
            pdf.setFontSize(10);
            
            for (let num = 1; num <= 50; num++) {
                const statement = roundStatements[num] || '-';
                
                // Check if we need a new page
                if (yPosition > 270) {
                    pdf.addPage();
                    yPosition = 20;
                }
                
                // Nummer
                pdf.setFont(undefined, 'bold');
                pdf.text(num.toString(), margin + 2, yPosition);
                
                // Stelling (met text wrapping)
                pdf.setFont(undefined, 'normal');
                const maxWidth = pageWidth - margin - 35;
                const lines = pdf.splitTextToSize(statement, maxWidth);
                
                lines.forEach((line, index) => {
                    if (yPosition > 270) {
                        pdf.addPage();
                        yPosition = 20;
                    }
                    pdf.text(line, margin + 15, yPosition + (index * lineHeight));
                });
                
                yPosition += Math.max(lineHeight, lines.length * lineHeight);
            }
            
            // Ruimte tussen rondes (als het niet de laatste ronde is)
            if (roundNum < 3) {
                yPosition += 15;
                // Als er niet genoeg ruimte is, nieuwe pagina
                if (yPosition > 250) {
                    pdf.addPage();
                    yPosition = 20;
                }
            }
        }
        
        // Footer op elke pagina
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);
            pdf.setFontSize(8);
            pdf.setFont(undefined, 'italic');
            pdf.setTextColor(150);
            pdf.text(`Pagina ${i} van ${pageCount} - Mede mogelijk gemaakt door JoeyNNL`, margin, 285);
            pdf.setTextColor(0);
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
