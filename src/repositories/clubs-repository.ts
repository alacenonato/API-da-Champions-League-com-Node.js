import { ClubModel } from "../models/clubs-model";

const database = [
    {
        id: 1,
        name: "Real Madrid",
    },
]

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
  };