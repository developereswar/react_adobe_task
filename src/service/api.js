import Axios from "axios";

class api {
  getItems = () => {
    return Axios.get("url").then(response => response);
  };
}
const Api = new api();
export default Api;
