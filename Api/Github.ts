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

interface ReposObject {
  [name: string]: RepoData;
}

export default class GithubRepos {
  private api: AxiosInstance;

  private userQuery: string;

  private queries = ['sort=created', 'direction=asc'];

  public repos: ReposObject = {};

  private count = 0;
  // public repos: RepoData[] = [];

  constructor(user: string) {
    this.api = axios.create({
      baseURL: `http://api.github.com`,
    });

    this.userQuery = `users/${user}/repos`;
  }

  public async oldest(count: number): Promise<void> {
    this.count = count;

    const res = await this.api.get(
      `${this.userQuery}?${this.queries.join('&')}`
    );

    res.data.map((repo: Response, index: number) => {
      if (this.count) {
        const {
          full_name,
          owner: { avatar_url },
          description,
          language,
        } = repo;

        if (language === 'C#') {
          this.repos[`repo_${index + 1}`] = {
            full_name,
            avatar_url,
            description,
          };
        }
      }
    });
  }
}
