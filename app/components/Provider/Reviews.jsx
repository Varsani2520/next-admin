import { Star } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";

const Reviews = ({ provider }) => {
  let rating1 = 80;
  return (
    <div>
      <div className="review-card p-5 m-2 bg-gray-600 rounded-2xl">
        <h1 className="text-xl font-semibold text-white">Reviews</h1>
        <Grid container>
          <Grid item xs={12} md={4} className="flex justify-center">
            <div className="flex flex-col justify-center bg-white rounded-full aspect-square p-16 mt-4 w-[200px] h-[200px] items-center">
              <Star />
              <h1 className="text-2xl font-bold text-yellow-400">
                {provider.map((p) => p.rating)}
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="review-info">
              {provider.map((p) => (
                <div>
                  <h1 className="my-4">
                    1 <Star />
                  </h1>
                  <h1 className="my-4">
                    2 <Star />
                  </h1>
                  <h1 className="my-4">
                    3 <Star />
                  </h1>
                  <h1 className="my-4">
                    4 <Star />
                  </h1>
                  <h1 className="my-4">
                    5 <Star />
                  </h1>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Reviews;
