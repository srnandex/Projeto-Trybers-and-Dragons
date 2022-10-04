import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _numberMage = 0;   
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._numberMage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Mage._numberMage;
  }
}

export default Mage;