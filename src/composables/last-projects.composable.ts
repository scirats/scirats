import useGithubService from "@services/github.service";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

const useLastProjects = () => {
  const githubService = useGithubService();

  const { data, refetch } = useQuery({
    queryKey: ["last-projects"],
    queryFn: () =>
      githubService.repos({
        sort: "created,updated",
        per_page: "3",
      }),
  });

  return {
    projects: computed(() => data.value),
    refetch,
  };
};

export default useLastProjects;
