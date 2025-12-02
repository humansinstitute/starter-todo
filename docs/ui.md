# UI Guide

How the UI is structured, how data refreshes, and how to adjust styles quickly.

## Structure
- Single HTML page rendered server-side in `src/server.ts` with inline `<style>` and `<script type="module">`.
- Primary sections:
  - Header (title + session controls)
  - Auth panel (sign-in options)
  - Hero entry (add todo form)
  - Work list + archive toggle
  - Archive list (optional)
  - Summaries panel (hidden unless data exists)

## Components & Refresh Flow
- `state` object in inline script: `{ session, summaries }`.
- `refreshUI()` is the central redraw hook: calls `updatePanels()` → `updateHeroState()`, `updateAvatar()`, `updateSummaryUI()`.
- Session changes:
  - On login: `completeLogin()` sets `state.session`, fetches summaries, calls `refreshUI()`, then reloads the page to pull todo lists.
  - On logout: clears session, clears summaries, calls `refreshUI()`.
- Summaries:
  - `fetchSummaries()` calls `/ai/summary/latest?owner=npub…` and stores `{ day, week }` in `state.summaries`.
  - `updateSummaryUI()` shows/hides the summaries panel based on presence of day/week/suggestions and session.
- Todos:
  - Server renders active and archive lists; after login the page reload ensures the latest todos.
  - Form submissions post to server routes and redirect.
- Avatar menu:
  - Toggle via button; closes on outside click; loads profile picture via nostr libs.

## Styling
- All CSS lives in the `<style>` block in `src/server.ts`.
- To update colors/spacing:
  - Modify existing variables/selectors directly in the `<style>` block.
  - Keep component class names: `.summary-panel`, `.summary-card`, `.todo-body`, `.auth-panel`, etc.
- Layout:
  - Page constrained to `max-width: 640px` with padding.
  - Flex/grid used in small areas (e.g., `.summary-grid`).
- Adding new components:
  - Add markup in `renderPage` near the desired location.
  - Add matching styles in the `<style>` block.
  - Wire data via inline script and `refreshUI()` for dynamic pieces.

## Refresh Patterns (when to call what)
- After any state mutation on the client (login/logout, summaries fetched): call `refreshUI()`.
- For todo changes, server posts redirect to `/`; page reload handles state; no client mutation needed.
- Summaries data loads on login and when `fetchSummaries()` is invoked; call `updateSummaryUI()` afterward (already done in `fetchSummaries()`).

## Quick Style Tweaks Checklist
1) Edit `<style>` in `src/server.ts` (colors, radius, spacing, typography).
2) Keep CSS selectors stable; avoid adding new fonts unless necessary.
3) Run `bun run lint` to ensure inline script parses.
4) Use `bun dev --hot` for live reload when tweaking styles.

## Visibility Rules
- Auth panel: hidden when `state.session` exists.
- Session controls: shown when `state.session` exists.
- Summaries panel: hidden unless session exists AND at least one of day/week/suggestions is present.
- Hero input: disabled without session.
