---
title: Roguelike Chibi
link: roguelike-chibi
catalog: true
date: 2026-02-24 00:00:00
description: Videojuego roguelike desarrollado en Unity con IA basada en Context Steering, generación procedural de dungeons, sistema de objetos con Object Pool y diseño chibi de personajes y enemigos.
cover: /img/cover/1.webp
tags:
  - "Unity"
  - "C#"
  - "Videojuegos"
  - "Inteligencia Artificial"
categories:
  - Proyectos
sticky: false
order: 3
projectType: "Proyecto universitario"
stack:
  - "Unity"
  - "C#"
  - "Context Steering"
noAi: true
---

Roguelike Chibi es un videojuego de tipo roguelike desarrollado en Unity. El juego presenta una dungeon de generación procedural, personajes y enemigos con estética chibi, un sistema de IA basado en Context Steering y una arquitectura modular orientada a la reutilización de objetos y la separación de responsabilidades.

## 🚀 Características Principales

- **IA Context Steering**: Inteligencia artificial para enemigos basada en vectores de pesos y mapas de peligros e intereses
- **Dos tipos de enemigos**: Minions que persiguen directamente y Guerreros que mantienen distancia y rodean al jugador
- **Generación procedural**: Dungeons generadas a partir de presets según el personaje y la dificultad elegidos
- **Object Pool**: Sistema de reutilización de instancias de armas para optimizar el consumo de memoria
- **Sistema de animaciones**: Interfaz `IAnimatorUsaObjeto` que gestiona animaciones de movimiento, ataque y uso de objetos
- **Selección de personaje y dificultad**: Desde el menú principal antes de iniciar partida
- **Soporte para mando**: Menú de opciones con reasignación de teclas y soporte de controlador

## 🛠️ Stack Tecnológico

- **Motor**: Unity
- **Lenguaje**: C#
- **Patrones aplicados**: Singleton, Object Pool, Observer (eventos estáticos), State Machine (ENUM de estados)
- **Diseño de datos**: Scriptable Objects para buffs de pociones y configuraciones de objetos
- **IA**: Context Steering (basado en literatura especializada de IA en videojuegos)

## 🤖 Inteligencia Artificial — Context Steering

El sistema de IA es el núcleo más técnico del proyecto. Cada enemigo evalúa un array de direcciones posibles y asigna un peso a cada una mediante el **producto escalar** entre la dirección candidata y la dirección deseada (generalmente hacia el jugador).

Los pesos se ajustan en función de:
- **Distancia al jugador**: mayor peso cuanto más cerca se encuentre
- **Distancia de seguridad**: los Guerreros penalizan direcciones que los acerquen demasiado
- **Mapa de peligros e intereses**: enmascara los pesos base para evitar colisiones y adaptar el movimiento al entorno

### Tipos de enemigos

| Tipo | Comportamiento |
|---|---|
| **Minion** | Persigue al jugador directamente sin usar Context Steering avanzado |
| **Guerrero** | Mantiene distancia y rodea al jugador usando el vector de pesos completo |

Ambos tipos atacan al entrar en rango y respetan un tiempo de refresco entre ataques. Las armas de los enemigos se asignan aleatoriamente desde la **Object Pool**.

## 📦 Object Pool

La Pool de objetos es un sistema de gestión de instancias pre-creadas. Al inicio de la partida se instancian ~20 armas desde un conjunto de prefabs. Cuando un enemigo o cofre necesita un arma, la obtiene de la pool sin crear nuevas instancias en tiempo de ejecución. Al morir el enemigo, el arma se devuelve a la pool para ser reutilizada.

Este patrón reduce el impacto del Garbage Collector y estabiliza el rendimiento durante la partida.

## 🏺 Elementos Interactuables

Los elementos interactuables siguen una jerarquía basada en interfaces y herencia:

```plain
IElementoInteractuable
├── Objeto
│   ├── Arma          ← vector de ObjetosColisionados, lógica de daño propia
│   └── Poción        ← buff como Scriptable Object
├── Puerta            ← puerta normal / puerta de salida
├── Llave             ← abre puertas, almacenada en lista del jugador
└── Contenedor        ← cofres con animación
```

Las **armas** gestionan de forma autónoma su propia lógica de colisión: buscan una `Hitbox` que implemente `IRecibeDaño` y aplican el daño correspondiente, garantizando que no se aplique dos veces al mismo objetivo en una misma animación de ataque.

Los objetos emiten un **brillo dorado** cuando el jugador los apunta, ofreciendo feedback visual inmediato.

## 🎨 Interfaz de Usuario (UI)

### Vida del jugador
Representada mediante **cinco corazones rojos**, cada uno equivalente al 20 % de la vida total. Al perder vida, los corazones se vuelven negros de forma proporcional.

### Menú de pausa
Accesible en cualquier momento durante la partida, con tres opciones:
- Reanudar partida
- Opciones (volumen + reasignación de teclas para teclado y mando)
- Salir al menú principal

### Menú principal
Pantalla de inicio con acceso directo a la **selección de personaje**, donde el jugador puede navegar entre personajes y elegir la dificultad antes de comenzar.

## ⚙️ Arquitectura en Unity

El proyecto se organiza en tres escenas principales:

1. **Menú principal**: Personajes con animaciones, gestión de UI, música y limpieza de eventos estáticos entre escenas
2. **Pantalla de carga**: Callback que asegura que la carga se complete antes de mostrar la nueva escena
3. **Escena de juego**: Contiene todos los gestores del juego

### Gestores principales

| Gestor | Responsabilidad |
|---|---|
| **GameInput** | Captura input y notifica mediante eventos a movimiento, ataque e interacción |
| **PartidaManager** | Singleton que controla el estado del juego (Jugando / Pausa / Victoria / GameOver) y la puntuación |
| **SoundManager** | Se suscribe a eventos de otras clases y reproduce los efectos de sonido centralizados |
| **MusicManager** | Reproduce música de fondo y expone control de volumen |
| **DungeonCreator** | Selecciona el preset de dungeon según el personaje y dificultad elegidos |
| **DamageFeedbackManager** | Cambia los materiales del jugador y enemigos al recibir daño para dar feedback visual |

### Gestión de estado

El estado de la partida se gestiona como un **ENUM** con los valores `Jugando`, `Pausa`, `Victoria` y `GameOver`. Gracias al patrón Singleton de `PartidaManager`, cualquier objeto del juego puede consultar o reaccionar al estado actual de forma sencilla.

## 📝 Fragmento de código destacado

```csharp
// Selección de dirección mediante Context Steering
float bestWeight = float.MinValue;
Vector2 bestDirection = Vector2.zero;

for (int i = 0; i < directions.Length; i++)
{
    // Producto escalar entre dirección candidata y dirección al jugador
    float weight = Vector2.Dot(directions[i], toPlayer.normalized);

    // Ajuste por mapa de peligros
    weight -= dangerMap[i];

    // Ajuste por mapa de intereses
    weight += interestMap[i];

    if (weight > bestWeight)
    {
        bestWeight = weight;
        bestDirection = directions[i];
    }
}
```

## 🎓 Aprendizajes Clave

Este proyecto me permitió:
- Implementar **Context Steering**, una técnica de IA basada en literatura especializada de videojuegos
- Aplicar el patrón **Object Pool** para optimizar la gestión de memoria en tiempo real
- Diseñar una jerarquía de clases limpia con **interfaces** y **herencia** en C#
- Gestionar el estado global del juego con **Singleton** y máquinas de estados
- Centralizar lógica transversal (sonido, feedback, puntuación) en gestores independientes
- Trabajar con **Scriptable Objects** de Unity para datos de objetos reutilizables
