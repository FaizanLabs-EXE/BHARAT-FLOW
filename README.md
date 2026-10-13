# BharatFlow AI — Private Life OS

**⟦ 𝐁𝐔𝐈𝐋𝐓 𝐁𝐘 𝐅𝐀𝐈𝐙𝐀𝐍 ⟧**

BharatFlow AI is a serverless, installable Progressive Web App for everyday productivity in India. It combines a multi-model OpenRouter workspace, document drafting, local budgeting, smart tasks, voice input, offline caching, backup/restore and an IndexedDB vault in only seven files.

## Why this project fits Faizan Labs

The profile and repositories show a clear pattern: static HTML apps, AI integration, automation, GitHub intelligence, local storage and strong dashboard UI. BharatFlow brings those strengths into one practical product for students, employees, households, freelancers and small businesses.

## Features

- Responsive premium dashboard with seven functional tabs
- OpenRouter model discovery and model selection
- Optional fallback across preferred models
- Five AI roles: everyday, student, career, small business and multilingual writer
- Local document templates for applications, complaints, jobs, reminders, meetings and requests
- Expense ledger, monthly budget progress and CSV export
- Task priorities, due dates, completion filters and in-app notifications
- IndexedDB vault for private local notes and AI sessions
- Full JSON backup and restore
- Installable PWA with offline app shell
- No framework, build tool, account or app server


## OpenRouter setup

1. Open BharatFlow **Settings**.
2. Paste your own OpenRouter API key.
3. Select **Save & load models**.
4. Optionally select preferred fallback models.

The key is stored in this browser's IndexedDB and is sent directly from the browser to OpenRouter. Never commit a key to GitHub. Use a restricted key and configure a spending limit.

## Important technical limits

- A static PWA cannot guarantee uninterrupted 24x7 execution. The service worker may be suspended and scheduled work stops when the browser is closed.
- Local browser storage is private from the app server because there is no app server, but it is not a substitute for OS-level encryption. Anyone with access to the browser profile may access it.
- AI requests require internet access, a valid user-supplied key and an available model. Saved data and the app shell work offline.
- Browser notifications in this build are checked while the app is open. Reliable background schedules require a backend or native platform service.
- AI output may be inaccurate. Verify financial, legal, medical and government information using official sources.

## License

Add the license that best matches your intended distribution before publishing.
