import bindDayView from "./dom-components/day-view";
import updateSidebar from "./dom-components/sidebar";

function bindElements() {
    updateSidebar(1);
    bindDayView();
}

export default bindElements;
