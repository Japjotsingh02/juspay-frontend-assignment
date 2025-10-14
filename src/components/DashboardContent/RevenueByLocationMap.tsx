import { memo } from "react";
import worldMapImage from '../../assets/map-image.svg';

type LocationItem = { name: string; value: number };
interface RevenueByLocationProps { locations: LocationItem[] }

function RevenueByLocation({ locations }: RevenueByLocationProps) {

  return (
    <div className="location-card">
      <h2 className="location-title">Revenue by Location</h2>
      <img
        className="map"
        src={worldMapImage}
        alt="WorldMap"
      />
      <div>
        {locations.map((location) => (
          <div className="location-row" key={location.name}>
            <span className="location-name">{location.name}</span>
            <span className="location-value">{location.value}K</span>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fg"
                style={{ width: `${location.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(RevenueByLocation);