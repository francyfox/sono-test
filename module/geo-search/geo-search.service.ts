import { apiGeo, appId } from '~/module/api';

export const fetchGeoLocation = (q: string, limit: number)  => apiGeo('/direct', {
  params: {
    q,
    limit,
    appId
  }
});
