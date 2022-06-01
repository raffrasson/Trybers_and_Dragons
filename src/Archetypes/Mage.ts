import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  public energyType: EnergyType = 'mana';
  public mageInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    this.mageInstances += 1;
  }
}

export default Mage;