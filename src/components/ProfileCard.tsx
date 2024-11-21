import React from "react";
import type { Profile } from "../types/profile";
import { Mail, MapPin, Phone, Calendar, RefreshCw } from "lucide-react";

interface ProfileCardProps {
  profile: Profile;
  onRefresh: () => void;
  isLoading: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onRefresh,
  isLoading,
}) => {
  const { name, location, email, phone, picture, dob } = profile;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
        <button
          type="button"
          title="Refresh"
          onClick={onRefresh}
          disabled={isLoading}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 disabled:opacity-50"
        >
          <RefreshCw
            className={`w-5 h-5 text-blue-600 ${
              isLoading ? "animate-spin" : ""
            }`}
          />
        </button>
      </div>

      <div className="relative px-6 pb-6">
        <div className="flex flex-col items-center -mt-16">
          <img
            src={picture.large}
            alt={`${name.first} ${name.last}`}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {name.title} {name.first} {name.last}
          </h2>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3 text-gray-600">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>
              {location.street.number} {location.street.name}, {location.city},{" "}
              {location.state}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <Mail className="w-5 h-5 text-blue-500" />
            <span>{email}</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>{phone}</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <Calendar className="w-5 h-5 text-blue-500" />
            <span>
              {new Date(dob.date).toLocaleDateString()} ({dob.age} years old)
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Country</p>
            <p className="font-medium text-gray-800">{location.country}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Timezone</p>
            <p className="font-medium text-gray-800">
              {location.timezone.description}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium text-gray-800">
              {profile.login.username}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Nationality</p>
            <p className="font-medium text-gray-800">{profile.nat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
