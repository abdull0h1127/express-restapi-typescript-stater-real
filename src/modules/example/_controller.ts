import { Handler } from "../../shared/types";
import { hello } from "./hello";

const getHello: Handler = (req, res, next) => {
  try {
    const data = hello();
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export default getHello;
