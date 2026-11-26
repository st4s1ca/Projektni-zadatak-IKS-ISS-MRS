
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface UserProfile {
  username: string;
  profileImage: string;
  region: string;
  biography?: string;
  recipeCount: number;
}

@Component({
  selector: 'app-profile',
  standalone: false,
  styleUrl: './profile.component.scss',
  templateUrl: './profile.component.html',
})
export class Profile {

  ownProfile: UserProfile = {
    username: 'marko123',
    profileImage: '/marko_avatar.png',
    region: 'Vojvodina',
    biography: 'Volim da kuvam i isprobavam nove recepte.',
    recipeCount: 5
  };

  otherProfile: UserProfile = {
    username: 'ana456',
    profileImage: '',
    region: 'Šumadija',
    recipeCount: 12
  };

  profile: UserProfile = this.ownProfile;
  constructor(private route: ActivatedRoute) {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');

    if (id === '2') {
      this.profile = this.otherProfile;
    } else {
      this.profile = this.ownProfile;
    }
  });
}
}
