import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {serializePaths} from "@angular/router/src/url_tree";

@Injectable()
export class GithubService {
  private username: string;
  private language:string;
  private client_id = '31cd32d7905c7c3a42dc';
  private client_secret = 'ea6bfd6eaaf9b803c75b557bf03a91862c6219d0';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'mnahm5';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/'
      + this.username + '?client_id=' + this.client_id +
    '&client_secret=' + this.client_secret).map(
      res => res.json()
    )};

  getRepos() {
    return this._http.get('http://api.github.com/users/'
      + this.username + '/repos?client_id=' + this.client_id +
      '&client_secret=' + this.client_secret).map(
      res => res.json()
    )};

  updateUser(username:string) {
    this.username = username;
  }

  updateLanguage(language:string) {
    this.language = language;
  }

  findReposByLanguage() {
    return this._http.get('https://api.github.com/search/repositories?q=language:' + this.language + '&sort=stars&order=desc').map(
      res => res.json()
    )
  };
}
