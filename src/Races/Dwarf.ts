import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _numberDwarf = 0;    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._numberDwarf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;   
  }

  static createdRacesInstances(): number {
    return Dwarf._numberDwarf;
  }
}

export default Dwarf;