import api from '@/utils/service';

export const getBanner = (params) => {
    return api.get('/banner', params);
}