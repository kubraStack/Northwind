import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, input, output } from '@angular/core';

export interface ListGroupItem{
  id: string;
  label:string;
}

export type ListGroupItems = ListGroupItem[];

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {
  selectedItemId: string | null = null;

  onClickItem(event: ListGroupItem) {
    this.selectedItemId = this.selectedItemId !== event.id ? event.id : null;
    this.changeSelect.emit(this.selectedItemId); //emit event: event'i tetiklediğimiz yer
  }

  isSelectedId(itemId: string): boolean{
    return this.selectedItemId === itemId;
  }
 @Input() items: ListGroupItems = [];
 //Input: Component'in kullanıldığı yerden input alabilir böylece dışarıdan veri almak için kullanılabilir.

 @Output() changeSelect = new EventEmitter<string | null>();
//EventEmitter: Component'ten dışarıya event göndermek için kullanılır
// <app-list-group (changeSelect)="onSelect($event)"></app-list-group>
}
