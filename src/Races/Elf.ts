import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Elf._createdRacesInstances += 1;
  }

  static ElfInstances(): number {
    return Elf._createdRacesInstances;
  }
}