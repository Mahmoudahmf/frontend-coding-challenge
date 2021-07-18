import { StarredRepo } from './../../models/starred-repo.model';
import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-starred-repos',
  templateUrl: './starred-repos.component.html',
  styleUrls: ['./starred-repos.component.scss']
})
export class StarredReposComponent implements OnInit {
  starredRepos: StarredRepo[];
  pageNo: number;
  isLoading: boolean;
  constructor(private githubService: GithubService) {
    this.starredRepos = [];
    this.pageNo = 1;
    this.isLoading = false;
  }


  getStarredRepos = (pageNo?: number) => {
    this.isLoading = true;
    this.githubService.getStarredRepos(pageNo).subscribe((response: { items: StarredRepo[] }) => {
      this.isLoading = false
      console.log(response);
      this.starredRepos = [...this.starredRepos, ...response.items];
    }, error => {
      this.isLoading = false;
    })
  }
  ngOnInit(): void {
    this.getStarredRepos();
  }

  onScroll = () => {
    this.pageNo++;
    this.getStarredRepos(this.pageNo);
  }

}
