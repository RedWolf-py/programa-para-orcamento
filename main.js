

var xy = (e) => {
  return document.querySelector(e);
};

var xys = (e) => {
  return document.querySelectorAll(e);
}


var menu = xy('.menu');

menu.addEventListener('click', function () {
  var diferente = xy('.mover').classList.toggle("mostrar");
});

var tagLi = document.getElementsByTagName('li');

for (let i = 0; i < tagLi.length; i++) {
  tagLi[i].addEventListener("click", () => {

    document.querySelector('.mover').classList.remove('mostrar');

  });
}

var iconBx = xys('.iconBx');

var contentBx = xys('.contentBx');


for (var i = 0; i < iconBx.length; i++) {
  var clicou = iconBx[i].addEventListener("click", function () {
    for (var i = 0; i < contentBx.length; i++) {
      contentBx[i].className = 'contentBx';

    }
    document.getElementById(this.dataset.id).className = 'contentBx active';

  })

}

var calcular = xy('.calcular');

var somaFinal = [];
var arrayconta = [];

var somar2;
var calcularSoma;

function metroQuadrado() {

  var clienteP = xy('.cliente').value;
  var vidroE = xy('.espessura').value;
  var vidroM = xy('.modelo2').value;
  var altura = xy('.altura').value;
  var largura = xy('.largura').value;
  var ferragen = xy('.ferragen').value;
  var material = xy('.material').value;
  var preco = xy('.preco').value;

  var resultado = xy('.resultado');

  var alturaStr = altura.replace(/\D+/g, '');
  var larguraStr = largura.replace(/\D+/g, '');
  var precoStr = preco.replace(/\D+/g, '');
  var ferragenStr = ferragen.replace('', '0');
  var materialStr = material.replace('', '0');
  var valorInt = parseInt(alturaStr) * parseInt(larguraStr);

  var valorFormatado = (valorInt / (100));

  var calcularVidroPreco = (valorFormatado * (precoStr) / 100);

  var vidroPreco = calcularVidroPreco.toFixed();


  var conversao = [parseInt(vidroPreco), parseInt(ferragenStr), parseInt(materialStr)];

  var somar = conversao.reduce(function (somar, i) {
    return somar + i;
  });



  resultado.innerHTML = `R$: ${somar}`;

  somar2 = somar


  arrayconta.push(somar2)
  campoModel();
  somarArray()
};

calcular.addEventListener('click', metroQuadrado);


function limpar() {

  var clienteL = xy('.cliente').value = "";
  var altura = xy('.altura').value = "";
  var largura = xy('.largura').value = "";
  var ferragen = xy('.ferragen').value = "";
  var material = xy('.material').value = "";
  //var vidroE = xy('.espessura').value = "";
  //var vidroM = xy('.modelo2').value = "";
}

function campoModel() {

  //let clienteX = xy('.cliente').value;
  let espessuraX = xy('.espessura')
  let modeloX = xy('.modelo2')

  let sessao = modeloX.options[modeloX.selectedIndex];
  let sessaoFinal = sessao.value;

  let espessuraZ = espessuraX.options[espessuraX.selectedIndex];
  let espessuraFinal = espessuraZ.value;

  if (sessaoFinal.length <= 0) { 
    alert('Nome Do Cliente e Modelo é obrigatorio ser Preenchido')

  }

}

var orcamentoFinal = [];

const salvarorcamento = xy('.salvarorcamento');

salvarorcamento.addEventListener("click", () => {

  var objeto = new Array();

  if (JSON.parse(localStorage.getItem("objeto")) != null) {
    orcamentoFinal.push(JSON.parse(localStorage.getItem("objeto")));
  }
  var clienteP = xy('.cliente').value;
  var vidroE = xy('.espessura').value;
  var vidroM = xy('.modelo2').value;
  var alturaV = xy('.altura').value;
  var larguraV = xy('.largura').value;
  var ferragenV = xy('.ferragen').value;
  var materialV = xy('.material').value;
  var result7 = xy('.result7')
  //var valorbrutoV = xy('.resultado').value;
  //var valorclienteV = xy('.resultadofinal').value;

  var tipoVidro = [clienteP, vidroM, vidroE, alturaV, larguraV, ferragenV, materialV, somar2];

  orcamentoFinal.push(tipoVidro);

  var pessoaJson = JSON.stringify(orcamentoFinal);
  localStorage.setItem("objeto", pessoaJson);



  result2.insertAdjacentHTML('beforeend', `<p id="clienteP">${clienteP}</p>`);

  result2.insertAdjacentHTML('beforeend', `<p id="modeloespessura">${['Modelo:' + ' ' + vidroM + ' ' + ' ' + 'Espessura:' + ' ' + vidroE]}</p>`);

  result2.insertAdjacentHTML('beforeend', `<p id="alturaLargura">${['Altura:' + ' ' + alturaV + ' ' + "X" + ' ' + larguraV + ' ' + 'Lagura']}</p>`);


  result2.insertAdjacentHTML('beforeend', `<p id="materialA">${[`Material em Aluminio R\$${materialV}`]}</p>`);

  result2.insertAdjacentHTML('beforeend', `<p id="materialF">${[`Material De Ferragens R\$ ${ferragenV}`]}</p>`);

  result2.insertAdjacentHTML('beforeend', `<p id="somaBruta">${[`Valor Bruto R\$ ${somar2}`]}</p>`);

  result3.insertAdjacentHTML('beforeend', `<p id="modeloespessura">${['Modelo:' + ' ' + vidroM + ' ' + ' ' + 'Espessura:' + ' ' + vidroE]}</p>`);

  result3.insertAdjacentHTML('beforeend', `<p id="alturaLargura">${['Altura:' + ' ' + alturaV + ' ' + "X" + ' ' + larguraV + ' ' + 'Lagura']}</p>`);


  result4.insertAdjacentHTML('beforeend', `<p id="alturaLarguraPF">${['Altura:' + ' ' + alturaV + ' ' + "X" + ' ' + larguraV + ' ' + 'Lagura' + ' ' + 'R$:' + ' ' + 'Valor:' + ' ' + somar2]}</p>`);

  alert("Salvo com Sucesso !");

  limpar()
  somarArray()

  result7.innerHTML = `Valor Total: R$: ${calcularSoma}`

});

let data = new Date();
let dia = String(data.getDate()).padStart(2, '0')
let mes = String(data.getDate() + 1).padStart(2, '0')
let ano = data.getFullYear();
let hoje = dia + '/' + mes + '/' + ano




function somarArray() {

  let inicioA = 0
  for (let i = 0; i < arrayconta.length; i++) {

    calcularSoma = inicioA += arrayconta[i];


  }

}


function gerarPdf() {

  let clienteP = xy('#clienteP').innerHTML;
  let dados = xy('#result3').innerHTML;


  var janela = window.open("width=1000,height=800");
  janela.document.write('<html><head>');
  janela.document.write(`<title>Data do Orçamento ${hoje}</title></head>`);

  janela.document.write('<body>');
  janela.document.write('<p>======================================================================================</p>');
  janela.document.write('<h1>');
  janela.document.write('<center>Vidraçaria Modesto <img width="60" height="50" src="/imgV/vidros.jpg"/></center>')
  janela.document.write('</h1>');
  janela.document.write('<p>======================================================================================</p>');

  janela.document.write('<p>======================================================================================</p>');

  janela.document.write(`<h1><center>${clienteP}</center></h1>`);
  ('<p>======================================================================================</p>');
  janela.document.write(`<h2><p>${dados}</p></h2>`);

  //janela.document.write('<p>'+dados+'</p>')

  janela.document.write(`<p>Data do Orçamento ${hoje}</p>`);

  janela.document.write('</budy></html>');
  janela.document.close();
  janela.print();

}


document.querySelectorAll('.cor').forEach(function (hove) {
  hove.addEventListener('click', function (e) {
    xy('.cor.selected').classList.remove('selected');
    hove.classList.add('selected')

  });
})

var footerClick = xys('.preco,.altura,.largura, .tot, .cliente');

for (var i = 0; i < footerClick.length; i++) {
  footerClick[i].addEventListener("click", function () {
    xy('.footer').classList.add('show')

  })
};
function ModeloVi() {
  let result05 = document.getElementById('result5')
  let MdOptions = xy('.modelo2').value;
  //let MdOptions = somaMd.options[somaMd.selectedIndex].value;

  let portaabrir = xy('.portaabrir');
  let portacorreatras = xy('.portacorreratraz');
  let portacorrer4 = xy('.porta4');
  let janelas = xy('.janelas');
  let pivoltanteX = xy('.pivoltanteX');
  let basculaX = xy('.basculaX');
  let deslisanteporta = xy('.deslisanteporta');
  let versatikporta = xy('.versatikporta');

  if (MdOptions == 'portaCorrervao') {
    portacorrer4.style.display = 'block'
    result05.appendChild(portacorrer4)
  } else {
    portacorrer4.style.display = 'none'
  }

  if (MdOptions == 'portaPivoltante') {
    portaabrir.style.display = 'block'
    result05.appendChild(portaabrir)
  } else {
    portaabrir.style.display = 'none'
  }

  if (MdOptions == 'portaatrazparede') {
    portacorreatras.style.display = 'block'
    result05.appendChild(portacorreatras)
  } else {
    portacorreatras.style.display = 'none'
  }

  if (MdOptions == 'Janela') {
    janelas.style.display = 'block'
    result05.appendChild(janelas)
  } else {
    janelas.style.display = 'none'
  }

  if (MdOptions == 'bascula') {
    basculaX.style.display = 'block'
    result05.appendChild(basculaX)
  } else {
    basculaX.style.display = 'none'
  }

  if (MdOptions == 'pivotante') {
    pivoltanteX.style.display = 'block'
    result05.appendChild(pivoltanteX)
  } else {
    pivoltanteX.style.display = 'none'
  }

  if (MdOptions == 'deslisanteporta') {
    deslisanteporta.style.display = 'block'
    result05.appendChild(deslisanteporta)
  } else {
    deslisanteporta.style.display = 'none'
  }

  if (MdOptions == 'versatikporta') {
    versatikporta.style.display = 'block'
    result05.appendChild(versatikporta)
  } else {
    versatikporta.style.display = 'none'
  }

}

function porcentoSo() {

  let result7 = xy('.result7')

  let somaPorcento1 = xy('.porcento');
  let SpOptions = somaPorcento1.options[somaPorcento1.selectedIndex].value;
  let somarporcentoT = parseInt(SpOptions) * parseInt(calcularSoma);
  let somarporcentoX = parseInt(somarporcentoT) / 100;
  let somarporcentoF = somarporcentoX + calcularSoma;

  result7.innerHTML = `Valor Total: R$: ${somarporcentoF}`

}

function Px() {
  let inputN = xy('.entrarP').value;
  let porcentoX2 = xy('.porcento2');
  let Options = porcentoX2.options[porcentoX2.selectedIndex].value;
  let smpT = parseInt(Options) * parseInt(inputN);
  let smpX = parseInt(smpT) / 100;
  let smpF = parseInt(smpX) + parseInt(inputN);

  let result12 = xy('.result12');

  result12.innerHTML = `Valor Final: R$: ${smpF}`



}





