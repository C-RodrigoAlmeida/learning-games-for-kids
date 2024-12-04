// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// interface PalavraJogo {
//   texto: string;
//   correta: boolean;
//   selecionada: boolean;
// }

// @Component({
//   selector: 'app-play',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './play.component.html',
//   styleUrl: './play.component.css'
// })
// export class PlayComponent implements OnInit {
//   palavras: PalavraJogo[] = [];
//   imagemAtual: string = '';
//   resultado: string = '';

//   ngOnInit() {
//     this.iniciarJogo();
//   }

//   iniciarJogo() {

//     this.palavras = this.embaralharPalavras(palavrasExemplo.map(p => ({
//       ...p,
//       selecionada: false
//     })));
    
//     this.imagemAtual = 'caminho/para/imagem/gato.jpg';
//     this.resultado = '';
//   }

//   embaralharPalavras(palavras: PalavraJogo[]): PalavraJogo[] {
//     return [...palavras].sort(() => Math.random() - 0.5);
//   }

//   selecionarPalavra(index: number) {
//     this.palavras[index].selecionada = !this.palavras[index].selecionada;
//   }

//   verificarRespostas() {
//     const todasCorretas = this.palavras
//       .filter(p => p.selecionada)
//       .every(p => p.correta);
    
//     const todasCorretasSelecionadas = this.palavras
//       .filter(p => p.correta)
//       .every(p => p.selecionada);

//     if (todasCorretas && todasCorretasSelecionadas) {
//       this.resultado = 'Parabéns! Você acertou!';
//     } else {
//       this.resultado = 'Ops! Tente novamente!';
//     }
//   }
// }
