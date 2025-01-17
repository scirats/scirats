const GITHUB_BASE_URL = "https://raw.githubusercontent.com";

const fetchReadme = async (slug: string, branch = "master"): Promise<string> => {
  const possibleFilenames = ["README.md", "Readme.md", "readme.md"];

  for (const filename of possibleFilenames) {
    const url = `${GITHUB_BASE_URL}/scirats/${slug}/${branch}/${filename}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        return await res.text();
      }
    } catch (error) {
      console.error(`Error fetching ${filename} from ${url}:`, error);
    }
  }
   
  throw new Error("README file not found in the repository.");
}

export default fetchReadme;

