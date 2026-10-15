# Project: Meridian Protocol

**Project: Meridian Protocol** is a narrative-driven psychological mystery game being developed for **Roblox** by **NiteRayder** under **Horizon Forge Studios**.

The project explores player choice, fractured realities, branching narratives, hidden player-state systems, and consequences that can change how the story unfolds.

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

## How We Develop Ideas

Ideas begin as possibilities, not canon. We want to preserve the excitement and context behind an idea while checking that it can support the story and become a clear player experience.

1. **Capture the spark.** Record the question, image, character moment, mechanic, or contradiction that started the idea. Keep early notes rough; do not silently treat them as established lore.
2. **Explore possibilities.** Generate several versions, combine promising parts, and note what each version could make the player feel, discover, or choose.
3. **Connect it to the game.** Identify how it relates to existing characters, anomalies, organizations, timelines, gameplay, and the Roblox experience. Mark assumptions and conflicts as questions.
4. **Pressure-test it.** Check story consistency, player understanding, emotional effect, technical feasibility, and whether the idea creates useful choices or discoveries.
5. **Record the decision.** Mark the idea as *Exploring*, *In Development*, *Working Canon*, *Confirmed*, *Parked*, or *Retired*. Include who made the decision, when, why, and what still needs answering.
6. **Update connected documentation.** When an idea changes, update the affected character, lore, gameplay, or technical notes and link related entries. Keep important earlier decisions traceable instead of erasing their history.

### Idea Record

Use this lightweight record for ideas that need to be revisited or shared:

```text
Title:
Status:
Date / author:
Starting question or spark:
Core idea:
Intended player experience:
Connections to existing story or systems:
Possible Roblox implementation:
Alternatives explored:
Decision and reason:
Open questions / next step:
```

Brainstorming notes can stay informal. This record is for capturing the context and outcome once an idea is worth carrying forward. An idea only becomes canon when it is explicitly reviewed and marked accordingly.

## Narrative and Game Design

- Branching narrative and meaningful player choices
- Fractured timelines and changing reality states
- Psychological mystery and investigation
- Relationship-driven narrative changes
- Evidence, contradictions, and discoveries
- Replayability through different choices and outcomes
- Multiple possible endings

## Technical Direction

The project is intended to use a modular Roblox architecture with a clear separation between:

- **Client:** interface, input, camera, local presentation, visual effects, and audio
- **Server:** progression, player state, narrative state, timeline state, persistence, validation, and ending eligibility
- **Shared:** common constants, types, identifiers, utilities, and data definitions

Consequential game state should remain server-authoritative. The client should not be trusted with hidden statistics, progression, ending conditions, or other state that affects the integrity of the experience.

## Project Structure

- `Roblox/` — Roblox-facing source prototypes and setup notes
- `Maps/` — a Studio command-bar builder and layout notes for the first playable OSAE facility blockout
- `Prototype/Browser/` — standalone visual simulation used to explore the loading-screen concept
- `Animations/` — movement-set design, a draft clip catalog, and a Studio preview harness
- `Models/` and `UGC/` — supporting project assets
- `images(appearance)/` — visual identity and appearance references

The browser simulation is a design reference. The in-game experience should be implemented with Roblox UI and Luau.

## Documentation Roadmap

For now, this README is the project overview and the starting point for the idea-development process. As the documentation grows, detailed material can move into a project wiki, with this README linking to its main areas:

- Lore, timelines, and canon decisions
- Characters, organizations, and anomalies
- Gameplay, UI, and player experience
- Technical architecture and implementation notes
- Decision history and open questions

Until a wiki exists, keep useful design records and implementation notes in the repository and link them here. Keep brainstorming clearly labeled so exploratory ideas are not confused with established canon.

## Development Status

**Early development.** Design details are subject to change while the game's systems and narrative are being developed.

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
