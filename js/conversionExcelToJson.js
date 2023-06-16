//Método para convertir archivos excel a JSON

// Método para subir archivos excel validos
function upload() {
  var files = document.getElementById("file_upload").files;
  if (files.length == 0) { //Si no ingreso archivo generamos una alerta
    alert("Please choose any file...");
    return;
  }
  var filename = files[0].name;
  var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
  if (extension == ".XLS" || extension == ".XLSX") { //Verificamos que se ingreso un archivo excel valido; Si es valido llamamos a la función de conversion, caso contrario generamos alerta
    excelFileToJSON(files[0]);
  } else {
    alert("Please select a valid excel file.");
  }
}

//Método que toma el archivo excel y lo convierte a JSON
function excelFileToJSON(file) {
  try { 
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function (e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: "binary",
      });
      var result = {}; //Generamos el contenedor del JSON
      workbook.SheetNames.forEach(function (sheetName) { //Evaluamos cada pestaña del libro excel con su contenido
        var roa = XLSX.utils.sheet_to_row_object_array( 
          workbook.Sheets[sheetName]
        );
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      //Mostramos el resultado de la conversion en consola y pantalla
      console.log(result);
      var resultEle = document.getElementById("json-result");
      resultEle.value = JSON.stringify(result, null, 4);
      resultEle.style.display = "block";
    };
  } catch (e) {
    console.error(e);
  }
}
