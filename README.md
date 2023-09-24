# TKT20019 - Tietokannat ja web-ohjelmointi
## Keskustelusovellus - implementoitavat ominaisuudet
- Käyttäjä voi kirjautua sisään ja ulos sekä luoda uuden tunnuksen.
- Käyttäjä näkee sovelluksen etusivulla listan alueista sekä jokaisen alueen ketjujen ja viestien määrän ja viimeksi lähetetyn viestin ajankohdan.
- Käyttäjä voi luoda alueelle uuden ketjun antamalla ketjun otsikon ja aloitusviestin sisällön.
- Käyttäjä voi kirjoittaa uuden viestin olemassa olevaan ketjuun.
- Käyttäjä voi muokata luomansa ketjun otsikkoa sekä lähettämänsä viestin sisältöä. Käyttäjä voi myös poistaa ketjun tai viestin.
- Käyttäjä voi etsiä kaikki viestit, joiden osana on annettu sana.
- Ylläpitäjä voi lisätä ja poistaa keskustelualueita.
- Ylläpitäjä voi luoda salaisen alueen ja määrittää, keillä käyttäjillä on pääsy alueelle.

## Ympäritön luonti ja ajaminen
Tämän projektin ympäristö vaatii seuraavan npm paketin `pnpm` jonka voi asentaa globaaliksi paketiksi komennolla `npm i -g pnpm`.

Kehityspalvelimen voi käynnistää komennolla `npm run dev`.
Flask-backend toimii portilla `:5328` ja Nextj-frontend portilla `:3000`.

**Hox!** Database ominaisuudet puuttuvat vielä kokonaan.