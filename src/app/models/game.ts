export class Game{
  id: string;
  titulo: string;
  nota: number;
  ano: number;
  urlImagem: string;
  console: string;
  selected: boolean;
  constructor(id: string, titulo: string, nota: number, ano: number, urlImagem: string){
    this.id = id;
    this.titulo = titulo;
    this.nota = nota;
    this.ano = ano;
    this.urlImagem = urlImagem;
    this.selected = false;
    let console = this.titulo.split('(')[1].split(')')[0];
    this.console = console;
  }
}
