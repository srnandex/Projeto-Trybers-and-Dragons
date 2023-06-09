import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _numberNecromancer = 0;   
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._numberNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Necromancer._numberNecromancer;
  }
}

export default Necromancer;