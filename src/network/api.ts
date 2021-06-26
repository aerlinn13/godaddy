import axios from 'axios';
import { Repository } from '../state/slice';
import { normaliseRepos } from './normalisers';

export const fetchRepos = () => { 
    return axios.get('https://api.github.com/orgs/godaddy/repos').then(response => normaliseRepos(response.data) as Repository[]);
 };