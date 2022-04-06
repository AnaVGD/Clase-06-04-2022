import 'mocha';
import {expect} from 'chai';
import {Revista} from "./../src/revista";
import {Suscriptor} from "./../src/suscriptor";

describe('Ejercicio 1', () => {
  let myRevista: Revista;

  let mySuscriptor1: Suscriptor;
  // let mySuscriptor2: Suscriptor;

  // myRevista.subscribe(mySuscriptor1);
  // myRevista.subscribe(mySuscriptor2);
  beforeEach(() => {
    myRevista = new Revista(0, 'Revista1', '06/04/2022');
    mySuscriptor1 = new Suscriptor('Ana');
    // mySuscriptor2 = new Suscriptor('Tony');
  });
  describe('Clase Revista', () => {
    it('Existe la clase Revista', () => {
      expect(Revista != undefined).to.be.true;
    });
    it('Se puede instanciar', () => {
      expect(myRevista instanceof Revista).to.be.true;
    });
    it('Tiene un atributo id', () => {
      expect(myRevista.id).to.be.eql(0);
    });
    it('Tiene un atributo name', () => {
      expect(myRevista.name).to.be.eql('Revista1');
    });
    it('Tiene un atributo date', () => {
      expect(myRevista.date).to.be.eql('06/04/2022');
    });
    it('Se añade un suscriptot y se comprueba que no existan dos suscripteres iguales', () => {
      myRevista.subscribe(mySuscriptor1);
      expect(() => {
        myRevista.subscribe(mySuscriptor1);
      }).to.throw('Suscriptor ya existe');
    });
    // it('Se notifica a los suscriptores', () => {
    //   expect(myRevista.lanzamineto()).to.be.eql('06/04/2022');
    // });
  });
  describe('Clase Suscriptor', () => {
    it('Existe la clase Suscriptor', () => {
      expect(Suscriptor != undefined).to.be.true;
    });
    it('Se puede instanciar', () => {
      expect(mySuscriptor1 instanceof Suscriptor).to.be.true;
    });
    it('Tiene un atributo id', () => {
      expect(mySuscriptor1.name).to.be.eql('Ana');
    });
    it('Se notifica a los suscriptores', () => {
      myRevista.subscribe(mySuscriptor1);
      expect(myRevista.lanzamineto()).not.to.be.eql(['']);
      expect(myRevista.lanzamineto()).to.be.eql(["Hola Ana te presente la nueva revista llamada Revista1, con id 0 y con fecha de lanzamiento 06/04/2022"]);
    });
  });
});
