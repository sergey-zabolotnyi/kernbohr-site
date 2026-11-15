# kernbohr-expert.de (Astro, statisch)

## Erstmalig / nach Updates
```
npm.cmd install
npm.cmd run dev
```
Dann http://localhost:4321 öffnen. (Auf Mac/Linux: `npm` statt `npm.cmd`.)

## Fotos und Videos einbinden
1. Dateien in den Ordner `originals` kopieren (Namen siehe `media.config.mjs`).
2. `npm.cmd run media` ausführen. Bilder werden optimiert (WebP) und automatisch auf den passenden Seiten angezeigt.
3. Zuordnung/Beschreibungen ändern: `media.config.mjs` und `src/data/services.js` (Feld `media`).

## Daten ändern
- Firmendaten: `src/data/site.js`
- Leistungen und FAQ: `src/data/services.js`
- Ratgeber-Artikel: `src/data/articles.js`
- **Preise** (Preisliste 2026): `src/data/preisliste.js`. Eine Quelle für Rechner und /preise/ (Staffel, Anfahrt, Mindestpreis, Zuschläge).
- Preistexte/FAQ: `src/data/preise.js`
- Video-Vorschaubilder: `public/posters/<id>.jpg`
- Alles in `[ ]` muss der Inhaber bestätigen.

## Builds
- `npm.cmd run build`: **Staging** (noindex, robots.txt sperrt alles)
- `npm.cmd run build:prod`: **Live** (ohne noindex, mit Sitemap). Nur nach Freigabe!
- Ergebnis liegt in `dist/`.

## Livegang
Backup der alten Seite, Weiterleitungen (`public/.htaccess` für Apache oder `public/_redirects` für Cloudflare/Netlify), Impressum und Datenschutz juristisch prüfen.

## Prüfung vor Livegang
`npm.cmd run check` baut die Live-Version und prüft alle Seiten (Titel, Beschreibungen, canonical, JSON-LD, Links, Sitemap, robots.txt, llms.txt, Preise, Keywords). Muss mit "OK: keine Fehler" enden.
KI-Dateien: `/llms.txt`, `/llms-full.txt`, `/firmendaten.json` (werden aus den Datendateien erzeugt, Preise nur in `src/data/preisliste.js` ändern).

## Chat-Assistent (optional, Cloudflare Worker)

Код: `worker/` (Worker) и `src/components/Chat.astro` (виджет). Виджет показывается **только** если задана переменная `PUBLIC_CHAT_URL`.

1. `cd worker` → `npx wrangler login` (аккаунт Cloudflare; **переносить DNS домена не нужно**, Worker живёт на адресе `*.workers.dev`).
2. В `wrangler.toml` проверьте `PROVIDER_URL`/`MODEL` (Groq или xAI Grok) и `ALLOWED_ORIGINS` (добавьте адрес тестового домена).
3. `npx wrangler secret put API_KEY` → вставьте ключ API (в репозиторий ключ не попадает).
4. `npx wrangler deploy` → получите адрес вида `https://kernbohr-chat.<аккаунт>.workers.dev`.
5. В корне сайта создайте файл `.env` со строкой `PUBLIC_CHAT_URL=https://kernbohr-chat.<аккаунт>.workers.dev` и пересоберите сайт.
6. В Datenschutz автоматически появляется раздел «Chat-Assistent» (нужна юридическая проверка и договор с провайдером).

### Заявки из чата по e-mail
Kerni сам ничего не отправляет: когда клиент просит предложение, он собирает имя, телефон, город и суть, а в чате появляется карточка. Только после галочки согласия и кнопки «Anfrage absenden» Worker (`POST /lead`) шлёт письмо Иону через Brevo (EU).
1. Регистрация на brevo.com (бесплатный тариф), в «Senders» добавить и подтвердить `info@kernbohr-expert.de`. Для лучшей доставки добавить в DNS домена записи SPF/DKIM, которые покажет Brevo.
2. «SMTP & API» → создать API-ключ.
3. `cd worker` → `npx wrangler secret put BREVO_API_KEY` → `npx wrangler deploy` (адреса `MAIL_TO`/`MAIL_FROM` в `wrangler.toml`).
4. Пересобрать сайт (если `PUBLIC_CHAT_URL` уже задан, больше ничего менять не надо). Datenschutz уже содержит абзац про отправку заявки (нужна юридическая проверка; перед запуском принять договор об обработке данных (AVV/DPA) в аккаунтах Brevo и Groq).

Цены бот не придумывает: он вызывает `berechne()` из `src/data/preisliste.js`. Лимит расходов задайте в кабинете провайдера API.
