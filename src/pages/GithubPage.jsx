import { useEffect, useState } from "react";

const GitHubUserStats = () => {
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/PhilixTheExplorer`
        );
        const data = await response.json();
        setUserStats(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user stats:", error);
        setLoading(false);
      }
    };

    fetchUserStats();
  }, []);

  if (loading) {
    return <p>Loading GitHub Stats...</p>;
  }

  if (!userStats) {
    return <p>Error Fetching GitHub Stats</p>;
  }

  return (
    <div className="max-w-xl m-auto rounded-xl overflow-hidden shadow-lg bg-[#1f2428] p-6">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full"
          src={userStats.avatar_url}
          alt={userStats.login}
        />
        <div>
          <h2 className="text-xl font-semibold">
            {userStats.name || userStats.login}
          </h2>
          <p className="text-sm">{userStats.bio || "No bio available"}</p>
        </div>
      </div>
      <div className="mt-4 text-[var(--text-light)]">
        <div className="flex justify-between">
          <span>Public Repos:</span>
          <span>{userStats.public_repos}</span>
        </div>
        <div className="flex justify-between">
          <span>Followers:</span>
          <span>{userStats.followers}</span>
        </div>
        <div className="flex justify-between">
          <span>Following:</span>
          <span>{userStats.following}</span>
        </div>
        <div className="flex justify-between">
          <span>Gists:</span>
          <span>{userStats.public_gists}</span>
        </div>
      </div>
      <div className="mt-4">
        <a
          href={userStats.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Profile on GitHub
        </a>
      </div>
      <div className="bg-gray-900 text-gray-300 my-6 p-6">
        {/* Proudly created with GPRM ( https://gprm.itsvg.in ) */}
        <h1 className="text-4xl font-bold mb-8 text-center">GitHub Stats</h1>
        <div className="flex justify-center mb-8">
          <img
            src="https://github-readme-stats.vercel.app/api?username=PhilixTheExplorer&theme=radical&hide_border=false&include_all_commits=false&count_private=false"
            alt="GitHub Stats"
          />
        </div>
        <div className="flex justify-center mb-8">
          <img
            src="https://streak-stats.demolab.com/?user=PhilixTheExplorer&theme=radical"
            alt="GitHub Streak"
          />
        </div>
        <div className="flex justify-center mb-8">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=PhilixTheExplorer&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
            alt="Top Languages"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center">
          🏆 GitHub Trophies
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="https://github-profile-trophy.vercel.app/?username=PhilixTheExplorer&theme=radical&no-frame=false&no-bg=true&margin-w=4"
            alt="GitHub Trophies"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center">
          ✍️ Random Dev Quote
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical"
            alt="Random Dev Quote"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center">
          🔝 Top Contributed Repo
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="https://github-contributor-stats.vercel.app/api?username=PhilixTheExplorer&limit=5&theme=dark&combine_all_yearly_contributions=true"
            alt="Top Contributed Repo"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubUserStats;
