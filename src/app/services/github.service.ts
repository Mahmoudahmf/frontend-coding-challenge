import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { StarredRepo } from '../models/starred-repo.model';
const STARRED_REPOS_URL = `https://api.github.com/search/repositories?q=created:>${moment().subtract(30, 'days').format('YYYY-MM-DD')}&sort=stars&order=desc`;
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {
  }

  getStarredRepos = (pageNo = 1): Observable<{ items: StarredRepo[] }> => {
    return this.http.get(`${STARRED_REPOS_URL}&page=${pageNo}`) as Observable<{ items: StarredRepo[] }>;
  }
}
