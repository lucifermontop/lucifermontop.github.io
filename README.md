# my. — Projekt-Zuhause

Eine eigenständige, statische Startseite für MyVPN, MyJellyfin und weitere Projekte.
HTML, CSS und ein wenig optionales JavaScript, ohne Build-Schritt oder Framework.

## Lokal ansehen

Im Repository-Ordner starten:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Dann `http://127.0.0.1:4173` öffnen.

## GitHub Pages

In den Repository-Einstellungen unter **Pages → Build and deployment** die Quelle
**Deploy from a branch**, Branch **main**, Verzeichnis **/(root)** auswählen.
Die Seite ist anschließend unter `https://lucifermontop.github.io/` erreichbar.
Die Datei `.nojekyll` lässt GitHub die Dateien unverändert ausliefern.

## Inhalte ergänzen

- Texte, Projekte und Navigation: `index.html`.
- Farben, Layout und responsive Darstellung: `assets/style.css`.
- Eigene Gestaltung: Salbeigrün für MyVPN, Flieder für MyJellyfin, die gemeinsame `my.`-Wortmarke.
- Die Projektkarten zeigen bewusst **Projektseite folgt**. Sobald echte Projektseiten vorhanden sind, können sie verlinkt werden.
- MyVPN-Datenschutzseite: `MyVPN/privacy.html`, verlinkt im Datenschutzabschnitt
  der Startseite. Dies entspricht exakt der in der App hinterlegten URL
  `https://lucifermontop.github.io/MyVPN/privacy.html` (Groß-/Kleinschreibung beachten).
  Die Seite übernimmt den bereitgestellten Textentwurf und verwendet zusätzlich
  `assets/privacy.css` für das Dokumentlayout.
- Als Kontaktangabe ist ausschließlich `post@jmikloweit.de` hinterlegt.
  Die offenen Platzhalter aus dem Textentwurf wurden auf Wunsch entfernt;
  Name, Anschrift, Rechtsgrundlagen und Support-Löschfristen sind nicht angegeben.
- Vor dem öffentlichen Einsatz prüfen, ob ein Impressum erforderlich ist, und
  ggf. mit den tatsächlichen Angaben ergänzen.

## Schrift & Assets

Manrope wird lokal ausgeliefert. Die Lizenz liegt in `assets/fonts/OFL.txt`.
Alle übrigen Grafiken sind eigene SVG- und CSS-Elemente. Es gibt keine externen
Schriftaufrufe, Analyse-Skripte, Cookies oder externen JavaScript-Abhängigkeiten.
GitHub-Links werden erst bei einem Klick aufgerufen.
