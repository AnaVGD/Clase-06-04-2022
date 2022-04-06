import {Observable, Observer, Suscriptor} from "./suscriptor";

export class Revista implements Observable {
  private suscriptores: Observer[] = [];
  constructor(private _id: number, private _name: string, private _date: string) {}
  /**
 * Getter de name
 */
  public get name(): string {
    return this._name;
  }
  /**
   * getter de date
   */
  public get date(): string {
    return this._date;
  }
  /**
   * getter id
   */
  public get id(): number {
    return this._id;
  }
  /**
 * Metodo que suscribe a un suscriptor
 * @param suscriptor suscriptor a suscribir
 */
  subscribe(suscriptor: Suscriptor) {
    if (this.suscriptores.includes(suscriptor)) {
      // throw new Error('Suscriptor ya existe');
      throw new Error('Suscriptor ya existe');
    } else {
      this.suscriptores.push(suscriptor);
    }
  }
  /**
 * Metodo que elimina a un suscriptor de la lista de lso suscriptores
 * @param suscriptor suscriptor a elimina
 */
  unsubscribe(suscriptor: Suscriptor) {
    const index = this.suscriptores.indexOf(suscriptor);
    if (index === -1) {
      throw new Error('El suscriptor no esta suscrito');
    } else {
      this.suscriptores.splice(index, 1);
    }
  }
  /**
 * Metodo que se encarga de notificar a los suscriptores
 */
  notify() {
    let suscipt: string[] = [];
    this.suscriptores.forEach((suscriptor) => suscipt.push(suscriptor.update(this)));
    return suscipt;
  }
  /**
 * Metodo de lanzamiento que se encarag de notificar los nuevos lanzamientos
 */
  lanzamineto() {
    return this.notify();
  }
}
