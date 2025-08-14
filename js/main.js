const ipv4Ingreso = document.getElementById("ipv4")
const btn = document.getElementById("calcular")
const result = document.getElementById("result")



btn.addEventListener("click", () => {

    let valorBinario = combersion(ipv4Ingreso.value)

    result.innerText = valorBinario
})

function combersion(ipv4) {
    try {
        let octetos = ipv4.split(".")
        if (octetos.length != 4) {
            return "Error de formato"
        }
        for (let index = 0; index < octetos.length; index++) {
            if (parseInt(octetos[index]) > 255) {
                return "Error de formato"
            }
        }
        return ipv4_binario(parseInt(octetos[0])) + "." + ipv4_binario(parseInt(octetos[1])) + "." + ipv4_binario(parseInt(octetos[2])) + "." + ipv4_binario(parseInt(octetos[3]))
    } catch (error) {
        return "Error de formato"
    }

}
function ipv4_binario(octeto) {
    binario = "";
    const valoresipv4 = [128, 64, 32, 16, 8, 4, 2, 1];
    for (let index = 0; index < valoresipv4.length; index++) {
        if (octeto >= valoresipv4[index]) {
            octeto -= valoresipv4[index]
            binario += "1"
        } else {
            binario += "0"
        }

    }
    return binario
}
