function contar() {
    let palabra = "ArielAnneOliverJoao"
    let palabraFragmentada = Array.from(palabra)
    let contador = 0
    console.log(palabraFragmentada)
    for(i=0; i<palabraFragmentada.length; i++) {
      if(palabraFragmentada[i] === "A") {
        contador++
      }else{
      }
    }
    return contador
  }
  
  console.log(contar())