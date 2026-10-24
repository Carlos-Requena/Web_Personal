---
title: 3D Viewer — OpenGL Rendering Engine
link: 3d-viewer
catalog: true
date: 2026-02-24 00:00:00
description: 3D rendering engine built from scratch in C++ with OpenGL. Features Assimp model loading, Phong lighting, normal mapping, textures, and an interactive ImGUI interface.
cover: /img/cover/3.webp
tags:
  - "C++"
  - "OpenGL"
  - "3D Graphics"
categories:
  - Projects
sticky: false
order: 2
projectType: "University project"
role: "Solo developer, from design to implementation"
stack:
  - "C++"
  - "OpenGL"
  - "GLSL"
  - "Assimp"
  - "ImGui"
links:
  code: https://github.com/Carlos-Requena/3D_Viewer
  video: https://drive.google.com/file/d/1zrzqGFnW4ZPExZnvLs_mIXGnygYp2qX0/view?usp=sharing
noAi: true
---

A 3D rendering engine built from scratch in C++ using OpenGL. It allows loading models in multiple formats via Assimp, applying different types of lighting and materials, rendering with normal mapping, and controlling a free camera interactively. The entire scene configuration is managed in real-time through an ImGUI interface.

## 🎥 Video Demo

[Watch demonstration on Google Drive](https://drive.google.com/file/d/1zrzqGFnW4ZPExZnvLs_mIXGnygYp2qX0/view?usp=sharing)

## 🚀 Key Features

- **Model Loading**: Supports multiple formats via the Assimp library
- **Phong Lighting**: Configurable point and directional lights
- **Normal Mapping**: Surface detail without additional geometry
- **Rendering Modes**: Fill, wireframe, and fill with normal mapping
- **Texture/Material Rendering**: Selectable in real-time
- **Interactive Interface**: Dropdown menus powered by ImGUI
- **Free Camera**: WASD movement + mouse look, panning, and pitch control

## 🛠️ Tech Stack

- **C++**: Main language
- **OpenGL**: Graphics API
- **GLFW**: Window and input management
- **GLM**: Vector and matrix mathematics
- **Assimp**: 3D model loading and import
- **ImGUI**: Interactive user interface
- **GLSL**: Vertex and fragment shaders

## 🏗️ Architecture

The design follows an object-oriented scheme with well-defined responsibilities. The class diagram summarizes the main relationships:

```plain
Renderer  ◆── ShaderHandler   (Composition: Renderer creates and owns ShaderHandler)
Renderer  ◆── Camera
Renderer  ──▶ Light (N lights in vector)
Renderer  ──▶ ModelManager
ModelManager  ◆── Model [1..N]
Model         ◆── ModelMesh [1..N]
FileLoader  · · ▶  Renderer   (Usage for file loading)
```

![Class Relations](/img/projects/1.webp)

### Renderer
 The core class of the system. It manages the rendering cycle, shaders, camera, models, and lights. It is a Singleton (`GetInstancia()`), allowing access from anywhere in the application (including ImGUI and input callbacks).

### ShaderHandler
Internal composition of `Renderer`. Responsible for:
- Compiling and linking GLSL programs (`createShaderProgram`)
- Initializing and managing VAOs/VBOs (`InicializacionArraysShaders`)
- Checking shader compilation errors (`comprobarCompilacion`)
- Managing fragment subroutines to switch between rendering modes

### Camera
Stores view and projection matrices (`glm::mat4`) and exposes methods for each type of movement: translation (`movimientoArriba`, `movimientoDerecha`), panning (`panoramica`), and pitch (`cabeceo`). Processes mouse and keyboard input via `procesarMovimiento`.

### ModelManager → Model → ModelMesh
Three-level composition hierarchy:

| Class | Responsibility |
|---|---|
| **ModelManager** | Maintains a vector of pointers to `Model`, assigns texture IDs, and delegates rendering |
| **Model** | Loads the model via Assimp, stores meshes, model matrix, texture, and shader ID |
| **ModelMesh** | Contains GPU data: VAO, VBO, EBO, and vertices/indices for each mesh |

### Light
Represents a light source in the scene. The type is differentiated by the `TipoLuz` enum, and each type has its own constructor. Stores position, direction, ambient/diffuse/specular components, and enabled status.

## 💡 ImGUI Interface

The interface is built in `main` with dropdown menus that allow scene manipulation without touching code:

```cpp
ImGui::SetNextWindowSize(ImVec2(300, 140));
if (ImGui::Begin("Main Menu", NULL, ImGuiWindowFlags_NoCollapse)) {
    if (ImGui::BeginMenu("Add")) {
        if (ImGui::MenuItem("Add Point Light"))       popupPointLightOpen = true;
        if (ImGui::MenuItem("Add Directional Light")) popupDirLightOpen = true;
        if (ImGui::MenuItem("Add Model"))             popupAddModel = true;
        ImGui::EndMenu();
    }
    if (ImGui::BeginMenu("Change Model Color")) {
        if (ImGui::MenuItem("Texture"))   Renderer::GetInstancia()->setTextureColorCalculation();
        if (ImGui::MenuItem("Material"))  Renderer::GetInstancia()->setMaterialColorCalculation();
        ImGui::EndMenu();
    }
    if (ImGui::BeginMenu("Change Visualization Mode")) {
        if (ImGui::MenuItem("Wireframe"))                  Renderer::GetInstancia()->setRenderModeWireframe();
        if (ImGui::MenuItem("Fill"))                       Renderer::GetInstancia()->setRenderModeFill();
        if (ImGui::MenuItem("Fill with Normal Mapping"))   Renderer::GetInstancia()->setRenderModeFillNormalMap();
        ImGui::EndMenu();
    }
}
```

Popup actions for adding lights or models propagate data directly to `Renderer` via its Singleton instance.

## 🔦 Normal Mapping

Normal mapping is implemented at the shader level by transforming normals to tangent space. Changes affect:

1. **Model Loader (Assimp)**: Retrieving tangential attributes alongside vertices, normals, and UVs.
2. **`Renderer::dibujoModeloMalla`**: Passing tangent variables to the vertex shader.
3. **GLSL Shaders**: Calculating lighting in tangent space using the normal map texture.

The system checks in `ModelManager::creaModelo` that the normal map path is not empty before loading it, as the diffuse texture and normal map are independent:

```cpp
void PAG::GestorModelos::creaModelo(const char* path, glm::mat4 modelMatrix,
    std::string texturePath, std::string normalPath, float brightness,
    glm::vec3 ambientColor, glm::vec3 diffuseComponent, glm::vec3 specularExponent)
{
    Modelos* model = new Modelos(path, modelMatrix, brightness,
                                  ambientColor, diffuseComponent, specularExponent);
    if (!texturePath.empty()) {
        model->setIdTextura(idTexturaModelos == 1 ? 2 : idTexturaModelos);
        cargarTextura(texturePath);
    }
    if (!normalPath.empty()) {
        model->setIdTexturaNormal(idTexturaModelos);
        cargarTextura(normalPath);
    }
    modelosEscena.push_back(model);
}
```

## ⌨️ Controls

| Key / Action | Effect |
|---|---|
| `W` | Move Up |
| `S` | Move Down |
| `A` | Move Right |
| `D` | Move Left |
| Left Click + Mouse | Free Camera Rotation |
| `P` | Pan Left |
| `O` | Pan Right |
| `C` | Pitch Left |
| `X` | Pitch Right |

> Movement keys only respond while the left mouse button is held down, preventing accidental movement when typing in ImGUI popups.

## 🔗 Repository

- **GitHub**: [Carlos-Requena/3D_Viewer](https://github.com/Carlos-Requena/3D_Viewer)
- **Main (ImGUI + input)**: [`program/main.cpp`](https://github.com/Carlos-Requena/3D_Viewer/blob/master/program/main.cpp)
- **Renderer (normal mapping, L180)**: [`program/Renderer.cpp`](https://github.com/Carlos-Requena/3D_Viewer/blob/master/program/Renderer.cpp)

## 🎓 Key Learnings

This project allowed me to:
- Understand the complete OpenGL graphics pipeline (VAO/VBO/EBO, shader compilation, draw calls).
- Implement a Phong lighting system with multi-light support in GLSL.
- Apply **normal mapping** in tangent space from scratch.
- Integrate **ImGUI** to build interactive interfaces over OpenGL without additional frameworks.
- Design an object-oriented architecture with composition and Singleton patterns in C++.
- Manage GPU resources (textures, buffers) with IDs and a simplified Object Pool system.
