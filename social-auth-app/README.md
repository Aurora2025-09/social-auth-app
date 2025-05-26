En kortfattad beskrivning av appen:

# Social Auth App

Denna app är en webbapp med registrerings- och inloggningsfunktionalitet. Express.js-servern sparar och hämtar användardata från en enkel ORM-liknande databas.

## Technologies
- Node.js, Express.js
- Cypress (e2e testing)
- Jest (unit testing)
- GitHub Actions (CI)

## Testing
- `npm test` - Jest tests
- `npx cypress open` - Cypress GUI
- GitHub CI runs on every push

Köra tester på utvecklargränssnittet:
npx cypress open

Köra tester i headless-läge (för CI):
npx cypress run