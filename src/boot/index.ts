import Store from "store/Store"

/* import styles */
import 'style/fonts/fonts.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default async function boot () {
    await Store.init()
}