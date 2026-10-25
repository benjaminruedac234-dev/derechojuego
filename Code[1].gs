// Google Apps Script: recibe resultados, los guarda en Google Sheets y envía aviso por correo.
const EMAIL_DOCENTE = "PONER_TU_CORREO_AQUI";
const NOMBRE_HOJA = "Resultados";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(NOMBRE_HOJA);
    if (!sheet) {
      sheet = ss.insertSheet(NOMBRE_HOJA);
      sheet.appendRow(["Fecha y hora", "Nombre", "Curso", "Puntaje /100", "Puntos", "Clasificaciones correctas", "Total tarjetas", "Tiempo (segundos)", "Juego"]);
    }
    sheet.appendRow([
      new Date(data.fecha_hora || new Date()),
      String(data.nombre || "").slice(0, 80),
      String(data.curso || "").slice(0, 40),
      Number(data.puntaje || 0),
      Number(data.puntos || 0),
      Number(data.clasificaciones_correctas || 0),
      Number(data.total_tarjetas || 0),
      Number(data.tiempo_segundos || 0),
      String(data.juego || "Expediente bajo análisis")
    ]);
    if (EMAIL_DOCENTE && EMAIL_DOCENTE !== "PONER_TU_CORREO_AQUI") {
      MailApp.sendEmail({
        to: EMAIL_DOCENTE,
        subject: "Nuevo resultado: " + (data.nombre || "Alumno/a"),
        body: "Se registró una partida de Expediente bajo análisis.\n\n" +
          "Nombre: " + (data.nombre || "") + "\nCurso: " + (data.curso || "") +
          "\nPuntaje: " + (data.puntaje || 0) + "/100" +
          "\nClasificaciones correctas: " + (data.clasificaciones_correctas || 0) +
          "\nTiempo: " + (data.tiempo_segundos || 0) + " segundos\n\n" +
          "Revisá la hoja de cálculo para ver todos los resultados."
      });
    }
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
