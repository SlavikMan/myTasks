import methodsAPI from "./apiMethods";
import { url } from "../index.js";

methodsAPI("GET", url + `/tasks?_sort=views&_order=asc`);
