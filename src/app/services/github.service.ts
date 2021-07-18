import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarredRepo } from '../models/starred-repo.model';
const STARRED_REPOS_URL = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {
  }

  getStarredRepos = (): Observable<{ items: StarredRepo[] }> => {
    return this.http.get(STARRED_REPOS_URL) as Observable<{ items: StarredRepo[] }>;
  }
}
