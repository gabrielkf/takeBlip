import axios, { AxiosInstance } from 'axios';

interface Response {
  full_name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
  language: string;
}

interface RepoData {
  avatar_url: string;
  full_name: string;
  description: string;
}

export default class GithubRepos {
  private api: AxiosInstance;

  private userQuery: string;

  private queries = ['sort=created', 'direction=asc'];

  public repos: RepoData[] = [];

  constructor(user: string) {
    this.api = axios.create({
      baseURL: `http://api.github.com`,
    });

    this.userQuery = `users/${user}/repos`;
  }

  public async oldest(count: number): Promise<void> {
    const res = await this.api.get(
      `${this.userQuery}?${this.queries.join('&')}`
    );

    res.data.map((repo: Response) => {
      if (this.repos.length < count) {
        const {
          full_name,
          owner: { avatar_url },
          description,
          language,
        } = repo;

        if (language === 'C#') {
          this.repos.push({
            full_name,
            avatar_url,
            description,
          });
        }
      }
    });
  }
}
