{/* <td class="c"><a href="https://solvistorias.csosa.com.br/lancamentos/cadastro/?listCodVistoria=381656">Faturar</a></td>

const info = document.querySelectorAll('.info')

info.forEach(element => {
    const faturamento = document.createElement('div')
    const a = document.createElement('a')

    faturamento.classList.add('tempoExp')

    a.href = "#"
    a.innerText = 'Faturar'

    faturamento.appendChild(a)
    element.appendChild(faturamento)
});


let elementoCapturado = Array.from(document.querySelectorAll("td.c"));
let arrayLaudoEmAtraso = [];
let arrayLaudoEmTempoNormal = [];
let arrayLaudoTaxaPrePaga = [];

class LaudoAtrasado {
  constructor(NumeroLaudo, Ecv, Placa, Situacao, TempoPercorrido) {
    this.NumeroLaudo = NumeroLaudo;
    this.Ecv = Ecv;
    this.Placa = Placa;
    this.Situacao = Situacao;
    this.TempoPercorrido = TempoPercorrido;
  }
}

class LaudoTaxaPre extends LaudoAtrasado {
  constructor(NumeroLaudo, Ecv, Placa, Situacao, TempoPercorrido) {
    super(NumeroLaudo, Ecv, Placa, Situacao, TempoPercorrido);
  }
}

class LaudoNormal extends LaudoAtrasado {
  constructor(NumeroLaudo, Ecv, Placa, Situacao, TempoPercorrido) {
    super(NumeroLaudo, Ecv, Placa, Situacao, TempoPercorrido);
  }
}

for (
  let iNumeroLaudo = 0;
  iNumeroLaudo < elementoCapturado.length;
  iNumeroLaudo = iNumeroLaudo + 14
) {
  let iEmpresa = iNumeroLaudo + 1;
  let iPlaca = iNumeroLaudo + 2;
  let iSituacao = iNumeroLaudo + 9;
  let iEmissao = iNumeroLaudo + 10;

  let [dia, mes, ano, hora, minuto] = elementoCapturado[iEmissao].innerText
    .split(/[\/: ]/)
    .map((v) => parseInt(v));
  let data = new Date(ano, mes - 1, dia, hora, minuto);

  let inicio = new Date(data);
  let fim = new Date();
  let diferenca = new Date(fim - inicio);

  let horas = diferenca.getUTCHours();
  let minutos = diferenca.getUTCMinutes();
  let segundos = diferenca.getUTCSeconds();

  if (
    horas >= 1 &&
    minutos <= 59 &&
    elementoCapturado[iEmpresa].innerText !==
      "VISTO CAR BARRA DA ESTIVA 11429673004760"
  ) {
    let laudoComAtraso = new LaudoAtrasado(
      elementoCapturado[iNumeroLaudo].innerText,
      elementoCapturado[iEmpresa].innerText,
      elementoCapturado[iPlaca].innerText,
      elementoCapturado[iSituacao].innerText,
      `${horas}h:${minutos}m:${segundos}s`
    );
    arrayLaudoEmAtraso.push(JSON.stringify(laudoComAtraso));
  } else if (
    elementoCapturado[iEmpresa].innerText ===
    "VISTO CAR BARRA DA ESTIVA 11429673004760"
  ) {
    let laudosTaxaPrePaga = new LaudoTaxaPre(
      elementoCapturado[iNumeroLaudo].innerText,
      elementoCapturado[iEmpresa].innerText,
      elementoCapturado[iPlaca].innerText,
      elementoCapturado[iSituacao].innerText,
      `${horas}h:${minutos}m:${segundos}s`
    );
    arrayLaudoTaxaPrePaga.push(laudosTaxaPrePaga);
  } else {
    let laudoComTempoNormal = new LaudoNormal(
      elementoCapturado[iNumeroLaudo].innerText,
      elementoCapturado[iEmpresa].innerText,
      elementoCapturado[iPlaca].innerText,
      elementoCapturado[iSituacao].innerText,
      `${horas}h:${minutos}m:${segundos}s`
    );
    arrayLaudoEmTempoNormal.push(laudoComTempoNormal);
  }
}
console.log(`Laudo-Atrasado: ${arrayLaudoEmAtraso.length}`, arrayLaudoEmAtraso);
console.log(
  "Total Laudos: ",
  arrayLaudoEmAtraso.length +
    arrayLaudoEmTempoNormal.length +
    arrayLaudoTaxaPrePaga.length
);


let lista = document.querySelectorAll("td.c");
for (let iNumeroLaudo = 0; iNumeroLaudo < lista.length; iNumeroLaudo = iNumeroLaudo + 14) {
  let iEmpresa = iNumeroLaudo + 1;
  let iPlaca = iNumeroLaudo + 2;
  let iSituacao = iNumeroLaudo + 9;

 console.log(lista[iNumeroLaudo].innerText,','+lista[iEmpresa].innerText,','+lista[iPlaca].innerText,','+lista[iSituacao].innerText)
} */}




// let Array = ['Aldeny','Jr',"Nelson"]

// Array.forEach((element, i) => {
//     console.log(element, i)
// });


// let matriz = [1,2,3,4,5,6,7,8,9]
// let subSequencia = [7,1,9,3,5]
// let lis = []

// function validar(matriz,subSequencia) {
//   let matrizControle = 0
//   let subSequenciaControle = 0

//   while (matrizControle < matriz.length && subSequenciaControle < subSequencia.length) {
//     if (matriz[matrizControle] == subSequencia[subSequenciaControle]) {
      
//       matrizControle++
//       subSequenciaControle++
//     } 
//     lis.push(subSequencia[matrizControle])
//     matrizControle++
    
//   }
//   return subSequenciaControle == subSequencia.length
// }

// console.log(validar(matriz,subSequencia))
// console.log(lis)


function ABCheck(str) { 

  let regex = /a...p/g;
  let busca = str.search(regex); 

  if (busca === -1 ) {
    return console.log("false");
  }
  else {
    return console.log("true");
  }
         
}

ABCheck('pista emprestada')