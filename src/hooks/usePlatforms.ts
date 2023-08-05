import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformData {
  data: Platform[];
  error: string;
  isLoading: boolean;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
