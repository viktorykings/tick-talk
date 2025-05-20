import { Component, Input } from '@angular/core';
import { IProfile } from '../../data/interfaces/profile';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';
import { ImageUrlPipe } from '../../helpers/pipes/image-url.pipe';

@Component({
  selector: 'app-profile-card',
  imports: [SkillTagComponent, ImageUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: IProfile;
}
