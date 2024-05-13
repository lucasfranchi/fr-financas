import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { LineBarContent } from './line-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fr-line-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-bar.component.html',
  styleUrl: './line-bar.component.scss',
})
export class LineBarComponent implements OnChanges {
  @Input()
  content: LineBarContent[];

  valorTotal: number = 0;

  colors = [
    '#ffacc8',
    '#9e8ed3',
    '#a1a9fe',
    '#fe7575',
    '#fbd834',
    '#5a72cb',
    '#f7a6b5',
  ];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']) {
      this.getContent();
    }
  }

  public getContent() {
    if (this.content) {
      this.colors = this.embaralhaCores(this.colors)
      this.valorTotal = this.content
        .map((it) => it.value)
        .reduce((pv, cv) => pv + cv, 0);

      this.content.forEach((it, i) => {
        this.content[i] = { ...it, porcentagem: this.calculaPorcentagem(it) };
      });

      let ultimoIndex = this.content.length - 1;

      while (
        this.content[ultimoIndex]?.porcentagem &&
        this.content[ultimoIndex]?.porcentagem +
          this.content[ultimoIndex - 1]?.porcentagem <
          25
      ) {
        const outros: LineBarContent = {
          label: 'Outros',
          value:
            this.content[ultimoIndex]?.value +
            this.content[ultimoIndex - 1]?.value,
          porcentagem:
            this.content[ultimoIndex]?.porcentagem +
            this.content[ultimoIndex - 1].porcentagem,
        };

        this.content.splice(ultimoIndex - 1, ultimoIndex, outros);
        ultimoIndex = ultimoIndex - 1;
      }

      this.content = this.content.sort((a, b) =>
        b.value > a.value ? 1 : a.value > b.value ? -1 : 0
      );
    }
  }

  public calculaPorcentagem(lineBarContent: LineBarContent) {
    return (lineBarContent.value * 100) / this.valorTotal;
  }

  private embaralhaCores(arr: Array<any>) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }
}
