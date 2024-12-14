import useGithubContentService from "@services/githubcontent.service";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

const useReadme = (repoName: string) => {
  const githubContentService = useGithubContentService();

  const { data, refetch } = useQuery({
    queryKey: ["readme"],
    queryFn: () => githubContentService.readmeByName(repoName),
  });

  return {
    raw: computed(() => data.value),
    refetch,
  };
};

export default useReadme;
