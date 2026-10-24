---
title: "TFG — Plataforma de Explicabilidad (XAI) para Modelos de Aprendizaje Automático"
link: tfg-xai-nets4learning
catalog: true
date: 2026-07-31 00:00:00
description: "Trabajo Fin de Grado: un módulo de Inteligencia Artificial Explicable (XAI) integrado en la plataforma Nets4Learning, que genera explicaciones visuales de modelos de Deep Learning ejecutándose íntegramente en el navegador con TensorFlow.js (SHAP y LRP)."
cover: /img/projects/tfg-simidat.webp
tags:
  - "TFG"
  - "Inteligencia Artificial"
  - "Deep Learning"
  - "React"
  - "TensorFlow.js"
categories:
  - Proyectos
sticky: true
order: 1
projectType: "Trabajo Fin de Grado"
role: "Autor: requisitos, algoritmos XAI e interfaz"
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

Trabajo Fin de Grado del **Grado en Ingeniería Informática** de la **Universidad de Jaén**, desarrollado en el contexto del grupo de investigación **SIMIDAT** bajo la dirección de **Antonio Jesús Rivera Rivas** y **María Dolores Pérez Godoy**.

El proyecto dota a la plataforma educativa **Nets4Learning** de un módulo de **Inteligencia Artificial Explicable (XAI)** que genera explicaciones visuales e interpretables de las predicciones de modelos de Deep Learning, con una restricción clave: **todo el cálculo se ejecuta en el navegador**, sin ningún servidor (backend).

## 🔗 Demo en vivo

[**Probar la plataforma → nets4learnings.netlify.app**](https://nets4learnings.netlify.app)

> Funciona desde el navegador, también en móvil. El entrenamiento y la inferencia de los modelos se ejecutan en tu propio dispositivo mediante TensorFlow.js.

📄 **[Descargar la memoria completa (PDF)](/Web_Personal/tfg/Carlos_Requena_TFG.pdf)**

## 🎯 Motivación y objetivo

Las redes neuronales profundas actúan a menudo como **"cajas negras"**: ofrecen predicciones precisas pero sin una justificación comprensible. En el ámbito educativo esto es una barrera: para que un estudiante entienda *cómo* funciona una red, no basta con ver si acierta o falla, necesita saber **qué características de los datos motivaron la decisión**.

El objetivo general fue **diseñar, implementar e integrar** un módulo que proporcione explicaciones visuales de las predicciones de Nets4Learning, ejecutándose **íntegramente en el cliente**. Esta restricción descarta las librerías de XAI habituales (pensadas para Python sobre un backend) y obliga a resolver el problema con las posibilidades del navegador.

## 🧠 ¿Qué es la IA Explicable (XAI)?

La XAI agrupa las técnicas orientadas a hacer comprensibles las decisiones de los modelos. Suelen clasificarse según:

- **Alcance**: explicaciones **globales** (comportamiento del modelo en su conjunto) vs **locales** (una predicción concreta).
- **Dependencia del modelo**: métodos **agnósticos** (tratan el modelo como una caja negra, relacionando entradas y salidas) vs **específicos** (analizan la arquitectura interna de la red).

Para cubrir ambos enfoques, el módulo combina **dos técnicas complementarias**.

## 🛠️ Técnicas implementadas

### Método agnóstico — SHAP (vía WebSHAP)

**SHAP** (*SHapley Additive exPlanations*) se basa en los **valores de Shapley** de la teoría de juegos cooperativos: reparte de forma justa la contribución de cada característica a la predicción, comparando las combinaciones de *features* presentes y ausentes para obtener sus contribuciones marginales.

Su principal inconveniente es el **alto coste computacional** (requiere múltiples evaluaciones del modelo por predicción), lo que supone un reto cuando es el propio cliente quien aporta la potencia de cálculo. Para resolverlo se integró **WebSHAP**, una implementación de SHAP pensada para ejecutarse exclusivamente en el lado del cliente sobre TensorFlow.js, preservando la **privacidad** de los datos.

### Método específico — LRP

**LRP** (*Layer-wise Relevance Propagation*) accede al interior de la red y **retropropaga la "relevancia"** capa a capa hasta la entrada, revelando qué elementos aportaron más a la predicción. Es mucho más eficiente que SHAP (una sola pasada), a cambio de estar estrechamente acoplado a la arquitectura del modelo.

### Explicaciones sobre imágenes — superpíxeles

Para los modelos de imagen, las explicaciones se calculan sobre **superpíxeles** —mediante el algoritmo **SLIC**— (regiones agrupadas por proximidad y similitud de color) en lugar de sobre miles de píxeles aislados, complementados con **segmentación facial** para las tareas con rostros. Así se obtienen mapas de calor interpretables sobre un número manejable de regiones con significado visual.

## 🏗️ Arquitectura del sistema

Nets4Learning es una **SPA en React** con inferencia *client-side* mediante TensorFlow.js. El módulo de explicabilidad se integra como una capa más, organizada en **tres niveles**:

1. **Capa de modelos** — los modelos existentes, agrupados por tarea (datos tabulares, clasificación de imágenes y detección de objetos).
2. **Capa de explicabilidad** — el núcleo desarrollado en este trabajo, **independiente de los modelos concretos**.
3. **Capa de presentación** — los componentes de interfaz que permiten solicitar una explicación y visualizar los resultados (gráficos de importancia de características o mapas de calor sobre la imagen).

### Patrón de diseño: Template

La decisión de diseño más importante fue **desacoplar** la explicabilidad de los modelos. Cada tipo de tarea expone una **interfaz común** que todos sus modelos implementan (habilitar el modelo, obtener una predicción a partir de una entrada). La capa de explicabilidad trabaja contra esa abstracción siguiendo el **patrón Template**: añadir un nuevo modelo **no obliga a modificar** el módulo de explicabilidad mientras respete la interfaz, satisfaciendo el requisito de **extensibilidad**.

## ⚙️ Stack tecnológico

- **React** — interfaz de la SPA
- **TensorFlow.js** — entrenamiento e inferencia en el navegador (GPU vía WebGL)
- **WebSHAP** — implementación de SHAP *client-side*
- **LRP** — implementación propia de propagación de relevancia
- **JavaScript** — lenguaje principal del ecosistema

## 📅 Metodología

Desarrollo siguiendo un **modelo incremental**: cada incremento añadió explicabilidad a una familia de modelos —datos tabulares, clasificación de imágenes (**MNIST / KMNIST**), detección de objetos e introspección con LRP—, con revisiones periódicas con los tutores. Control de versiones con **Git/GitHub** (ramas por funcionalidad), **VS Code** como IDE y **LaTeX/Overleaf** para la memoria.

## ✅ Conclusiones y resultados

Se alcanzó el objetivo general: **Nets4Learning acompaña ahora cada predicción con una explicación visual calculada íntegramente en el cliente**, sin servidor. Cumpliendo los objetivos específicos:

- Se **integró SHAP (WebSHAP)** en todos los modelos salvo la detección de números (KMNIST), que emplea **LRP** sobre un modelo introspectable.
- Se **integraron los componentes en la interfaz React**: el usuario solicita una explicación y la visualiza como gráfico de importancia o mapa de calor.
- Se **validó** el módulo con **pruebas unitarias** y validación funcional sobre la aplicación real, comprobando que las explicaciones son coherentes con el comportamiento de los modelos.
- El mayor reto fue la **ejecución en cliente de forma segura y privada**, que condicionó la elección de técnicas y obligó a decisiones comprometidas (p. ej. la aproximación en las capas de *pooling* de LRP).

La arquitectura se integró con éxito en **detección de objetos, clasificación de imágenes (MNIST/KMNIST) y modelos tabulares**, respetando la restricción *zero-server* y adaptándose a la interfaz multilingüe (español, inglés y japonés).

## 🔭 Líneas de trabajo futuro

- Incorporar nuevas técnicas: **Grad-CAM** para modelos convolucionales o **LIME**.
- Ampliar la cobertura de **LRP** a más arquitecturas y capas complejas.
- Aprovechar **WebGPU** y los nuevos motores de inferencia en cliente para superar los límites de rendimiento actuales.
- Mover el cálculo pesado de SHAP a **Web Workers** para liberar la interfaz durante las explicaciones más largas.

---

*Trabajo Fin de Grado · Escuela Politécnica Superior de Jaén · Universidad de Jaén (2026).*
