# 🎵 Audio Instructies - Bingo Site

## Overzicht
De Bingo-site ondersteunt nu achtergrondmuziek en geluidseffecten! Plaats je audio bestanden in de juiste mappen om ze te gebruiken.

## 📁 Mappenstructuur

```
Bingo-site/
├── sounds/
│   ├── background/     # Achtergrondmuziek
│   └── effects/        # Geluidseffecten
```

## 🎵 Achtergrondmuziek

### Locatie
Plaats je achtergrondmuziek in: `sounds/background/`

### Bestandsnamen
De site detecteert **automatisch alle audio bestanden** in de map! 
De naam maakt **helemaal niet uit** - geef je bestanden elke naam die je wilt:
- `mijn_favoriete_nummer.mp3`
- `1.mp3`, `2.mp3`, `3.mp3`
- `background_music.wav`
- `feestje.ogg`
- `whatever_you_want.m4a`

**✨ De site vindt al je bestanden automatisch, ongeacht de naam!**

### Eigenschappen
- ✅ Speelt automatisch in een loop
- ✅ Gaat naar het volgende nummer als het huidige eindigt
- ✅ Instelbaar volume (standaard 30%)
- ✅ Aan/uit knop in de interface (🔇/🔊 icoon)
- ✅ **Automatische detectie** van alle bestanden in de map

### Meer nummers toevoegen
Plaats gewoon meer bestanden in de map! De naam maakt niet uit - de site vindt ze allemaal.

## 🔊 Geluidseffecten

### Locatie
Plaats je geluidseffecten in: `sounds/effects/`

### Bestandsnamen
De site detecteert **automatisch alle audio bestanden** in de map! 
De naam maakt **helemaal niet uit** - geef je bestanden elke naam die je wilt:
- `boing.mp3`, `beep.wav`, `ding.ogg`
- `1.mp3`, `2.mp3`, `3.mp3`
- `cool_sound_effect.mp3`
- `whatever.m4a`

**✨ De site vindt al je bestanden automatisch, ongeacht de naam!**

### Eigenschappen
- ✅ Random effect bij elke nieuwe stelling
- ✅ Instelbaar volume (standaard 50%)
- ✅ Fallback naar synthetisch geluid als bestanden niet gevonden worden
- ✅ **Automatische detectie** van alle bestanden in de map

### Meer effecten toevoegen
Plaats gewoon meer bestanden in de map! De naam maakt niet uit - de site vindt ze allemaal.

## 🎛️ Bediening

### Muziek aan/uit
- Klik op de 🔇/🔊 knop rechtsboven
- Of plaats de muziek volume slider op 0%

### Volume aanpassen
- **Muziek slider**: Pas het volume van de achtergrondmuziek aan (0-100%)
- **Effecten slider**: Pas het volume van de geluidseffecten aan (0-100%)

## 📝 Ondersteunde formaten

De volgende audioformaten worden ondersteund in de meeste browsers:
- ✅ MP3 (aanbevolen - beste compatibiliteit)
- ✅ WAV
- ✅ OGG
- ✅ M4A

**Let op:** Gebruik bij voorkeur MP3 voor de beste browser-compatibiliteit!

## 🔍 Waar vind je gratis geluiden?

### Achtergrondmuziek
- [Incompetech](https://incompetech.com/music/royalty-free/)
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)

### Geluidseffecten
- [Freesound.org](https://freesound.org/)
- [Zapsplat](https://www.zapsplat.com/)
- [Mixkit Sound Effects](https://mixkit.co/free-sound-effects/)

## ⚙️ Technische Details

### Automatisch laden
De audio wordt automatisch geladen bij het openen van de pagina via de `initAudio()` functie.

### Fallback systeem
Als een audio bestand niet gevonden wordt:
- **Achtergrondmuziek**: Blijft stil, geen error
- **Geluidseffecten**: Gebruikt synthetische "ding" sound als fallback

### Browser beveiliging
Sommige browsers blokkeren autoplay. Als de muziek niet automatisch start:
1. Klik ergens op de pagina
2. Klik op de muziek knop (🔇)
3. De muziek zou nu moeten starten

## 🐛 Problemen oplossen

### Muziek speelt niet
1. ✅ Check of de bestanden in de juiste map staan (`sounds/background/`)
2. ✅ Check of de bestandsnamen exact kloppen (hoofdlettergevoelig!)
3. ✅ Controleer of het volume niet op 0% staat
4. ✅ Klik op de pagina en probeer de muziek knop opnieuw

### Effecten spelen niet
1. ✅ Check of de bestanden in de juiste map staan (`sounds/effects/`)
2. ✅ Check of de bestandsnamen exact kloppen
3. ✅ Controleer of het effecten volume niet op 0% staat
4. ✅ Open de browser console (F12) om eventuele errors te zien

### Bestanden niet gevonden
Controleer in de browser console (F12) op foutmeldingen zoals:
```
Muziekbestand niet gevonden: sounds/background/music1.mp3
Effect niet afgespeeld: [error details]
```

## 💡 Tips

1. **Optimaliseer je audio bestanden** - Houd de bestandsgrootte klein (MP3 128kbps is meestal voldoende)
2. **Normaliseer het volume** - Zorg dat alle bestanden ongeveer even hard zijn
3. **Test verschillende browsers** - Chrome, Firefox, Safari kunnen verschillend reageren
4. **Gebruik korte effecten** - Idealiter 0.5-2 seconden voor geluidseffecten
5. **Achtergrondmuziek** - Kies rustige, niet te opdringerige nummers voor de beste ervaring
6. **Elke naam is OK** - Je kunt je bestanden noemen zoals je wilt, de site vindt ze automatisch!
7. **Browser Console** - Open de console (F12) om te zien welke bestanden de site heeft gevonden: "🎵 Gevonden muziek: X bestand(en)"
8. **Laden duurt even** - Bij het eerste laden scant de site naar alle mogelijke bestanden (dit duurt een paar seconden)

## 📧 Vragen?

Heb je problemen of vragen? Check de browser console (F12) voor technische details en error berichten.

---

Veel plezier met je Bingo-avond! 🎉
