# 🎯 BINGO Systeem - Twee-Schermen Modus

## 📋 Overzicht

Dit BINGO systeem heeft nu twee schermen:
1. **Bedieningspaneel** (index.html) - Voor de presentator
2. **Display Scherm** (display.html) - Voor het publiek

## 🚀 Hoe te gebruiken

### Stap 1: Start het Bedieningspaneel
- Open `index.html` in je browser
- Dit is het **bedieningspaneel** voor de presentator
- Alle knoppen en instellingen zijn hier beschikbaar

### Stap 2: Open het Display Scherm
- Klik op de **📺 knop** (linksboven in het bedieningspaneel)
- Dit opent `display.html` in een nieuw venster
- Plaats dit venster op je tweede scherm of projector
- Het display scherm toont:
  - Grote nummerballen met 3D effect
  - Stellingen in grote tekst
  - Huidige ronde en doel
  - Alle gebruikte nummers

### Stap 3: Bedien het spel
- Gebruik het **bedieningspaneel** om:
  - Ronde te selecteren
  - Volgende stelling te tonen
  - BINGO te triggeren
  - Audio in te stellen
- Het **display scherm** wordt automatisch bijgewerkt!

## 🔄 Synchronisatie

De twee schermen communiceren via **localStorage**:
- Elke actie in het bedieningspaneel wordt direct gesynchroniseerd
- Het display scherm update elke 100ms
- Geen internetverbinding nodig - werkt volledig lokaal

## 💡 Tips

### Voor de beste ervaring:
1. **Open display scherm in fullscreen** (F11)
2. Plaats het op je **tweede monitor of beamer**
3. Gebruik het bedieningspaneel op je **laptop/hoofdscherm**
4. Zorg dat beide vensters in **dezelfde browser** draaien (voor localStorage sync)

### Sneltoetsen (Bedieningspaneel):
- `Spatie` - Volgende stelling
- `B` - BINGO triggeren
- `Enter` - Bevestigen (in overlays)
- `Backspace` - Afwijzen (in overlays)
- `R` - Herhaal laatste geluid
- `←/→` - Navigeer door geschiedenis
- `F11` - Fullscreen

## 🎨 Display Scherm Layout

Het display scherm toont:
- **Links**: Ronde informatie en huidig doel
- **Rechtsboven**: Grote nummerbal met 3D effect en animatie
- **Rechtsonder**: Stelling in grote letters
- **Onderaan**: Alle gebruikte nummers

## 🔧 Technische Details

### Bestanden:
- `index.html` - Bedieningspaneel voor presentator
- `display.html` - Display scherm voor publiek
- `script.js` - Logica bedieningspaneel + localStorage sync
- `display.js` - Display scherm updates
- `style.css` - Styling bedieningspaneel
- `display.css` - Styling display scherm

### Data synchronisatie:
```javascript
localStorage items:
- bingo_currentRound: "Ronde 1"
- bingo_currentGoal: "Horizontale of Verticale Lijn"
- bingo_currentNumber: "42"
- bingo_numberColor: "#9b59b6"
- bingo_currentStatement: "Heeft ooit..."
- bingo_usedNumbers: "[1,5,12,42]"
- bingo_updateTime: "1699123456789"
```

## 📱 Browser Compatibiliteit

Getest en werkend in:
- ✅ Chrome/Edge (aanbevolen)
- ✅ Firefox
- ✅ Safari

**Let op**: Beide vensters moeten in dezelfde browser draaien voor localStorage synchronisatie!

## 🎯 Volgend gebruik

Bij het volgende gebruik:
1. Open `index.html`
2. Klik op 📺 om display scherm te openen
3. Klaar om te beginnen!

---

**Veel plezier met jullie BINGO avond! 🎉**
