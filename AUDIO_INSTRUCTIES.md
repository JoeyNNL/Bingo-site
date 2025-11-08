# 🎵 Audio Instructies - Bingo Site

## Overzicht
De Bingo-site ondersteunt nu achtergrondmuziek en geluidseffecten! Plaats je audio bestanden in de juiste mappen en registreer ze in het manifest bestand.

## 📁 Mappenstructuur

```
Bingo-site/
├── sounds/
│   ├── audio-files.json    # Manifest bestand (BELANGRIJK!)
│   ├── background/         # Achtergrondmuziek
│   └── effects/            # Geluidseffecten
```

## ⚙️ Setup Stappen

### 1️⃣ Plaats je audio bestanden
- Achtergrondmuziek → `sounds/background/`
- Geluidseffecten → `sounds/effects/`

### 2️⃣ Registreer je bestanden in audio-files.json
Bewerk het bestand `sounds/audio-files.json` en voeg je bestandsnamen toe:

```json
{
  "background": [
    "mijn_nummer.mp3",
    "cool_song.wav",
    "track3.ogg"
  ],
  "effects": [
    "boing.mp3",
    "ding.wav",
    "beep.ogg",
    "sound4.m4a",
    "effect5.mp3"
  ]
}
```

**Let op:** 
- Alleen de bestandsnaam opgeven (niet het volledige pad)
- De naam moet exact kloppen (hoofdlettergevoelig!)
- Gebruik komma's tussen bestandsnamen

## 🎵 Achtergrondmuziek

### Locatie
Plaats je achtergrondmuziek in: `sounds/background/`

### Bestandsnamen
De naam maakt **helemaal niet uit** - geef je bestanden elke naam die je wilt:
- `mijn_favoriete_nummer.mp3`
- `1.mp3`, `2.mp3`, `3.mp3`
- `background_music.wav`
- `feestje.ogg`
- `whatever_you_want.m4a`

**✨ Maar je MOET ze registreren in `sounds/audio-files.json`!**

### Voorbeeld
1. Plaats `cool_song.mp3` in `sounds/background/`
2. Voeg toe aan `audio-files.json`:
```json
{
  "background": [
    "cool_song.mp3"
  ],
  ...
}
```

### Eigenschappen
- ✅ Speelt automatisch in een loop
- ✅ Gaat naar het volgende nummer als het huidige eindigt
- ✅ Instelbaar volume (standaard 30%)
- ✅ Aan/uit knop in de interface (🔇/🔊 icoon)

### Meer nummers toevoegen
1. Plaats meer bestanden in de map
2. Voeg ze toe aan het `background` array in `audio-files.json`

## 🔊 Geluidseffecten

### Locatie
Plaats je geluidseffecten in: `sounds/effects/`

### Bestandsnamen
De naam maakt **helemaal niet uit** - geef je bestanden elke naam die je wilt:
- `boing.mp3`, `beep.wav`, `ding.ogg`
- `1.mp3`, `2.mp3`, `3.mp3`
- `cool_sound_effect.mp3`
- `whatever.m4a`

**✨ Maar je MOET ze registreren in `sounds/audio-files.json`!**

### Voorbeeld
1. Plaats `ding.mp3` in `sounds/effects/`
2. Voeg toe aan `audio-files.json`:
```json
{
  ...,
  "effects": [
    "ding.mp3"
  ]
}
```

### Eigenschappen
- ✅ Random effect bij elke nieuwe stelling
- ✅ Instelbaar volume (standaard 50%)
- ✅ Fallback naar synthetisch geluid als bestanden niet gevonden worden

### Meer effecten toevoegen
1. Plaats meer bestanden in de map
2. Voeg ze toe aan het `effects` array in `audio-files.json`

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

### Muziek/effecten spelen niet
1. ✅ Check of de bestanden in de juiste map staan
2. ✅ Check of de bestandsnamen in `audio-files.json` exact kloppen (hoofdlettergevoelig!)
3. ✅ Controleer of het volume niet op 0% staat
4. ✅ Klik op de pagina en probeer de muziek knop opnieuw
5. ✅ Open de browser console (F12) voor foutmeldingen

### audio-files.json niet gevonden
Als je in de console ziet: `⚠️ audio-files.json niet gevonden`
1. ✅ Zorg dat het bestand bestaat in de `sounds/` map
2. ✅ Check de bestandsnaam (moet exact `audio-files.json` zijn)
3. ✅ Zorg dat het geldige JSON is

### JSON fouten
Als je een error ziet over JSON:
1. ✅ Check of je komma's op de juiste plek hebt
2. ✅ Check of je aanhalingstekens correct zijn (`"bestand.mp3"`)
3. ✅ Gebruik een JSON validator: https://jsonlint.com/

### Bestanden niet gevonden
Controleer in de browser console (F12):
```
🎵 Achtergrondmuziek: 3 bestand(en) [...]
🔊 Geluidseffecten: 5 bestand(en) [...]
```
Als je errors ziet, check of de bestanden echt in de mappen staan.

## 💡 Tips

1. **Optimaliseer je audio bestanden** - Houd de bestandsgrootte klein (MP3 128kbps is meestal voldoende)
2. **Normaliseer het volume** - Zorg dat alle bestanden ongeveer even hard zijn
3. **Test verschillende browsers** - Chrome, Firefox, Safari kunnen verschillend reageren
4. **Gebruik korte effecten** - Idealiter 0.5-2 seconden voor geluidseffecten
5. **Achtergrondmuziek** - Kies rustige, niet te opdringerige nummers voor de beste ervaring
6. **Elke naam is OK** - Zolang je ze maar registreert in `audio-files.json`
7. **Browser Console** - Open de console (F12) om te zien welke bestanden zijn geladen
8. **JSON Syntax** - Zorg dat je JSON geldig is (gebruik een validator zoals jsonlint.com)

## 📧 Vragen?

Heb je problemen of vragen? Check de browser console (F12) voor technische details en error berichten.

---

Veel plezier met je Bingo-avond! 🎉
