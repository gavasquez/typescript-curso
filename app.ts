
// Objetos
type Trasnfomes = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number
  disparar?: () => void,
}

const batimovil: Trasnfomes = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4
};

const bumblebee: Trasnfomes = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() { // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type Villa = {
  nombre: string,
  edad?: number,
  mutante: boolean
}
// Villanos debe de ser un arreglo de objetos personalizados
const villanos: Villa[] = [{
  nombre: "Lex Luthor",
  edad: 54,
  mutante: false
}, {
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
}, {
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
type Multi1 = {
  poder: string,
  estatura: number,
}


type Multi2 = {
  lider: boolean,
  miembros: string[],
}

// cree dos tipos, uno para charles y otro para apocalipsis
const charles: Multi1 | Multi2 = {
  poder: "psiquico",
  estatura: 1.78
};

const apocalipsis: Multi1 | Multi2 = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Multi1 | Multi2;

console.log(apocalipsis)

mystique = charles;
mystique = apocalipsis;
