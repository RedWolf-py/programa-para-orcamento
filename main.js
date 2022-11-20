

var xy = (e) => {
  return document.querySelector(e);
};

var xys = (e) => {
  return document.querySelectorAll(e);
}

//Variaveis de img

let pi = "/imgV/pivoltante.jpg"
let ba = "/imgV/bascula.jpg"
let ja2 = "/imgV/janela2.jpg"
let ja4 = "/imgV/janela4.jpg"
let po2 = "/imgV/porta2.jpg"
let po4 = "/imgV/porta4.jpg"
let pa = "/imgV/pabrir.jpg"
let pa2 = "/imgV/pabrir2.jpg"
let co = "/imgV/correratras.jpg"
let co2 = "/imgV/correratras2B.jpg"
let pj = "/imgV/portajumbo.jpg"
let vs = "/imgV/Versatik.jpg"
let dl = "/imgV/deslisante.jpg"
let lg = "/imgV/vidros.png"

//variaveis do projetos

let piX = document.getElementById('piX')
let baX = document.getElementById('baX')
let coX = document.getElementById('coX')
let coX2 = document.getElementById('coX2')
let jaX2 = document.getElementById('jaX2')
let jaX4 = document.getElementById('jaX4')
let maX = document.getElementById('max')
let poX2 = document.getElementById('poX2')
let poX4 = document.getElementById('poX4')
let paX = document.getElementById('paX')
let paX2 = document.getElementById('paX2')
let veX = document.getElementById('veX')
let deX = document.getElementById('deX')

const arr = [pi, ba, ja2, ja4, po2, po4, pa, pa2, co, co2, pj, vs, dl];

// variaveis de calculos

let calcularSoma;
const somararr = [];
const arr64 = [];
const imgconvert = [];
const localarray = [];

// funcao de animacao do background
function Animation() {
  xy(".img-bg img").animate([

    { transform: 'scale(2.0)' },
    { transform: 'scale(1.0)' }
  ], {

    duration: 15000,
    iterations: 1
  });
}

Animation();

setInterval(Animation, 600000)

setInterval(() => {
  localStorage.clear();
}, 1200000)

// Menu hamburguer para mobile

var menu = xy('.menu');
var calcular = xy('.calcular');
const SalvarPdf = xy('.salvarorcamento');
const ViaCliente = xy('.ViaCliente')

menu.addEventListener('click', function () {
  xy('.mover').classList.toggle("mostrar");
});

var tagLi = document.getElementsByTagName('li');

for (let i = 0; i < tagLi.length; i++) {
  tagLi[i].addEventListener("click", () => {

    document.querySelector('.mover').classList.remove('mostrar');

  });
}

//evento de click nos botoes de navegação mobile
var btli = xys('.btli');
var contentBx = xys('.contentBx');
var btn3 = xy('.btI');

for (var i = 0; i < btli.length; i++) {
  var clicou = btli[i].addEventListener("click", function () {
    for (var i = 0; i < contentBx.length; i++) {
      contentBx[i].className = 'contentBx';
    }
    document.getElementById(this.dataset.id).className = 'contentBx active';
  })
}


//trocar plano de fundo do programa

function datahora() {
  let bgY = document.getElementById('bg')
  let data = new Date();
  let hora = data.getHours();
  let min = data.getMinutes();
  if (hora >= 12) {
    bgY.src = '/img/bg2.jpg'

  }
}

document.onload = datahora();

// Funçõa para calcular valor metro quadrado do vidro

function metroQuadrado() {

  var altura = xy('.altura').value;
  var largura = xy('.largura').value;
  var preco = xy('.preco').value;
  var resultado = xy('.resultado');
  var alturaStr = altura.replace(/\D+/g, '');
  var larguraStr = largura.replace(/\D+/g, '');
  var precoStr = preco.replace(/\D+/g, '');

  var valorInt = parseInt(alturaStr) * parseInt(larguraStr);
  var valorFormatado = (valorInt / (100));
  var calcularVidroPreco = (valorFormatado * (precoStr) / 100);
  var vidroPreco = calcularVidroPreco.toFixed();
  resultado.innerHTML = `R$: ${vidroPreco}`;
  somararr.push(vidroPreco)
  somarArray();
  SalvarOrcamento()
  xy('.altura').value = "";
  xy('.largura').value = "";

};

calcular.addEventListener('click', campoModel);

// limpar os campos do imput

ViaCliente.addEventListener('click', () => {
  AddImage();

  xy('.cliente').value = "";
  xy('.preco').value = "";
  xy('.altura').value = "";
  xy('.largura').value = "";
  xy('.clienteFinal').value = "";

  DimencaoImg();
});

//funcao somar valores dos array

function somarArray() {

  let rt7 = xy('.result7')
  calcularSoma = somararr.reduce(function (calcularSoma, index) {
    return parseInt(calcularSoma) + parseInt(index);
  });
  rt7.innerHTML = `${calcularSoma}`

}
// funnção responssavel de selecionar os modelos dos projetos

function campoModel() {

  let modeloX = xy('.modelo2')
  let espessuraX = xy('.espessura')
  let clienteX = xy('.cliente')
  let sessao = modeloX.options[modeloX.selectedIndex];
  let sessaoFinal = sessao.value;
  let sessaocliente = clienteX.value;
  let espessuraZ = espessuraX.options[espessuraX.selectedIndex];
  let espessuraFinal = espessuraZ.value;
  //if (window.matchMedia("(max-width: 700px)").matches) {}
    if (sessaoFinal.length <= 0 || sessaocliente.length <= 0) {
      alert('Nome Do Cliente, E o Modelo Do Vidro são obrigatorio ser Preenchido')

    } else {
      metroQuadrado()
    }
  }

  // Salvando tudo no localStorage

  function SalvarOrcamento() {

    var objeto = new Array();
    if (JSON.parse(localStorage.getItem("objeto")) != null) {
      localarray.push(JSON.parse(localStorage.getItem("objeto")));
    }
    var vidroE = xy('.espessura').value;
    var vidroM = xy('.modelo2').value;
    var alturaV = xy('.altura').value;
    var larguraV = xy('.largura').value;
    var result10 = xy('.result10')
    var c2 = xy('.contente21')

    var tipoVidro = [vidroM, vidroE, alturaV, larguraV, calcularSoma];
    localarray.push(tipoVidro);
    var pessoaJson = JSON.stringify(localarray);
    localStorage.setItem("objeto", pessoaJson);
    c2.insertAdjacentHTML('beforeend', `<p id="modeloespessura">${['Modelo:' + ' ' + vidroM + ' ' + ' ' + 'Espessura:' + ' ' + vidroE]}</p>`);

    c2.insertAdjacentHTML('beforeend', `<p id="alturaLargura">${['Altura:' + ' ' + alturaV + ' ' + "X" + ' ' + larguraV + ' ' + 'Lagura']}</p>`);

    result10.insertAdjacentHTML('beforeend', `<p id="modeloespessura2">${['Modelo:' + ' ' + vidroM + ' ' + ' ' + 'Espessura:' + ' ' + vidroE]}</p>`);
    result10.insertAdjacentHTML('beforeend', `<p id="alturaLargura2">${['Altura:' + ' ' + alturaV + ' ' + "X" + ' ' + larguraV + ' ' + 'Lagura']}</p>`);
    result10.insertAdjacentHTML('beforeend', `<p id="somaBruta">${[`Valor Bruto R\$ ${calcularSoma}`]}</p>`);
  };

  // salvar nome do cliente
  function SalvarInput() {
    let clienteP = xy('.cliente').value;
    let salvarNome = xy('.contente21')

    let objeto = new Array();
    if (JSON.parse(localStorage.getItem("objeto")) != null) {
      localarray.push(JSON.parse(localStorage.getItem("objeto")));
    }
    localarray.push([clienteP]);
    let pessoaJson = JSON.stringify(localarray);
    localStorage.setItem("objeto", pessoaJson);
    salvarNome.insertAdjacentHTML('beforeend', `<p id="clienteP2">${clienteP}</p>`);


  }




  // funcao do menu desktop para alterar a cor do menu clicado

  document.querySelectorAll('.cor').forEach(function (hove) {
    hove.addEventListener('click', function (e) {
      xy('.cor.selected').classList.remove('selected');
      hove.classList.add('selected')

    });
  })

  // funcao de adicionar eventos nos campos dos inputs

  var footerClick = xys('.preco,.altura,.largura, .tot, .cliente');

  for (var i = 0; i < footerClick.length; i++) {
    footerClick[i].addEventListener("click", function () {
      xy('.footer').classList.add('show')

    })
  };


  //modelo dos vidros do painel mostrar modelo e salvar o que o cliente quer

  function ModeloVi() {

    let imgDi = xy('.imgDi')
    let MdOptions = xy('.modelo2').value;

    if (MdOptions == 'bascula') {
      imgDi.innerHTML = ""
      mgb = document.createElement('img')
      mgb.src = ba
      imgDi.appendChild(mgb)
      arr64.push(baX)
    }

    if (MdOptions == 'pivoltante') {
      imgDi.innerHTML = ""
      mgp = document.createElement('img')
      mgp.src = pi
      imgDi.appendChild(mgp)
      arr64.push(piX)

    }

    if (MdOptions == 'janela2B') {
      imgDi.innerHTML = ""
      mgj2 = document.createElement('img')
      mgj2.src = ja2
      imgDi.appendChild(mgj2)
      arr64.push(jaX2)

    }

    if (MdOptions == 'janela4B') {
      imgDi.innerHTML = ""
      mgj4 = document.createElement('img')
      mgj4.src = ja4
      imgDi.appendChild(mgj4)
      arr64.push(jaX4)

    }

    if (MdOptions == 'portaP') {
      imgDi.innerHTML = ""
      mgpa = document.createElement('img')
      mgpa.src = pa
      imgDi.appendChild(mgpa)
      arr64.push(paX)

    }

    if (MdOptions == 'portaP2B') {
      imgDi.innerHTML = ""
      mgpa2 = document.createElement('img')
      mgpa2.src = pa2
      imgDi.appendChild(mgpa2)
      arr64.push(paX2)

    }
    if (MdOptions == 'porta2B') {
      imgDi.innerHTML = ""
      mgpa2 = document.createElement('img')
      mgpa2.src = po2
      imgDi.appendChild(mgpa2)
      arr64.push(paX2)

    }

    if (MdOptions == 'porta4B') {
      imgDi.innerHTML = ""
      mgpo4 = document.createElement('img')
      mgpo4.src = po4
      imgDi.appendChild(mgpo4)
      arr64.push(poX4)

    }
    if (MdOptions == 'portaCorrer') {
      imgDi.innerHTML = ""
      mgco = document.createElement('img')
      mgco.src = co
      imgDi.appendChild(mgco)
      arr64.push(coX)

    }
    if (MdOptions == 'portaCorrer2B') {
      imgDi.innerHTML = ""
      mgco = document.createElement('img')
      mgco.src = co2
      imgDi.appendChild(mgco)
      arr64.push(coX2)

    }
    if (MdOptions == 'portaJumbo') {
      imgDi.innerHTML = ""
      mgpj = document.createElement('img')
      mgpj.src = pj
      imgDi.appendChild(mgpj)

    }
    if (MdOptions == 'portaDeslisante') {
      imgDi.innerHTML = ""
      mgdl = document.createElement('img')
      mgdl.src = dl
      imgDi.appendChild(mgdl)
      arr64.push(deX)
    }

    if (MdOptions == 'portaVersatik') {
      imgDi.innerHTML = ""
      mgvi = document.createElement('img')
      mgvi.src = vs
      imgDi.appendChild(mgvi)
      arr64.push(veX)
    }

    return;

  }



  //porcetagem do orçamento 

  function porcentoSo() {

    let result7 = xy('.result7')
    let resultMobile = xy('.resultaMobile');
    let somaPorcento1 = xy('.porcento');
    let SpOptions = somaPorcento1.options[somaPorcento1.selectedIndex].value;
    let somarporcentoT = parseInt(SpOptions) * parseInt(calcularSoma);
    let somarporcentoX = parseInt(somarporcentoT) / 100;
    let somarporcentoF = somarporcentoX + calcularSoma;

    result7.innerHTML = `Valor Total: R$: ${somarporcentoF}`
    resultMobile.innerHTML = `Total: R$: ${somarporcentoF}`

  }

  //calcular mao de obra

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

  //Criar imagem dinamicamente

  function CriarImage() {
    let contente4 = xy(".contente4")
    for (let i = 0; i < arr.length; i++) {
      img = document.createElement('img');
      img.src = arr[i]
      contente4.appendChild(img)
    }
  }
  CriarImage()
  //Criar imagem dinamicamente para Via do cliente 

  function AddImage() {

    let contentevia = xy(".contente21")

    let arr2 = arr64.filter(function (e, i) {
      return arr64.indexOf(e) === i
    });

    for (let i = 0; i < arr2.length; i++) {
      img = arr2[i]
      contentevia.appendChild(img)
    }
  }

  //criando imagens das ferragens

  ferragens.map((el) => {
    let imgF = xy('.clone').cloneNode(true);
    xy('.cont3').append(imgF);
    imgF.querySelector('.foto img').src = el.img;
    imgF.querySelector('.fotonome').innerHTML = el.nome

  })

  //Gerar imagems base64
  SalvarPdf.addEventListener('click', () => {
    //comparae elementos repetidos nos arrays
    const arr64Verificado = arr64.filter(function (el, index) {
      return arr64.indexOf(el) === index
    })

    for (let b = 0; b < arr64Verificado.length; b++) {
      let img64 = arr64Verificado[b];
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = 700
      canvas.height = 1700
      ctx.drawImage(img64, 5, 620, 300, 300);
      let imgbase64 = canvas.toDataURL();

      imgconvert.push(imgbase64)

    }

    GerarPDF();
  });

  //Gerar arquivo em PDF

  function GerarPDF() {
    let conteY = xy('.contente21')

    var doc = new jsPDF()
    for (let g = 0; g < imgconvert.length; g++) {
      let pdfFinal = imgconvert[g]
      doc.fromHTML(conteY, 10, 0)
      doc.addImage(pdfFinal, 10, 1, 300, 500)

    }
    doc.save('Orcamento.pdf')

  }


  // funcao para imprimir documento

  function Imprimir() {
    let ocultarMenu = xy('.listadiv')
    let im = xy('.btn')
    ocultarMenu.style.opacity = '0'
    im.style.opacity = '0'
    window.print()
    ocultarMenu.style.opacity = '1'
    im.style.opacity = '1'
  }

  // funcao para remderizar imagens

  function DimencaoImg() {
    let img = xys('.contente21 img')
    if (img.length == 1) {
      img.forEach((el) => {
        let img2 = el
        img2.style.width = '550px'
        img2.style.height = '550px'
        img2.style.marginTop = "130px"
        img2.style.marginLeft = "130px"
      })
    }
  }

  //salvar valor final para o cliente

  function ValorCliente() {
    let moscli = xy('.contente21')
    let resultaMobile2 = xy('.resultaMobile')
    let clienteFinal = xy('.clienteFinal').value;
    let clienteFinal2 = clienteFinal.replace(/\D+/g, '');

    let objeto = new Array();
    if (JSON.parse(localStorage.getItem("objeto")) != null) {
      localarray.push(JSON.parse(localStorage.getItem("objeto")));
    }
    localarray.push([clienteFinal2]);
    let pessoaJson = JSON.stringify(localarray);
    localStorage.setItem("objeto", pessoaJson);
    let resultFinal = parseInt(clienteFinal2) + parseInt(calcularSoma)

    moscli.insertAdjacentHTML('beforeend', `<p id="somaBruta">${[`Valor Bruto R\$ ${resultFinal}`]}</p>`);
    resultaMobile2.innerHTML = `Valor Cliente: $${resultFinal}`

  }