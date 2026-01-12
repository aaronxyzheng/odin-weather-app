import {updateSidebar} from "./sidebar";

function bindDayView() {
    const dayViews = document.querySelectorAll(".day-view");
    dayViews.forEach((dayView) => {
        dayView.addEventListener("click", () => {
            dayViews.forEach((v) => v.setAttribute("selected", "false"));
            dayView.setAttribute("selected", "true");

            updateSidebar(dayView.getAttribute("token"));
        });
    });
}

export default bindDayView
