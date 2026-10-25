# Expediente bajo análisis — Derechos en el trabajo

Juego educativo para GitHub Pages basado en la exposición sobre derechos laborales, historia, Constitución Nacional, Constitución de Salta, PIDESC y el caso rural de Joaquín V. González.

## Archivos
- `index.html`: el juego.
- `Code.gs`: receptor opcional de resultados para Google Sheets y aviso por correo.

## Publicar el juego en GitHub Pages
1. Creá un repositorio nuevo en GitHub.
2. Subí `index.html` al nivel principal del repositorio.
3. Abrí **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**, seleccioná `main` y `/ (root)`, y guardá.
5. Esperá a que GitHub Pages publique el enlace.

## Configurar resultados por Google Sheets y correo
Esto se configura una sola vez desde una cuenta de Google. No hace falta cambiar el HTML cada vez que un alumno juega.

1. Creá una hoja de cálculo nueva en Google Sheets.
2. En esa hoja, abrí **Extensiones → Apps Script**.
3. Reemplazá el contenido del editor por el código de `Code.gs`.
4. En la primera línea, cambiá `PONER_TU_CORREO_AQUI` por el correo donde querés recibir los resultados.
5. Guardá el proyecto. Elegí **Implementar → Nueva implementación**.
6. Tipo: **Aplicación web**. Ejecutar como: **Yo**. Quién tiene acceso: **Cualquier persona** (la opción disponible puede variar según la cuenta/escuela).
7. Implementá, autorizá los permisos que Google te solicite y copiá la URL de la aplicación web que termina en `/exec`.
8. En `index.html`, buscá `const RESULTS_ENDPOINT = "PEGAR_AQUI_URL_WEB_APP";` y pegá la URL entre comillas.
9. Volvé a subir el `index.html` actualizado a GitHub. Probá una partida de prueba y revisá la hoja y el correo.

## Qué se guarda
Nombre, curso opcional, puntaje sobre 100, puntos, clasificaciones correctas, total de tarjetas, tiempo y fecha/hora.

## Privacidad y uso escolar
Avisá a los alumnos que sus nombres y resultados se registran. Usá solo los datos necesarios y evitá pedir DNI, teléfono o dirección. Si no necesitás nombres completos, podés pedir nombre de pila + inicial. La hoja queda accesible para la cuenta que la creó y para quienes tengan permisos.

## Importante
- GitHub Pages solo aloja el sitio; no recibe los puntajes por sí solo.
- Si no configurás Apps Script, el juego funciona, pero no guarda ni envía resultados.
- La conexión usa una aplicación web de Google Apps Script. Revisá las opciones de acceso que permite tu cuenta institucional.
