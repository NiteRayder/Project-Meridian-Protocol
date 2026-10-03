# Project: Meridian Protocol

**Project: Meridian Protocol** is a narrative-driven psychological mystery game being developed for **Roblox** by **NiteRayder** under **Horizon Forge Studios**.

The project is designed around player choice, fractured realities, branching narrative paths, hidden player-state systems, and consequences that can change how the story unfolds.

## Core Design

- Branching narrative and meaningful player choices
- Fractured timelines and changing reality states
- Psychological mystery and investigation
- Hidden player-state systems
- Relationship-driven narrative changes
- Evidence, contradictions, and discoveries
- Replayability through different choices and outcomes
- Multiple possible endings
- Server-authoritative progression and persistent state

## Technical Direction

The project is intended to use a modular Roblox architecture with a clear separation between:

- **Client**: interface, input, camera, local presentation, visual effects, and audio
- **Server**: progression, player state, narrative state, timeline state, persistence, validation, and ending eligibility
- **Shared**: common constants, types, identifiers, utilities, and data definitions

Consequential game state should remain server-authoritative. The client should not be trusted with hidden statistics, progression, ending conditions, or other state that affects the integrity of the experience.

## Development Status

**Early development.**

This repository will contain the game's source code, documentation, development tooling, and supporting project assets as development progresses.

Design details are subject to change while the game's systems and narrative are being developed.

## Project Identity

- **Game:** Project: Meridian Protocol
- **Platform:** Roblox
- **Developer:** NiteRayder
- **Studio:** Horizon Forge Studios
- **Repository:** NiteRayder/Project-Meridian-Protocol

## Licensing

The project's source code and original creative assets are protected by the license included in this repository. Third-party dependencies and assets remain subject to their respective licenses.

---

*Project: Meridian Protocol is an independent game project. Roblox is a trademark of Roblox Corporation.*
