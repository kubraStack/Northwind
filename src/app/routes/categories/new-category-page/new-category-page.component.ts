import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelLayoutComponent } from '../../../shared/components/panel-layout/panel-layout.component';

@Component({
  selector: 'app-new-category-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelLayoutComponent
  ],
  templateUrl: './new-category-page.component.html',
  styleUrl: './new-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCategoryPageComponent { }
