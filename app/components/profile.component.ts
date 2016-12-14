import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  {
  user:any;
  repos:any;
  username:string;
  language:string;

  constructor(private _githubService: GithubService) {
    this.user = false;
    this.language = null;
  }
  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(
      user => {
        this.user = user;
      });

    this._githubService.getRepos().subscribe(
      repos => {
        this.repos = repos;
      });
  }
  searchByLanguage() {
    this._githubService.updateLanguage(this.language);

    this._githubService.findReposByLanguage().subscribe(
      repos => {
        console.log(repos);
        this.repos = repos;
      });
  }
}
