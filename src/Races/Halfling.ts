import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _numberHalfling = 0;    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._numberHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;   
  }

  static createdRacesInstances(): number {
    return Halfling._numberHalfling;
  }
}

export default Halfling;