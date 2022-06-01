import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  private static halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    Halfling.halflingInstances += 1;
    return Halfling.halflingInstances;
  }
}