import React from "react";
import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import AdminButton from "./AdminButton";
import { formatDistance } from "../services/Utils";
import { useNavigate } from "react-router-dom";

const Venue = ({ venue, admin }) => {
  const navigate = useNavigate(); 

  const performDelete = () => {
    
    
  };

  const performUpdate = () => {
    navigate("/admin/addupdate", { state: { venue } });
    
  };

  return (
    <div className="list-group">
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-12 list-group-item">
          <h4>
            <NavLink to={`/venue/${venue.id}`} state={{ id: venue.id }}>
              {venue.name}{" "}
            </NavLink>
            <Rating rating={venue.rating} />
          </h4>
          <span className="span badge pull-right badge-default">
            {!admin ? formatDistance(venue.distance) : ""}
          </span>
          {admin ? (
            <AdminButton type="primary" name="Mekanı Sil" onClick={performDelete} />
          ) : (
            ""
          )}
          {admin ? (
            <AdminButton type="info" name="Mekanı Güncelle" onClick={performUpdate} />
          ) : (
            ""
          )}
          <p className="address"> {venue.address}</p>
          <p>
            <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
