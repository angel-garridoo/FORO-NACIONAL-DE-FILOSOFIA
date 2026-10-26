# XX Foro Nacional de Filosofía

Sitio web en Next.js para consultar la programación del foro y desplegar las ponencias de cada mesa.

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Exportación estática

```bash
npm run build
```

Next.js generará el sitio publicable en la carpeta `out`.

## Publicación en GitHub Pages

1. Subir este proyecto al repositorio `angel-garridoo/FORO-NACIONAL-DE-FILOSOFIA` en la rama `main`.
2. Entrar en `Settings > Pages` dentro del repositorio.
3. Seleccionar `GitHub Actions` como fuente de publicación.
4. Esperar a que finalice el workflow `Publicar en GitHub Pages`.

La URL tendrá el siguiente formato:

```text
https://angel-garridoo.github.io/FORO-NACIONAL-DE-FILOSOFIA/
```

Cada nuevo envío a la rama `main` actualizará automáticamente el sitio.
