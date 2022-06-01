import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  public energyType: EnergyType = 'mana';
  private static rangerInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Ranger.rangerInstances += 1;
    return Ranger.rangerInstances;
  }
}

export default Ranger;