import React, { Fragment } from "react";
import Style from "./Recipe.module.css";
import Button from "../Button/Button";

export default function Recipe({ recipeList }) {
  return (
    <Fragment>
      <div className="container">
        <h2 className={`${Style.recText} my-5`}>RECIPES</h2>
        <div className="row">
          {recipeList?.map((value, index) => {
            return (
              <div key={index} className="col-md-4 mb-2">
                <div className={`${Style.card} text-left`}>
                  <img
                    className="card-img-top rounded"
                    src={value?.strMealThumb}
                    alt="RecipeImg"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      {value.strMeal}
                    </h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Button />
      </div>
    </Fragment>
  );
}
