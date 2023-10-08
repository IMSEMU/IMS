import axios from 'axios';
import Appconfig from '../../Appconfig';

const AuthConnect = axios.create({
  baseURL: Appconfig.BACKEND_SERVER_URL,
  withCredentials: true,
});

export default AuthConnect;
