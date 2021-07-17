export interface StarredRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string,
    login: string
  }
}
