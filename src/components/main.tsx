import { h } from "preact";
import OrderBurritoForm from "./order-burrito-form";
import TableOrders from "./table-orders";
import { Provider } from "redux-zero/preact";
import appStore from "../store/store";

export default _ => (
<Provider store={appStore}>
    <div class="hero-body" style={"padding-top: 1.3em"}>
        <h2 class="title is-2 has-text-grey has-text-centered">S Rent (Prssseact + dot123 + TS)</h2>
        <p class="subtitle has-text-grey has-text-centered">Ee for t.</p>
    <div class="columns">
    <div class="column is-5 is-offset-1">
        <OrderBurritoForm />
    </div>
    <div class="column is-5">
        <TableOrders />
    </div>
    </div>
</div>
</Provider>
)

