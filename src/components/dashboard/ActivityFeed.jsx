import React from "react";
import { activities } from "../../data/ActivityData";
import StatusBadge from "../ui/StatusBadge";

function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id} className="border-b pb-3 last:border-b-0">
              <div className="flex items-center gap-2 mb-1">
                <StatusBadge type={activity.type} />
                <h3 className="font-medium">{activity.action}</h3>
              </div>

              <p className="text-sm text-gray-500">{activity.details}</p>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">
            No recent activity available.
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityFeed;
