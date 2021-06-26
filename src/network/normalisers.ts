import { Repository } from "../state/slice";

export const normaliseRepos = (data: any): Repository[] => {
    const res: Repository[] = [];
    data.forEach((repo: any) => {
        const { name, description, html_url, language, forks, open_issues, watchers } = repo;
        const normalised: Repository = {
            title: name,
            description: description,
            url: html_url,
            language: language,
            forksCount: forks,
            issuesCount: open_issues,
            watchersCount: watchers
        }
        res.push(normalised);
    })
    return res;
}