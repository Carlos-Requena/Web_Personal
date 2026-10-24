---
title: "Final Degree Project — Explainability (XAI) Platform for Machine Learning Models"
link: tfg-xai-nets4learning
catalog: true
date: 2026-07-31 00:00:00
description: "Bachelor's thesis: an Explainable AI (XAI) module integrated into the Nets4Learning platform that produces visual explanations of Deep Learning models running entirely in the browser with TensorFlow.js (SHAP and LRP)."
cover: /img/projects/tfg-simidat.webp
tags:
  - "Bachelor's Thesis"
  - "Artificial Intelligence"
  - "Deep Learning"
  - "React"
  - "TensorFlow.js"
categories:
  - Projects
sticky: true
order: 1
projectType: "Bachelor's thesis"
role: "Author: requirements, XAI algorithms and UI"
stack:
  - "React"
  - "TypeScript"
  - "TensorFlow.js"
  - "SHAP"
  - "LRP"
links:
  demo: https://nets4learnings.netlify.app
  code: https://github.com/Carlos-Requena/TFG-Explicabilidad-NEts4Learning
  pdf: /tfg/Carlos_Requena_TFG.pdf
noAi: true
---

Bachelor's thesis for the **Computer Engineering degree** at the **University of Jaén**, developed within the **SIMIDAT** research group under the supervision of **Antonio Jesús Rivera Rivas** and **María Dolores Pérez Godoy**.

The project adds an **Explainable AI (XAI)** module to the educational platform **Nets4Learning**, generating visual, interpretable explanations of Deep Learning predictions under one key constraint: **all computation runs in the browser**, with no server (backend).

## 🔗 Live demo

[**Try the platform → nets4learnings.netlify.app**](https://nets4learnings.netlify.app)

> Runs from the browser, including mobile. Model training and inference execute on your own device via TensorFlow.js.

📄 **[Download the full thesis (PDF)](/Web_Personal/tfg/Carlos_Requena_TFG.pdf)**

## 🎯 Motivation and goal

Deep neural networks often behave like **"black boxes"**: they deliver accurate predictions without a comprehensible justification. In an educational setting this is a barrier: for a student to truly understand *how* a network works, it is not enough to see whether it is right or wrong, they need to know **which features of the data drove the decision**.

The overall goal was to **design, implement and integrate** a module that provides visual explanations of Nets4Learning's predictions, running **entirely in the browser**. This constraint rules out the usual XAI libraries (built for Python on a backend) and forces the problem to be solved with what the client can offer.

## 🧠 What is Explainable AI (XAI)?

XAI groups the techniques aimed at making model decisions comprehensible. They are usually classified by:

- **Scope**: **global** explanations (the model's overall behaviour) vs **local** ones (a single prediction).
- **Model dependence**: **model-agnostic** methods (treat the model as a black box, relating inputs to outputs) vs **model-specific** methods (analyse the network's internal architecture).

To cover both, the module combines **two complementary techniques**.

## 🛠️ Implemented techniques

### Agnostic method — SHAP (via WebSHAP)

**SHAP** (*SHapley Additive exPlanations*) is based on the **Shapley values** of cooperative game theory: it fairly distributes each feature's contribution to the prediction by comparing combinations of present and absent features to obtain their marginal contributions.

Its main drawback is the **high computational cost** (it requires many model evaluations per prediction), which is a challenge when the client itself provides the computing power. To solve it, **WebSHAP** was integrated, a SHAP implementation designed to run exclusively on the client side over TensorFlow.js, preserving data **privacy**.

### Specific method — LRP

**LRP** (*Layer-wise Relevance Propagation*) accesses the inside of the network and **back-propagates "relevance"** layer by layer down to the input, revealing which elements contributed most to the prediction. It is far more efficient than SHAP (a single pass), at the cost of being tightly coupled to the model's architecture.

### Image explanations — superpixels

For image models, explanations are computed over **superpixels** —via the **SLIC** algorithm— (regions grouped by proximity and colour similarity) instead of thousands of isolated pixels, complemented with **facial segmentation** for face-based tasks. This yields interpretable heatmaps over a manageable number of visually meaningful regions.

## 🏗️ System architecture

Nets4Learning is a **React SPA** with client-side inference via TensorFlow.js. The explainability module is integrated as another layer, organised into **three levels**:

1. **Model layer** — the existing models, grouped by task (tabular data, image classification and object detection).
2. **Explainability layer** — the core developed in this work, **independent of any specific model**.
3. **Presentation layer** — the UI components that let the user request an explanation and visualise the results (feature-importance charts or heatmaps over the image).

### Design pattern: Template

The most important design decision was to **decouple** explainability from the models. Each task type exposes a **common interface** that all its models implement (enable the model, obtain a prediction from an input). The explainability layer works against that abstraction following the **Template pattern**: adding a new model **does not require modifying** the explainability module as long as it respects the interface, satisfying the **extensibility** requirement.

## ⚙️ Tech stack

- **React** — SPA interface
- **TensorFlow.js** — in-browser training and inference (GPU via WebGL)
- **WebSHAP** — client-side SHAP implementation
- **LRP** — custom relevance-propagation implementation
- **JavaScript** — the ecosystem's main language

## 📅 Methodology

Development followed an **incremental model**: each increment added explainability to a family of models —tabular data, image classification (**MNIST / KMNIST**), object detection and LRP-based introspection—, with periodic reviews with the supervisors. Version control with **Git/GitHub** (feature branches), **VS Code** as the IDE and **LaTeX/Overleaf** for the report.

## ✅ Conclusions and results

The overall goal was met: **Nets4Learning now accompanies every prediction with a visual explanation computed entirely on the client**, with no server. The specific objectives were fulfilled:

- **SHAP (WebSHAP)** was integrated into every model except digit detection (KMNIST), which uses **LRP** over an introspectable model.
- The **React UI components** were integrated: the user requests an explanation and visualises it as an importance chart or a heatmap.
- The module was **validated** with **unit tests** and functional validation on the real application, confirming that the explanations are consistent with the models' behaviour.
- The biggest challenge was **secure, private client-side execution**, which shaped the choice of techniques and forced compromises (e.g. the approximation in LRP's *pooling* layers).

The architecture was successfully integrated across **object detection, image classification (MNIST/KMNIST) and tabular models**, respecting the *zero-server* constraint and adapting to the multilingual interface (Spanish, English and Japanese).

## 🔭 Future work

- Add new techniques: **Grad-CAM** for convolutional models or **LIME**.
- Extend **LRP** coverage to more architectures and complex layers.
- Leverage **WebGPU** and the new client-side inference engines to overcome current performance limits.
- Move SHAP's heavy computation to **Web Workers** to keep the UI free during longer explanations.

---

*Bachelor's Thesis · Higher Polytechnic School of Jaén · University of Jaén (2026).*
