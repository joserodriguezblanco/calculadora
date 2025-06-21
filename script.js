document.addEventListener("DOMContentLoaded", () => {
    //Se define el input
    const inputResultado = document.getElementById("input-resultado");
    const inputOperacion = document.getElementById("input-operacion");

    //Se definen los botones
    const boton1 = document.getElementById("boton-uno");
    const boton2 = document.getElementById("boton-dos");
    const boton3 = document.getElementById("boton-tres");
    const boton4 = document.getElementById("boton-cuatro");
    const boton5 = document.getElementById("boton-cinco");
    const boton6 = document.getElementById("boton-seis");
    const boton7 = document.getElementById("boton-siete");
    const boton8 = document.getElementById("boton-ocho");
    const boton9 = document.getElementById("boton-nueve");
    const boton0 = document.getElementById("boton-cero");

    //se definen los botones de las operaciones
    const botonSuma = document.getElementById("boton-sumar");
    const botonResta = document.getElementById("boton-restar");
    const botonMultiplicacion = document.getElementById("boton-multiplicar");
    const botonDivision = document.getElementById("boton-dividir");
    const botonPorcentaje = document.getElementById("boton-porcentaje");
    const botonNegativo = document.getElementById("boton-negativo");

    //se definen los botons de acciones especiales
    const botonPunto = document.getElementById("boton-punto");
    const botonBorrar = document.getElementById("boton-borrar");
    const botonLimpiar = document.getElementById("boton-limpiar");
    const botonIgual = document.getElementById("boton-resolver");

    //Eventos de los botones con números
    boton1.addEventListener("click", () => {
        agregarElementos(boton1.textContent);
    });
    boton2.addEventListener("click", () => {
        agregarElementos(boton2.textContent);
    });
    boton3.addEventListener("click", () => {
        agregarElementos(boton3.textContent);
    });
    boton4.addEventListener("click", () => {
        agregarElementos(boton4.textContent);
    });
    boton5.addEventListener("click", () => {
        agregarElementos(boton5.textContent);
    });
    boton6.addEventListener("click", () => {
        agregarElementos(boton6.textContent);
    });
    boton7.addEventListener("click", () => {
        agregarElementos(boton7.textContent);
    });
    boton8.addEventListener("click", () => {
        agregarElementos(boton8.textContent);
    });
    boton9.addEventListener("click", () => {
        agregarElementos(boton9.textContent);
    });
    boton0.addEventListener("click", () => {
        agregarElementos(boton0.textContent);
    });

    //Eventos de los botones con oepraciones especiales
    botonSuma.addEventListener("click", () => {
        agregarElementos(botonSuma.textContent);
    });
    botonResta.addEventListener("click", () => {
        agregarElementos(botonResta.textContent);
    });
    botonMultiplicacion.addEventListener("click", () => {
        agregarElementos(botonMultiplicacion.textContent);
    });
    botonDivision.addEventListener("click", () => {
        agregarElementos(botonDivision.textContent);
    });
    botonPorcentaje.addEventListener("click", () => {
        agregarElementos(botonPorcentaje.textContent);
    });
    botonNegativo.addEventListener("click", () => {
        agregarElementos(botonNegativo.textContent);
    });

    botonPunto.addEventListener("click", () => {
        if (!(inputResultado.value.includes(".") || inputResultado.value === "+" || inputResultado.value === "-" || inputResultado.value === "*" || inputResultado.value === "/" || inputResultado.value === "%")) {
            inputResultado.value += botonPunto.textContent;
        };
    });

    botonBorrar.addEventListener("click", () => {
        inputResultado.value = inputResultado.value.slice(0, -1);
        if (inputResultado.value === "") {
            inputResultado.value = "0";
        };
    });

    botonLimpiar.addEventListener("click", () => {
        inputResultado.value = "0";
        inputOperacion.value = "";
    });

    botonIgual.addEventListener("click", () => {
        try {
            if (!inputOperacion.value.endsWith("=")) {
                if (!inputOperacion.value.endsWith("%")) {
                inputOperacion.value += inputResultado.value;                            
                }
                inputResultado.value = eval(inputOperacion.value.replace(/(\d+)%/g, '($1/100)'));
                inputOperacion.value += "=";
            }
        } catch (error) {
            inputResultado.value = "Error";
        };
    });

    function agregarElementos(elementoDigitado) {
        if (inputResultado.value === "Error" || inputResultado.value === "Infinity" || inputResultado.value === "NaN") {
            botonLimpiar.click();
            return;
        }

        resultado = inputResultado.value;
        operacion = inputOperacion.value;

        //Se evalúa si hay un número para hacerlo negativo o positivo
        if (elementoDigitado === "+/-"){
            if (typeof(Number(resultado)) === "number" && resultado !== "0") {
                if (resultado.startsWith("-")) {
                    resultado = resultado.slice(1);
                } else {
                    resultado = "-" + resultado;
                }
                inputResultado.value = resultado;
            }
        //Se evalua si es un operador
        }else if (elementoDigitado === "+" ||elementoDigitado === "-" ||elementoDigitado === "*" ||elementoDigitado === "/" ) {            

            if (operacion.endsWith("=") ){                
                operacion = resultado + elementoDigitado;
                inputOperacion.value = operacion;
                inputResultado.value = "0";
            }else
            
            if ( typeof(Number(resultado)) === "number" && !isNaN(Number(resultado)) && resultado !== "0") {                
                operacion += resultado + elementoDigitado;   
                inputOperacion.value = operacion;
                inputResultado.value = "0"; 
                resultado = "0";
            }else if (operacion.endsWith("+") ||operacion.endsWith("-") ||operacion.endsWith("*") ||operacion.endsWith("/") ||operacion.endsWith("%")) {                
                operacion = operacion.slice(0, -1) + elementoDigitado;
                inputOperacion.value = operacion;
            } else {
                operacion += resultado + elementoDigitado;
                inputOperacion.value = operacion;
                inputResultado.value = "0";
                resultado = "0"; 
            }

        } else if (resultado === "0"){ //Se evalua no se ha digitado nada            
            resultado = elementoDigitado;
            inputResultado.value = resultado;
        } else { //si ya hay algo digitado se concatena                        
            resultado += elementoDigitado;
            inputResultado.value = resultado;
        }
    };

});


