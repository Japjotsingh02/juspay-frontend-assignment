import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Define route mappings
  const routeMap: { [key: string]: string } = {
    'dashboards': 'Dashboards',
    'default': 'Default',
    'ecommerce': 'eCommerce',
    'projects': 'Projects',
    'courses': 'Online Courses',
    'pages': 'Pages',
    'user-profile': 'User Profile',
    'profile-overview': 'Overview',
    'profile-projects': 'Projects',
    'campaigns': 'Campaigns',
    'documents': 'Documents',
    'followers': 'Followers',
    'favorites': 'Favorites',
    'overview': 'Overview'
  };

  return (
    <div className="flex items-center space-x-2 text-sm text-app-40">      
      {pathnames.length > 0 && (
        <>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = routeMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <div key={pathname} className="flex items-center space-x-2">
                {isLast ? (
                  <span className="text-app">{displayName}</span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="hover:text-app text-app-40 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
                {!isLast && <div className="text-app-40">/</div>}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
