import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function AddUpdateVenue() {

  const location = useLocation();
  const venue = location.state && location.state.venue;
  
  return (
    <>
      <Header
        //headerText=  {venue.name}
        headerText={venue ? venue.name + " Mekanını Güncelle" : "Mekan Ekle"}
      />
      <form className="form-group">
        <div className="form-group row">
          <label htmlFor="mekanAdi" className="col-sm-2 col-form-label">Mekan Adı:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="mekanAdi"
              defaultValue ={venue ? venue.name : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="mekanAdresi" className="col-sm-2 col-form-label">Mekan Adresi:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="mekanAdresi"
              defaultValue ={venue ? venue.address : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="imkanlar" className="col-sm-2 col-form-label">İmkanlar:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="imkanlar"
              defaultValue ={venue ? venue.foodanddrink : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="enlem" className="col-sm-2 col-form-label">Enlem:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="enlem"
              defaultValue ={venue ? venue.coordinates[0] : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="boylam" className="col-sm-2 col-form-label">Boylam:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="boylam"
              defaultValue ={venue ? venue.coordinates[1] : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="gunler-1" className="col-sm-2 col-form-label">Günler-1:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="gunler-1"
              defaultValue ={venue ? venue.hours[0].days : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="acilis-1" className="col-sm-2 col-form-label">Açılış-1:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="acilis-1"
              defaultValue ={venue ? venue.hours[0].open : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="kapanis-1" className="col-sm-2 col-form-label">Kapanış-1</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="kapanis-1"
              defaultValue ={venue ? venue.hours[0].close : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="kapali-2" className="col-sm-2 col-form-label">
            Kapali-2:
          </label>
          <div className="col-sm-1">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="kapali-2"
              />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="gunler-2" className="col-sm-2 col-form-label">Günler-2:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="gunler-2"
              defaultValue ={venue ? venue.hours[1].days : ""}

            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="acilis-2" className="col-sm-2 col-form-label">Açılış-2:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="acilis-2"
              defaultValue ={venue ? venue.hours[1].open : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="kapanis-2" className="col-sm-2 col-form-label">Kapanış-2</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="kapanis-2"
              defaultValue ={venue ? venue.hours[1].close : ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="kapali-2" className="col-sm-2 col-form-label">
            Kapali-2:
          </label>
          <div className="col-sm-1">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="kapali-2"
              />
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10 col-form-label"></div>
          <div className="col-sm-2 text-right">
            <button className="btn btn-danger" >{venue ? "Mekanı Güncelle" : "Mekanı Ekle"}</button>
          </div>
        </div>

      </form>

    </>
  );
}

export default AddUpdateVenue;