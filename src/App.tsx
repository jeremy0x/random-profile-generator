import axios from "axios";
import { useEffect, useState } from "react";

import type { Profile, ProfileResponse } from "./types/profile";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileSkeleton } from "./components/ProfileSkeleton";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);

  const getProfile = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get<ProfileResponse>(
        "https://randomuser.me/api/"
      );
      setProfile(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {isLoading || !profile ? (
        <ProfileSkeleton />
      ) : (
        <ProfileCard
          profile={profile}
          onRefresh={getProfile}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
