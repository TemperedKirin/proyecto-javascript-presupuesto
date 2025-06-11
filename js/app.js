
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
}   