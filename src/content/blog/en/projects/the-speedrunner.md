---
title: The Speedrunner
link: the-speedrunner
catalog: true
date: 2024-05-14
description: A speedrun-type video game developed in Unity where the goal is to complete levels as quickly as possible with advanced movement mechanics.
cover: /img/cover/5.webp
tags:
  - "Unity"
  - "C#"
  - "Game Development"
categories:
  - Projects
sticky: false
order: 4
projectType: "University project"
stack:
  - "Unity"
  - "C#"
links:
  video: https://drive.google.com/file/d/1q3LWy8l2YnIt8GLVLnAXebbRO85_F-wB/view?usp=share_link
noAi: true
---

**The Speedrunner** is a first-person platform game developed in Unity, focused on speed and precision. The main objective is to complete levels in the shortest possible time, beating personal records and competing against other players.

This project was developed in collaboration by **Carlos Requena Doña** and **Yessin Mohamed**.

## 🎮 Concept and Gameplay

The game draws inspiration from titles like *"Warstride Challenges"*, aiming for a fluid and frantic experience. The player controls "The Bean", a character designed to move at high speeds through three-dimensional environments.

### Key Features

- **Advanced Movement System**: Based on kinematic physics for a feeling of total fluidity.
- **Integrated Combat Mechanics**: Shooting targets and enemies is a fundamental part of advancing through levels.
- **Scoring System**: Time-based, encouraging replayability and route optimization ("Speedrunning").
- **Progressive Difficulty**: Levels designed to challenge player skills.

## 🏃‍♂️ Movement Mechanics

The core of the game lies in its movement system, which allows chaining actions to maintain and increase speed:

1.  **Wall Run**: Allows running along walls to reach inaccessible areas. Jumping off a wall provides an extra boost.
2.  **Double Jump**: Ability to perform a second jump in mid-air to correct trajectories or reach greater heights.
3.  **Dash**: A quick forward burst that drastically increases speed momentarily (with a 2-second cooldown).
4.  **Shooting**: Essential mechanic to open doors or activate mechanisms by shooting specific targets.

## 🌍 Level Design

The game features level structures designed for route optimization. Although the map is static, replayability comes from finding the perfect sequence of movements.

- **Level 1**: Introduces basic mechanics and blocked doors requiring precise shooting.
- **Level 2**: Increases complexity with alternative paths unlockable via targets, allowing shortcuts to reduce final time.

## 🛠️ Technical Architecture

The project was built in Unity using a modular architecture:

- **Kinematic Character Controller**: Custom physics implementation for precise movement control.
- **Input System**: Centralized player input management to support key remapping.
- **Game Manager (Singleton)**: Controls global game state (Playing, Paused, Victory, Game Over) and scoring system.
- **Data Persistence**: JSON save system to store records and level unlock progress.
- **Audio System**: Event management for sound effects and dynamic music.

## 📦 Resources and Credits

Development leveraged assets from **Synty Studios (Polygon)** for low-poly visuals, along with other packages for particle effects and skyboxes, allowing the team to focus on mechanics programming and unique level design.

---
*Project developed as part of a video game development portfolio.*
