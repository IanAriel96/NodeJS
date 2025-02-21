#!/bin/bash

# Directorio base del repositorio principal
REPO_DIR="$HOME/NodeJS"  # Cambia esta ruta si es diferente
GIT_REMOTE="origin"  # Nombre del remoto (generalmente 'origin')

# Verifica que el repositorio existe
if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Error: El repositorio $REPO_DIR no existe o no es un repositorio Git."
  exit 1
fi

# Solicitar el nombre del proyecto
read -p "Ingrese el nombre del proyecto nuevo o para cargar updates: " PROJECT_NAME

# Ruta del proyecto
PROJECT_DIR="$REPO_DIR/$PROJECT_NAME"

# Verificar si la carpeta ya existe
if [ -d "$PROJECT_DIR" ]; then
  echo "El proyecto '$PROJECT_NAME' ya existe. Agregando cambios..."
else
  echo "Creando nuevo proyecto '$PROJECT_NAME'..."
  mkdir "$PROJECT_DIR"
  cd "$PROJECT_DIR"

# Inicializar un nuevo proyecto de Node.js
# npm init -y

  # Crear un archivo básico
  echo "console.log('Hello World from my $PROJECT_NAME');" > index.js
fi

# Ir al repositorio principal
cd "$REPO_DIR"

# Agregar y hacer commit en Git
git add .
git commit -m "Updated: $PROJECT_NAME"
git push "$GIT_REMOTE" main

echo "Proyecto '$PROJECT_NAME' actualizado y subido con éxito."

