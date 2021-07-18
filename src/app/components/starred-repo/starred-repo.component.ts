import { StarredRepo } from './../../models/starred-repo.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starred-repo',
  templateUrl: './starred-repo.component.html',
  styleUrls: ['./starred-repo.component.scss']
})
export class StarredRepoComponent implements OnInit {
  @Input() starredRepo!: StarredRepo;
  constructor() {

  }

  ngOnInit(): void {
  }

}
