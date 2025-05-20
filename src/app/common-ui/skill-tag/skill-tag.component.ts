import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  imports: [],
  templateUrl: './skill-tag.component.html',
  styleUrl: './skill-tag.component.scss',
})
export class SkillTagComponent {
  @Input() tag?: string;
}
