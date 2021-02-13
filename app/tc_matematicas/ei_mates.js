

// Algoritmo Simple

function stringToHash(string) {
    
    let x = string.length; // 1. Calcular el numero de caracteres

    let y = x ** (2 * x); // 2. elevar x a (2 * el numero de caracteres)

    let hash = y / x; // 3. dividir (y / x) para reducir el tamaño del hash

    document.querySelector("h3").innerHTML = hash; // devuelve el valor a la GUI
}

// Algoritmo complejo

function hashing(string) {

    // Valor Constante 
    let fixedBinary = "1111001111011011011000101011000101110011000110101010001100110110010111010011011011010110101110111010000101110011011010010010010101011101000101011010011110000100001110111100011111110100100010110100000111110100111010111000001100111011011001111000010110010111";

    let binary = "";

    for(let i = 0; i < string.length; i++) {
    
        binary += string[i].charCodeAt().toString(2);
    }

    // Comprobar bits de la cadena de texto
    if(binary.length <= 256) {

        // Lista de cada caracter
        let arrInit = [...string];

        // Movemos el primer caracter (index 0) a ultima posicion
        arrInit.push(arrInit.shift());


        // Declaramos segunda lista
        if (arrInit.length == 5) {
            var arrSec = [(arrInit[0].charCodeAt(0) + arrInit[arrInit.length - 1].charCodeAt(0)), (parseInt(binary[6]) + arrInit[4].charCodeAt(0)), (parseInt(binary[5]) + arrInit[4].charCodeAt(0))]; 
        } else if(arrInit.length == 4) {
            var arrSec = [(arrInit[0].charCodeAt(0) + arrInit[arrInit.length - 1].charCodeAt(0)), (parseInt(binary[6]) + arrInit[3].charCodeAt(0)), (parseInt(binary[5]) + arrInit[3].charCodeAt(0))];
        } else if (arrInit.length == 3) {
            var arrSec = [(arrInit[0].charCodeAt(0) + arrInit[arrInit.length - 1].charCodeAt(0)), (parseInt(binary[6]) + arrInit[2].charCodeAt(0)), (parseInt(binary[5]) + arrInit[2].charCodeAt(0))]; 
        } else if (arrInit.length == 2) {
            var arrSec = [(arrInit[0].charCodeAt(0) + arrInit[arrInit.length - 1].charCodeAt(0)), (parseInt(binary[6]) + arrInit[1].charCodeAt(0)), (parseInt(binary[5]) + arrInit[1].charCodeAt(0)), (parseInt(binary[4]) + arrInit[1].charCodeAt(0))];
        } else if (arrInit.length == 1) {
            var arrSec = [(arrInit[0].charCodeAt(0) + arrInit[arrInit.length - 1].charCodeAt(0)), (parseInt(binary[6]) + arrInit[0].charCodeAt(0)), (parseInt(binary[5]) + arrInit[0].charCodeAt(0)), (parseInt(binary[4]) + arrInit[0].charCodeAt(0)), (parseInt(binary[3]) + arrInit[0].charCodeAt(0))];
        } else {
            var arrSec = [];
        }
        

        // Convertimos cada caracter a codigo ASCII y lo asignamos a "arrSec"
        for(let i = 0; i < arrInit.length; i++) {
            arrSec.push(arrInit[i].charCodeAt(0));
        }

        // Primer Desorden
        arrSec2 = array_move(arrSec, 0, 1);
        arrSec3 = array_move(arrSec2, arrSec2.length - 1, 3);
        arrSec4 = array_move(arrSec3, 2, 0);


        // Declaramos otra lista para almacenar las operaciones realizadas
        let arrAlgthm = [];


        // Operaciones Matemáticas
        for(i = 0; i < arrSec4.length; i++) {
            arrAlgthm.push(Math.trunc((10000 * (((i + 1) ** 2) / (arrSec4[i] + 50))) + 5));
        }



        // Operaciones Matemáticas para generar llave
        arrAlgthm.push(Math.trunc((((arrAlgthm[0]) ** Math.E) / (3 * arrAlgthm[0])) + 1));

        

        // Segundo desorden
        array_move(arrAlgthm, arrAlgthm.length - 1, arrAlgthm.length - 2);
        array_move(arrAlgthm, arrAlgthm.length - 2, arrAlgthm.length - 3);
        array_move(arrAlgthm, arrAlgthm.length - 3, arrAlgthm.length - 4);
        array_move(arrAlgthm, arrAlgthm.length - 2, 0);

        
        // Asignar al ultimo valor
        arrAlgthm[arrInit.length - 1] =  arrInit.length + arrAlgthm.length;

        let finalBinary = "";

        // Conversion a decimal
        for(let i = 0; i < arrAlgthm.length; i++) {
            finalBinary += arrAlgthm[i].toString(2);
        }

        let arrSec4Length = arrSec4.toString().length;

        // Acabar transformar en 256 bits hash
        if(finalBinary.length < 256) {

            for(let i = arrSec4Length; finalBinary.length < 256; i++) {
                finalBinary += fixedBinary[i];
            }
        }

        // Hash Final
        let hash = binaryToHex(finalBinary).result;


        // -----------------------Fin del Algoritmo-----------------------------------------


        //Procesos Secundarios
            // Función usada anteriormente para mover elementos en lista
            function array_move(arr, old_index, new_index) {
                if (new_index >= arr.length) {
                    var k = new_index - arr.length + 1;
                    while (k--) {
                        arr.push(undefined);
                    }
                }
                arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
                return arr;
            };

            // Funcion para convertir a Hexadecimal
            function binaryToHex(s) {
                var i, k, part, accum, ret = '';
                for (i = s.length-1; i >= 3; i -= 4) {
                    // extract out in substrings of 4 and convert to hex
                    part = s.substr(i+1-4, 4);
                    accum = 0;
                    for (k = 0; k < 4; k += 1) {
                        if (part[k] !== '0' && part[k] !== '1') {
                            // invalid character
                            return { valid: false };
                        }
                        // compute the length 4 substring
                        accum = accum * 2 + parseInt(part[k], 10);
                    }
                    if (accum >= 10) {
                        // 'A' to 'F'
                        ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
                    } else {
                        // '0' to '9'
                        ret = String(accum) + ret;
                    }
                }
                // remaining characters, i = 0, 1, or 2
                if (i >= 0) {
                    accum = 0;
                    // convert from front
                    for (k = 0; k <= i; k += 1) {
                        if (s[k] !== '0' && s[k] !== '1') {
                            return { valid: false };
                        }
                        accum = accum * 2 + parseInt(s[k], 10);
                    }
                    // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
                    ret = String(accum) + ret;
                }
                return { valid: true, result: ret };
            }


        document.querySelector(".complex").innerHTML = hash.toLowerCase();
        document.querySelector(".complex").style.color = "black";

    } else {
        document.querySelector(".complex").innerHTML = "¡Error! Tu cadena tiene " + binary.length + " bits. La cadena debe ser menor de 256 bits.";
        document.querySelector(".complex").style.color = "red";
    }
}




// Acceso a la GUI

const button1 = document.querySelector("#button1");

button1.addEventListener("click", () => {
    let word = document.querySelector("#input_simple").value;
    stringToHash(word);
});

const button2 = document.querySelector("#button2");

button2.addEventListener("click", () => {
    let word = document.querySelector("#input_complex").value;
    hashing(word);
});