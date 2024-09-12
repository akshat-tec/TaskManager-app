import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

export const API_URL = 'https://task-manager-app-9gxagczam-akshat-sharmas-projects-eea2c46f.vercel.app';
 
