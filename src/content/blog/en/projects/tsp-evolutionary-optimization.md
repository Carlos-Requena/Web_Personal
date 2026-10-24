---
title: Evolutionary Optimization for TSP
link: tsp-evolutionary-optimization
catalog: true
date: 2026-02-25
description: Implementation and analysis of Genetic and Differential Evolution algorithms for the Traveling Salesperson Problem (TSP), comparing OX2 and MOC crossover operators.
cover: /img/cover/7.webp
tags:
  - "C++"
  - "Metaheuristics"
  - "Optimization"
categories:
  - Projects
sticky: false
order: 5
projectType: "Metaheuristics course"
stack:
  - "C++"
  - "Genetic algorithms"
  - "Differential evolution"
noAi: true
---

This project documents the implementation and experimental analysis of metaheuristic algorithms to solve the **Traveling Salesperson Problem (TSP)**. It was developed by **Carlos Requena Doña** and **Yessin Mohamed** as part of a university practice.

The main objective is to compare the performance of **Genetic Algorithms (GA)** and **Differential Evolution Algorithms (EDA/EDB)** using different configurations and crossover operators.

## 🧠 Algorithms and Problem

The problem consists of finding the shortest route that visits a set of cities exactly once and returns to the origin. The distance between points is calculated using the Euclidean distance formula.

The project implements two main types of algorithms:
1.  **Genetic Algorithm (Generational)**: Simulates natural evolution with a population of individuals (routes).
2.  **Differential Evolution Algorithm**: Uses differential permutation-based mutation operators.

### Key Components

-   **FileLoader (Singleton)**: Handles loading city coordinates from files and configuration parameters, avoiding "magic numbers" and allowing easy experimentation.
-   **Solution Representation**: Each individual in the population represents a route (vector of cities).
-   **Fitness Function**: Calculated as the total distance of the route. The goal is to minimize this cost.

## 🧬 Genetic Algorithm (GA)

The Generational Genetic Algorithm follows a classic cycle of selection, crossover, and mutation:

1.  **Selection**: Tournament selection is used to choose parents.
2.  **Crossover**: Implemented operators include **OX2** (Order Crossover 2) and **MOC** (Maximal Preservative Crossover).
3.  **Elitism**: The best individuals (elites) are preserved for the next generation to ensure the quality of the solution does not decrease.
4.  **Replacement**: The new generation completely replaces the old one.

## 🧪 Differential Evolution

The Differential algorithm uses a ternary recombination strategy:
-   It selects a "father", two random individuals, and a "target" individual.
-   It applies differential mutation operators (EDA/EDB) to generate new solutions.
-   New individuals replace the old ones only if they improve the fitness (cost).

## 📊 Experiments and Results

Extensive tests were conducted using 5 different random seeds and multiple parameter configurations (population size, number of elites, probabilities).

### Comparative Analysis

-   **MOC vs OX2**: The **MOC** operator generally showed better results than OX2, especially in early convergence. MOC tends to improve very quickly at the beginning and then stabilizes, while OX2 maintains a more constant improvement improvement rate.
-   **EDA vs EDB**: The **EDA** selection strategy proved to be superior to EDB in both mean result and standard deviation.
-   **Overall Performance**: MOC significantly outperformed EDA in the performed tests, achieving better average costs.

### Conclusions

The behavior of the algorithms suggests that **MOC is ideal for scenarios with few iterations** due to its rapid initial convergence, while **OX2 might be more robust in very long executions** where constant improvement is required without premature stagnation.

---
*Project developed for the Metaheuristics course.*
