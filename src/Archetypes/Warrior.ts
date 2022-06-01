import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  public energyType: EnergyType = 'mana';
  public warriorInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    this.warriorInstances += 1;
  }
}

export default Warrior;