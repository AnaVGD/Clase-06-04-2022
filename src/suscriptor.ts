import {Revista} from "./revista";
/**
 * Interfaz Observable
 */
export interface Observable {
  subscribe(observer: Suscriptor): void;
  unsubscribe(observer: Suscriptor): void;
  notify(): void;
}

/**
 * Interfaz Observer
 */
export interface Observer {
  update(observable: Observable): string;
}

export class Suscriptor implements Observer {
  /**
   * Cosntructor de la clase Suscriptor
   * @param _name nombre del suscriptor
   */
  constructor(private readonly _name: string) {}
  /**
   * Getter de name
   */
  public get name(): string {
    return this._name;
  }
  /**
   * Metodo para notificar a las suscriptores
   * @param revista se le pasa un Observable
   */
  update(revista: Observable): string {
    if (revista instanceof Revista) {
      return `Hola ${this._name} te presente la nueva revista llamada ${revista.name}, con id ${revista.id} ` +
      `y con fecha de lanzamiento ${revista.date}`;
      // console.log(`Nueva revista llamada ${revista.name}, con id ${revista.id} ` +
      // `y con fecha de lanzamiento ${revista.date}`);
    }
    return '';
  }
}

const myRevista = new Revista(0, 'Revista1', '06/04/2022');
const mySuscriptor1 = new Suscriptor('Ana');
const mySuscriptor2 = new Suscriptor('Tony');

myRevista.subscribe(mySuscriptor1);
myRevista.subscribe(mySuscriptor2);

console.log(myRevista.lanzamineto());
