---
title: 3D Viewer — OpenGLレンダリングエンジン
link: 3d-viewer
catalog: true
date: 2026-02-24 00:00:00
description: C++とOpenGLでゼロから開発された3Dレンダリングエンジン。Assimpによるモデル読み込み、Phong照明、法線マッピング、テクスチャ、ImGUIによるインタラクティブなインターフェースをサポートしています。
cover: /img/cover/3.webp
tags:
  - "C++"
  - "OpenGL"
  - "3Dグラフィックス"
categories:
  - プロジェクト
sticky: false
order: 2
projectType: "大学のプロジェクト"
role: "設計から実装まで単独で担当"
stack:
  - "C++"
  - "OpenGL"
  - "GLSL"
  - "Assimp"
  - "ImGui"
links:
  code: https://github.com/Carlos-Requena/3D_Viewer
  video: https://drive.google.com/file/d/1ln3UuS0lW_OjWofK6olYhcgwOLc5uuBI/view?usp=share_link
noAi: true
---

C++とOpenGLを使用してゼロから構築された3Dレンダリングエンジンです。Assimpを使用して複数のフォーマットでモデルを読み込み、異なる種類の照明やマテリアルを適用し、法線マッピングでレンダリングし、インタラクティブにカメラを制御できます。シーン全体の構成はImGUIインターフェースを通じてリアルタイムで管理されます。

## 🎥 動画デモ

[Googleドライブでデモを見る](https://drive.google.com/file/d/1ln3UuS0lW_OjWofK6olYhcgwOLc5uuBI/view?usp=share_link)

## 🚀 主な機能

- **モデル読み込み**: Assimpライブラリによる複数フォーマットのサポート
- **Phong 照明**: 設定可能な点光源と指向性光源
- **法線マッピング**: 追加のジオメトリなしで表面の詳細を表現
- **レンダリングモード**: 塗りつぶし、ワイヤーフレーム、法線マッピング付き塗りつぶし
- **テクスチャ/マテリアルレンダリング**: リアルタイムで切り替え可能
- **インタラクティブインターフェース**: ImGUIを使用したドロップダウンメニュー
- **フリーカメラ**: WASD 移動 + マウス視点操作、パン、ピッチ制御

## 🛠️ 技術スタック

- **C++**: メイン言語
- **OpenGL**: グラフィックスAPI
- **GLFW**: ウィンドウと入力の管理
- **GLM**: ベクトルと行列の数学ライブラリ
- **Assimp**: 3Dモデルの読み込みとインポート
- **ImGUI**: インタラクティブなユーザーインターフェース
- **GLSL**: 頂点シェーダーとフラグメントシェーダー

## 🏗️ アーキテクチャ

設計は、責任範囲が明確に定義されたオブジェクト指向スキーマに従っています。クラス図は主な関係を要約しています：

```plain
Renderer  ◆── ShaderHandler   (コンポジション: RendererがShaderHandlerを作成・所有)
Renderer  ◆── Camera
Renderer  ──▶ Light (ベクトル内のN個のライト)
Renderer  ──▶ ModelManager
ModelManager  ◆── Model [1..N]
Model         ◆── ModelMesh [1..N]
FileLoader  · · ▶  Renderer   (ファイル読み込み時に一時的に使用)
```

![クラス関係図](/img/projects/1.webp)

### Renderer
システムの中心となるクラス。レンダリングサイクル、シェーダー、カメラ、モデル、ライトを管理します。シングルトン（`GetInstancia()`）であり、アプリケーションのどこからでも（ImGUIや入力コールバックを含む）アクセスできます。

### ShaderHandler
`Renderer`の内部コンポジション。以下の役割を担当します：
- GLSLプログラムのコンパイルとリンク (`createShaderProgram`)
- VAO/VBOの初期化と管理 (`InicializacionArraysShaders`)
- シェーダーコンパイルエラーのチェック (`comprobarCompilacion`)
- レンダリングモードを切り替えるためのフラグメントサブルーチンの管理

### Camera
ビュー行列と投影行列（`glm::mat4`）を格納し、各タイプの移動メソッド（`movimientoArriba`, `movimientoDerecha`）、パン（`panoramica`）、ピッチ（`cabeceo`）を提供します。マウスとキーボードの入力は `procesarMovimiento` を通じて処理されます。

### ModelManager → Model → ModelMesh
3レベルのコンポジション階層：

| クラス | 役割 |
|---|---|
| **ModelManager** | `Model`へのポインタのベクトルを保持し、テクスチャIDを割り当て、レンダリングを委譲します |
| **Model** | Assimp 経由でモデルを読み込み、メッシュ、モデル行列、テクスチャ、シェーダーIDを格納します |
| **ModelMesh** | GPUデータを含みます：VAO, VBO, EBOおよび各メッシュの頂点/インデックス |

### Light
シーン内の光源を表します。タイプは `TipoLuz` 列挙型で区別され、各タイプには独自のコンストラクタがあります。位置、方向、環境/拡散/鏡面成分、有効状態を格納します。

## 💡 ImGUIインターフェース

インターフェースは `main` 内で構築され、コードを変更することなくシーン操作が可能なドロップダウンメニューを提供します：

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

ライトやモデルを追加するポップアップアクションは、シングルトンインスタンスを通じてデータを直接 `Renderer` に伝播します。

## 🔦 法線マッピング

法線マッピングは、法線を接空間に変換することでシェーダーレベルで実装されます。変更点は以下の通りです：

1. **モデルローダー (Assimp)**: 頂点、法線、UVとともに接空間属性を取得。
2. **`Renderer::dibujoModeloMalla`**: 接空間変数を頂点シェーダーに渡す。
3. **GLSLシェーダー**: 法線マップテクスチャを使用して接空間で照明を計算。

システムは `ModelManager::creaModelo` で、法線マップのパスが空でないことを確認してから読み込みます。拡散テクスチャと法線マップは独立しています：

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

## ⌨️ 操作方法

| キー / アクション | 効果 |
|---|---|
| `W` | 上移動 |
| `S` | 下移動 |
| `A` | 右移動 |
| `D` | 左移動 |
| 左クリック + マウス | フリーカメラ回転 |
| `P` | 左パン |
| `O` | 右パン |
| `C` | 左ピッチ |
| `X` | 右ピッチ |

> 移動キーは、ImGUIポップアップでの入力中に誤って移動するのを防ぐため、マウスの左ボタンが押されている間のみ反応します。

## 🔗 リポジトリ

- **GitHub**: [Carlos-Requena/3D_Viewer](https://github.com/Carlos-Requena/3D_Viewer)
- **Main (ImGUI + input)**: [`program/main.cpp`](https://github.com/Carlos-Requena/3D_Viewer/blob/master/program/main.cpp)
- **Renderer (法線マッピング, L180)**: [`program/Renderer.cpp`](https://github.com/Carlos-Requena/3D_Viewer/blob/master/program/Renderer.cpp)

## 🎓 主な学び

このプロジェクトを通じて以下のことを学びました：
- 完全なOpenGLグラフィックスパイプラインの理解（VAO/VBO/EBO、シェーダーコンパイル、ドローコール）
- GLSLでのマルチライトサポート付きPhong 照明システムの実装
- 接空間での**法線マッピング**のゼロからの実装
- 追加フレームワークなしでOpenGL 上に**ImGUI**を統合し、インタラクティブなインターフェースを構築
- C++でのコンポジションとシングルトンパターンを使用したオブジェクト指向アーキテクチャの設計
- IDと簡略化されたオブジェクトプールシステムを使用したGPUリソース（テクスチャ、バッファ）の管理
