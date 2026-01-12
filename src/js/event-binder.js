import bindDayView from "./dom-components/day-view";
import { updateSidebar, updateTime, updateGreeting } from "./dom-components/sidebar";

function bindElements() {
    updateSidebar(1);
    bindDayView();

    setInterval(updateGreeting, 60000);
    setInterval(updateTime, 1000);
}

export default bindElements;
