import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
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
    );
  }
}
