
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    profileImage: '/images/marko_avatar.png',
    region: 'Vojvodina',
    biography: 'Volim da kuvam i isprobavam nove recepte.',
    recipeCount: 5,
  };

  otherProfile: UserProfile = {
    username: 'ana456',
    profileImage: '',
    region: 'Šumadija',
    recipeCount: 12,
  };

  profile: UserProfile = this.ownProfile;

  isEditing = false;
  draftRegion = '';
  draftBiography = '';
  imagePreview = '';
  imageError = '';
  saveMessage = '';

  get isOwnProfile(): boolean {
    return this.profile === this.ownProfile;
  }

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.profile = id === '2'
        ? this.otherProfile
        : this.ownProfile;

      this.isEditing = false;
      this.imageError = '';
      this.saveMessage = '';
    });
  }

  startEditing(): void {
    if (!this.isOwnProfile) return;

    this.draftRegion = this.ownProfile.region;
    this.draftBiography = this.ownProfile.biography ?? '';
    this.imagePreview = this.ownProfile.profileImage;

    this.imageError = '';
    this.saveMessage = '';
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.imageError = '';
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file || !this.isEditing || !this.isOwnProfile) {
      return;
    }

    const allowedTypes = [
      'image/png',
      'image/jpeg',
      'image/webp'
    ];

    if (!allowedTypes.includes(file.type)) {
      this.imageError = 'Choose a PNG, JPG or WEBP image.';
      input.value = '';
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      this.imageError = 'The image must be smaller than 3 MB.';
      input.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (
        this.isEditing &&
        this.isOwnProfile &&
        typeof reader.result === 'string'
      ) {
        this.imagePreview = reader.result;
        this.imageError = '';
      }
    };

    reader.onerror = () => {
      this.imageError = 'Could not read the selected image. Please try another.';
    };

    reader.readAsDataURL(file);
    input.value = '';
  }

  saveEditing(form: NgForm): void {
    if (
      !this.isOwnProfile ||
      !this.isEditing ||
      form.invalid ||
      this.imageError
    ) {
      return;
    }

    const region = this.draftRegion.trim();

    if (region.length < 2) {
      return;
    }

    this.ownProfile = {
      ...this.ownProfile,
      region,
      biography: this.draftBiography.trim() || undefined,
      profileImage: this.imagePreview,
    };

    this.profile = this.ownProfile;
    this.isEditing = false;

    this.saveMessage =
      'Changes saved locally. They will reset when the page is refreshed.';
  }
}
