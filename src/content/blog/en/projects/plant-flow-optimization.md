---
title: Plant Flow Optimization (QAP)
link: plant-flow-optimization
catalog: true
date: 2026-02-25
description: Implementation and analysis of Greedy, Local Search, Tabu Search, and Multistart algorithms to solve the Quadratic Assignment Problem (QAP) in an assembly line.
cover: /img/cover/6.webp
tags:
  - "C++"
  - "Metaheuristics"
  - "Optimization"
categories:
  - Projects
sticky: false
order: 6
projectType: "University project"
stack:
  - "C++"
  - "Greedy"
  - "Local search"
  - "Tabu search"
noAi: true
---

This project addresses the optimization problem of an assembly line for a factory (based on a FORD case study), seeking the optimal distribution of departments to minimize the cost of material flow. Developed by **Carlos Requena Doña** and **Yessin Mohamed** as part of Practice 1 of the Metaheuristics course.

Various optimization techniques are implemented and compared, ranging from constructive heuristics to advanced local search metaheuristics.

## 🏭 Problem Definition (QAP)

The objective is to assign $n$ departments to $n$ locations to minimize the quadratic cost function:

$$ 
C(S) = \sum_{i,j=1}^{n} \sum_{k,p=1}^{n} f_{ij} \cdot d_{kp} \cdot x_{ij} \cdot x_{kp} 
$$

Where the goal is to minimize the product of flow ($f$) of materials between departments by the distance ($d$) between assigned locations.

## 🧠 Implemented Algorithms

### 1. Greedy Algorithm
A constructive heuristic that generates a quick initial solution.
-   Uses priority queues (Heaps) to sort flows (highest to lowest) and distances (lowest to highest).
-   Iteratively assigns departments with the highest flow to the closest available locations.

### 2. Local Search First-Improvement
Improves the initial solution by exploring the neighborhood through permutations (swap) of two departments.
-   **Strategy**: Accepts the first neighboring solution that improves the current cost.
-   **DLB (Don't Look Better)**: Implementation of a bit vector to optimize the search, marking those departments that have not generated improvements recently to avoid useless re-evaluations.

### 3. Tabu Search
An advanced metaheuristic that allows escaping local optima by accepting movements that worsen the solution, guided by short and long-term memories.
-   **Short-Term Memory**: Tabu List prohibiting reversing recent moves or repeating visited solutions during a "tabu tenure".
-   **Long-Term Memory**: Frequency of department assignment to locations to guide diversification/intensification.
-   **Strategic Oscillation**: Alternates between **intensification** (exploiting promising zones) and **diversification** (exploring new zones) phases based on frequency memory.

### 4. Multistart (GRASP)
Combines randomized construction with local search to explore multiple regions of the solution space.
-   **Constructive Phase**: A Randomized Greedy (GRASP) that does not always choose the best option, but one of the best 'n' options randomly (RCL - Restricted Candidate List).
-   **Improvement Phase**: Applies Tabu Search to each generated solution, keeping the best global solution found after multiple executions.

## 🛠️ Architecture and Design

-   **FileLoader (Singleton)**: Loading flow and distance matrices from files, allowing problem instances to be changed without recompiling.
-   **Representation**: Integer vector `v` where `v[i]` is the location of department `i`.
-   **Logging**: Detailed logging system to analyze the convergence and behavior of algorithms in each iteration.

---
*Combinatorial optimization project implemented in C++.*
