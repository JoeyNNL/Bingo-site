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
        files: [],
        currentIndex: 0,
        volume: 0.3
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
        volume: 0.5
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

// Initialiseer audio bij laden van pagina
function initAudio() {
    backgroundMusic = document.getElementById('backgroundMusic');
    effectSound = document.getElementById('effectSound');
    
    // Bouw volledige paden voor effecten
    audioConfig.effects.files = audioConfig.effects.files.map(file => 
        audioConfig.effects.folder + file
    );
    
    console.log('🔍 Audio systeem geladen');
    console.log(`🎵 Achtergrondmuziek: ${audioConfig.backgroundMusic.files.length} bestand(en)`);
    console.log(`🔊 Geluidseffecten: ${audioConfig.effects.files.length} bestand(en)`);
    
    // Initialiseer de shuffled playlist voor effecten
    if (audioConfig.effects.files.length > 0) {
        initEffectsPlaylist();
    }
    
    // Stel volumes in
    if (backgroundMusic) {
        backgroundMusic.volume = audioConfig.backgroundMusic.volume;
        
        // Laad eerste achtergrondmuziek
        if (audioConfig.backgroundMusic.files.length > 0) {
            loadBackgroundMusic();
            
            // Event listener voor als muziek eindigt, speel volgende
            backgroundMusic.addEventListener('ended', playNextBackgroundMusic);
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
    
    const musicFile = audioConfig.backgroundMusic.files[audioConfig.backgroundMusic.currentIndex];
    backgroundMusic.src = musicFile;
    
    // Probeer te laden, als het mislukt gebruik fallback
    backgroundMusic.addEventListener('error', () => {
        console.log('Muziekbestand niet gevonden:', musicFile);
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
        document.getElementById('musicIcon').textContent = '🔇';
    } else {
        backgroundMusic.play()
            .then(() => {
                isMusicPlaying = true;
                document.getElementById('musicIcon').textContent = '🔊';
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
        
        // Animatie in
        numberDisplay.style.transform = 'scale(1) rotate(0deg)';
        statementDisplay.style.transform = 'scale(1)';
        statementDisplay.style.opacity = '1';
        
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
    container.innerHTML = '';
    
    // Sorteer de gebruikte nummers
    const sortedUsed = [...usedNumbers].sort((a, b) => a - b);
    
    sortedUsed.forEach(num => {
        const span = document.createElement('span');
        span.className = 'used-number';
        span.textContent = num;
        span.style.backgroundColor = getNumberColor(num);
        
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

// Reset de huidige ronde
function resetRound() {
    if (currentRound === null) {
        alert('Selecteer eerst een ronde!');
        return;
    }
    
    if (confirm('Weet je zeker dat je deze ronde wilt resetten?')) {
        selectRound(currentRound);
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
}

// Fullscreen toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert('Fullscreen niet mogelijk: ' + err.message);
        });
        document.getElementById('fullscreenIcon').textContent = '⛶';
    } else {
        document.exitFullscreen();
        document.getElementById('fullscreenIcon').textContent = '⛶';
    }
}

// Open bingokaarten generator
function openBingoCards() {
    window.open('bingokaarten.html', '_blank');
}

// Sneltoetsen
document.addEventListener('keydown', (e) => {
    // Spatiebalk = volgende stelling
    if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        nextStatement();
    }
    // R = herhaal laatste effect
    if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        replayLastEffect();
    }
    // Pijltje links = vorige stelling
    if (e.key === 'ArrowLeft') {
        showPreviousStatement();
    }
    // Pijltje rechts = volgende in geschiedenis
    if (e.key === 'ArrowRight') {
        showNextInHistory();
    }
    // Escape = exit fullscreen
    if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
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
});
