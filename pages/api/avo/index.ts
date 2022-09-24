import { NextApiRequest, NextApiResponse } from "next";
import DataBase from "@database";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const database = new DataBase();
  const allEntries = await database.getAll();
  response.status(200).json({ data: allEntries });
};

export default allAvos;
