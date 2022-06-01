import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  public energyType: EnergyType = 'mana';
  private static warriorInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Warrior.warriorInstances += 1;
    return Warrior.warriorInstances;
  }
}

export default Warrior;