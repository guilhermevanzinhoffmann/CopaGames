export class Game{
  name: string;
  value: number;
  console: string;
  selected: boolean;
  constructor(name: string, value: number, console: string){
    this.name = name;
    this.value = value;
    this.console = console;
    this.selected = false;
  }
}
