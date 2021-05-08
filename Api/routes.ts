import { Router } from 'express';
import Github from './Github';

const OWNER = 'takenet';
const COUNT = 5;

const routes = Router();

routes.get('/', async (req, res) => {
  try {
    const github = new Github(OWNER);
    await github.oldest(COUNT);
    const { repos } = github;

    if (!Object.keys(repos).length)
      throw new Error('No repositories found');

    return res.json(repos);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

export default routes;
