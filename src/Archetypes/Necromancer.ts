import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  public energyType: EnergyType = 'mana';
  public necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    this.necromancerInstances += 1;
  }
}

export default Necromancer;