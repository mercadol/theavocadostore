import { NextApiRequest, NextApiResponse } from "next";
import DataBase from "@database";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const database = new DataBase();
  const id= request.query.id;
  const entry = await database.getById(id as string);
  response.status(200).json({ entry });
};

export default allAvos;
