import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  public energyType: EnergyType = 'mana';
  private static necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer.necromancerInstances += 1;
    return Necromancer.necromancerInstances;
  }
}

export default Necromancer;