import React from "react";
import { Clock } from "lucide-react";
import { useDashboardStore } from "../../store/dashboardStore";

import BugIcon from "../../assets/bug-icon.svg?react";
import UserIcon from "../../assets/profile-notification-icon.svg?react";
import SubscriptionIcon from "../../assets/subscription-icon.svg?react";

interface ListItemProps {
  icon?: React.ReactNode;
  title: string;
  time?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  time,
}) => (
  <div className="flex items-start space-x-3 rounded-lg hover:bg-app-10 transition-all duration-200 p-1 cursor-pointer">
    <div className="flex-shrink-0">
      <div className="mt-1">{icon}</div>
    </div>

    <div className="flex-1 min-w-0">
      <p className="text-xs 2xl:text-sm text-app truncate">{title}</p>
      {time && (
        <p className="text-[10px] 2xl:text-xs text-app-40 mt-1 flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {time}
        </p>
      )}
    </div>
  </div>
);

const RightSidebar: React.FC = () => {
  const { notifications, activities, contacts } = useDashboardStore();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "user":
        return <UserIcon className="h-5 w-5 2xl:w-6 2xl:h-6" />;
      case "subscription":
        return <SubscriptionIcon className="h-5 w-5 2xl:w-6 2xl:h-6" />;
      default:
        return <BugIcon className="h-5 w-5 2xl:w-6 2xl:h-6" />;
    }
  };

  return (
      <aside className="hidden xl:block flex-shrink-0 lg:w-[250px] 2xl:w-[280px] border-l border-gray-200 flex flex-col animate-slideInRight p-5 gap-6 overflow-y-auto">
      {/* Notifications */}
      <section>
        <h6 className="text-app font-semibold mb-5">Notifications</h6>
        <div className="space-y-2">
          {notifications.map((n) => (
            <ListItem
              key={n.id}
              icon={getNotificationIcon(n.type)}
              title={n.title}
              time={n.time}
            />
          ))}
        </div>
      </section>

      {/* Activities */}
      <section>
        <h6 className="text-app font-semibold mb-2">Activities</h6>
        <div className="space-y-2">
          {activities.map((a) => (
            <ListItem
              key={a.id}
              icon={<a.icon className="h-5 w-5 2xl:w-6 2xl:h-6" />}
              title={a.title}
              time={a.time}
            />
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section>
        <h6 className="text-app font-semibold mb-2">Contacts</h6>
        <div className="space-y-2">
          {contacts.map((c) => (
            <div key={c.id} className="flex items-center space-x-2 p-1 rounded-lg hover:bg-app-10 transition-all duration-200 cursor-pointer">
              <c.icon className="h-5 w-5 2xl:w-6 2xl:h-6" />
              <span className="text-xs 2xl:text-sm text-app">{c.name}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
