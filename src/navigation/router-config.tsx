import React from "react";
import { RouteObject } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout/AppLayout";
import { PageSectionLayout } from "../layouts/PageSection/PageSectionLayout";
import BreedsView from "../views/BreedsView/BreedsView";
import { SelectedBreedView } from "../views/BreedsView/SelectedBreedView/SelectedBreedView";
import DislikesView from "../views/DislikesView/DislikesView";
import FavouritesView from "../views/FavouritesView/FavouritesView";
import GalleryView from "../views/GalleryView/GalleryView";
import LikesView from "../views/LikesView/LikesView";
import SearchView from "../views/SearchView/SearchView";
import StartView from "../views/StartView/StartView";
import VotingView from "../views/VotingView/VotingView";

export const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <StartView /> },
      {
        element: <PageSectionLayout />,
        children: [
          {
            path: "breeds",
            element: <BreedsView />,
          },
          {
            path: "breeds/:breedId",
            element: <SelectedBreedView />,
          },
          {
            path: "gallery",
            element: <GalleryView />,
          },
          {
            path: "voting",
            element: <VotingView />,
          },
          {
            path: "search",
            element: <SearchView />,
          },
          {
            path: "likes",
            element: <LikesView />,
          },
          {
            path: "favourites",
            element: <FavouritesView />,
          },
          {
            path: "dislikes",
            element: <DislikesView />,
          },
        ],
      },
    ],
  },
];
