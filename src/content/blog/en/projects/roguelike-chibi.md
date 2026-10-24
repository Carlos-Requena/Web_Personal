---
title: Roguelike Chibi
link: roguelike-chibi
catalog: true
date: 2026-02-24 00:00:00
description: A Roguelike video game developed in Unity featuring Context Steering AI, procedural dungeon generation, Object Pooling system, and Chibi character design.
cover: /img/cover/1.webp
tags:
  - "Unity"
  - "C#"
  - "Game Development"
  - "Artificial Intelligence"
categories:
  - Projects
sticky: false
order: 3
projectType: "University project"
stack:
  - "Unity"
  - "C#"
  - "Context Steering"
noAi: true
---

Roguelike Chibi is a roguelike video game developed in Unity. The game features procedurally generated dungeons, characters and enemies with a Chibi aesthetic, an AI system based on Context Steering, and a modular architecture focused on object reuse and separation of concerns.

## 🚀 Key Features

- **Context Steering AI**: Artificial intelligence for enemies based on weight vectors and danger/interest maps.
- **Two Enemy Types**: Minions that chase directly and Warriors that maintain distance and flank the player.
- **Procedural Generation**: Dungeons generated from presets based on the chosen character and difficulty.
- **Object Pool**: Reuse system for weapon instances to optimize memory usage.
- **Animation System**: `IAnimatorUsaObjeto` interface managing movement, attack, and item usage animations.
- **Character & Difficulty Selection**: Available from the main menu before starting the game.
- **Controller Support**: Options menu with key remapping and controller support.

## 🛠️ Tech Stack

- **Engine**: Unity
- **Language**: C#
- **Patterns**: Singleton, Object Pool, Observer (static events), State Machine (State Enum)
- **Data Design**: Scriptable Objects for potion buffs and item configurations
- **AI**: Context Steering (based on specialized game AI literature)

## 🤖 Artificial Intelligence — Context Steering

The AI system is the technical core of the project. Each enemy evaluates an array of possible directions and assigns a weight to each one using the **dot product** between the candidate direction and the desired direction (usually towards the player).

Weights are adjusted based on:
- **Distance to player**: Higher weight the closer they are.
- **Safety distance**: Warriors penalize directions that bring them too close.
- **Danger and Interest Maps**: Mask base weights to avoid collisions and adapt movement to the environment.

### Enemy Types

| Type | Behavior |
|---|---|
| **Minion** | Chases the player directly without advanced Context Steering. |
| **Warrior** | Maintains distance and flanks the player using the full weight vector. |

Both types attack when in range and respect a cooldown time between attacks. Enemy weapons are assigned randomly from the **Object Pool**.

## 📦 Object Pool

The Object Pool is a system for managing pre-created instances. At the start of the game, ~20 weapons are instantiated from a set of prefabs. When an enemy or chest needs a weapon, it retrieves one from the pool without creating new instances at runtime. When an enemy dies, the weapon is returned to the pool for reuse.

This pattern reduces Garbage Collector impact and stabilizes performance during gameplay.

## 🏺 Interactable Elements

Interactable elements follow a hierarchy based on interfaces and inheritance:

```plain
IInteractableElement
├── Item
│   ├── Weapon        ← Collision object vector, self-damage logic
│   └── Potion        ← Buff as Scriptable Object
├── Door              ← Normal door / Exit door
├── Key               ← Opens doors, stored in player's list
└── Container         ← Chests with animation
```

**Weapons** autonomously manage their own collision logic: they search for a `Hitbox` implementing `IDamagable` and apply damage, ensuring it isn't applied twice to the same target in a single attack animation.

Items emit a **golden glow** when the player aims at them, providing immediate visual feedback.

## 🎨 User Interface (UI)

### Player Health
Represented by **five red hearts**, each equivalent to 20% of total health. Hearts turn black proportionally as health is lost.

### Pause Menu
Accessible anytime during gameplay, with three options:
- Resume Game
- Options (Volume + Key remapping for keyboard and controller)
- Exit to Main Menu

### Main Menu
Start screen with direct access to **Character Selection**, where the user can navigate between characters and choose difficulty before starting.

## ⚙️ Unity Architecture

The project is organized into three main scenes:

1. **Main Menu**: Characters with animations, UI management, music, and clearing of static events between scenes.
2. **Loading Screen**: Callback ensuring loading is complete before showing the new scene.
3. **Game Scene**: Contains all game managers.

### Main Managers

| Manager | Responsibility |
|---|---|
| **GameInput** | Captures input and notifies movement, attack, and interaction via events. |
| **GameManager** | Singleton controlling game state (Playing / Paused / Victory / GameOver) and score. |
| **SoundManager** | Subscribes to events from other classes and plays centralized sound effects. |
| **MusicManager** | Plays background music and exposes volume control. |
| **DungeonCreator** | Selects dungeon preset based on chosen character and difficulty. |
| **DamageFeedbackManager** | Changes player and enemy materials upon taking damage for visual feedback. |

### State Management

Game state is managed as an **ENUM** with values `Playing`, `Paused`, `Victory`, and `GameOver`. Thanks to the Singleton pattern in `GameManager`, any game object can query or react to the current state easily.

## 📝 Highlighted Code Snippet

```csharp
// Direction selection via Context Steering
float bestWeight = float.MinValue;
Vector2 bestDirection = Vector2.zero;

for (int i = 0; i < directions.Length; i++)
{
    // Dot product between candidate direction and direction to player
    float weight = Vector2.Dot(directions[i], toPlayer.normalized);

    // Adjustment by danger map
    weight -= dangerMap[i];

    // Adjustment by interest map
    weight += interestMap[i];

    if (weight > bestWeight)
    {
        bestWeight = weight;
        bestDirection = directions[i];
    }
}
```

## 🎓 Key Learnings

This project allowed me to:
- Implement **Context Steering**, an AI technique from specialized video game literature.
- Apply the **Object Pool** pattern to optimize real-time memory management.
- Design a clean class hierarchy with **interfaces** and **inheritance** in C#.
- Manage global game state with **Singletons** and state machines.
- Centralize cross-cutting logic (sound, feedback, scoring) in independent managers.
- Work with Unity **Scriptable Objects** for reusable item data.
