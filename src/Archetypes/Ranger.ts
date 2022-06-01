import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  public energyType: EnergyType = 'mana';
  public rangerInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    this.rangerInstances += 1;
  }
}

export default Ranger;