export interface Indicator {
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: Date;
    valor?: number;
    serie?: SerieValue[];
}

export interface SerieValue {
    fecha: Date;
    valor: number;
}
