
const ingresos = [
  new Ingreso('Salario', 20000),
  new Ingreso('Venta auto', 50000)
];

const egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
];

const totalIngresos = () => {
    let total = 0;

    for (let ingreso of ingresos) {
        total += ingreso.valor;
    }

    return total;
};

const totalEgresos = () => {
    let total = 0;

    for (let egreso of egresos) {
        total += egreso.valor;
    }

    return total;
};


const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency', 
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
};

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());

};    

const cargarIngresos = () => {
    let ingresosHTML = "";

    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
    return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.desciprcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor>+ ${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
};

const cargarEgresos = () => {
    let egresosHTML = "";

    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
    let porcentaje = egreso.valor / totalEgresos();

    return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(porcentaje)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
};


const cargarApp = () => {

}