function validaUser(){
   var useStr = localStorage.getItem("userDASH");
   if (!useStr){
       window.location = "index.html";
       return;
   }
}

function gerarRelatorio(){
    /*
   - recuperar os valores digitados nos campos de data
   - montar a URL para acessar esse back end
   - ao receber a resposta, extrair o JSON dela e montar o relatório
   */
   var txtIni = document.getElementById("txtDataInicio").value;
   var txtFim = document.getElementById("txtDataFim").value;

   var url = `http://localhost:8088/buscarpordata?inicio=${txtIni}&fim=${txtFim}`;
   
   fetch(url).then(resposta => resposta.json()).then(lista => preencherRelatorio(lista));

}

function preencherRelatorio(lista){

   var strRelatorio = `<br><div class="row">
                       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-1 col-xl-1">
                       <b>ID</b>
                       </div>
                       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                       <b>Data do Evento</b>  
                       </div>
                       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                       <b>Nome do Alarme</b>
                       </div>
                       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                       <b>Descrição do Alarme</b>
                       </div>
                       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                       <b>Hostname</b>
                       </div>
                       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                       <b>IP</b>
                       </div>
                       </div>`;

   for (i=0; i<lista.length; i++){
       var evento = lista[i];

       strRelatorio = strRelatorio + `<div class="row">
                                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-1 col-xl-1">
                                         ${evento.numSeq}
                                      </div>
                                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                         ${evento.dataEvento}
                                      </div>
                                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                         ${evento.alarme.nome}
                                      </div>
                                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                         ${evento.alarme.descricao}
                                      </div>
                                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                         ${evento.equipamento.hostname}
                                      </div>
                                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                         ${evento.equipamento.ipAddr}
                                      </div>
                                   </div>`; 
   }
   document.getElementById("relatorio").innerHTML = strRelatorio;
}


function imprimir(){
  document.getElementById("botao1").style = "visibility:hidden";
  document.getElementById("botao2").style = "visibility:hidden";
  document.getElementById("botao3").style = "visibility:hidden";
  window.print();
  document.getElementById("botao1").style = "visibility:visible";
  document.getElementById("botao2").style = "visibility:visible";
  document.getElementById("botao3").style = "visibility:visible";
}


function logout() {
  localStorage.removeItem("userDASH");
  window.location = "index.html";
}