import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy

  attack(fighter: Fighter): void;
  special(fighter:Fighter): void;
  levelUp():void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;