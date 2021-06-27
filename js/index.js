function calcular() {
  var horaEntrada = horasParaMinutos(
    document.getElementById("hora_entrada").value
  );
  var cargaHoraria = horasParaMinutos(
    document.getElementById("carga_horaria").value
  );
  var horaAlmoco = horasParaMinutos(
    document.getElementById("hora_almoco").value
  );
  var horaSaida = minutosParaHoras(horaEntrada + cargaHoraria + horaAlmoco);
  document.getElementById("saida").innerHTML = horaSaida;
}

function horasParaMinutos(horario) {
  var hora = horario.split(":")[0];
  var minutos = horario.split(":")[1];

  minutosHora = parseInt(hora) * 60;
  minutosMinutos = parseInt(minutos);

  return minutosHora + minutosMinutos;
}

function minutosParaHoras(tempoEmMinutos) {
  const horas = parseInt(tempoEmMinutos) / 60;
  var campoHora = horas.toString().split(".")[0];
  if (campoHora.length === 1) campoHora = "0" + campoHora;

  const minutos = (horas - parseInt(campoHora)) * 60;
  const minutosArredondados = Math.round(minutos);
  var campoMinutos = minutosArredondados.toString();
  if (campoMinutos.length === 1) campoMinutos = "0" + campoMinutos;

  return campoHora + ":" + campoMinutos;
}
