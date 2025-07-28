const params = new URLSearchParams(location.search)
const id = params.get("id")
const products = {
  "237": {
    produto:"João Batista Bernardino",
    lote:"238hjj",
    produtor:"João Batista Bernardino",
    local:"Ceasa",
    codigo:"43",
    distribuidor:"Horti DTC",
    cnpj:"34.687.789-44"
  }
}
const data = products[id] || {}
['prod','lote','produtor','local','codigo','distribuidor','cnpj'].forEach(k => {
  document.getElementById(k).innerText = data[k] || 'Não encontrado'
})
if(id){
  const url = `${location.origin}${location.pathname}?id=${id}`
  QRCode.toCanvas(document.getElementById('qrcode'), url, { width:200 })
}
