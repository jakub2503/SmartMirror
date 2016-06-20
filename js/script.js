(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
		var nazwy_mies = [ 'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień' ];
		var nazwy_dni = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota']
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds()),
			day_week = today.getDay(),
			day = checkTime(today.getDate()),
			month = today.getMonth(),
			year = today.getFullYear();
        document.getElementById('time').innerHTML = "<div class=\"main_time\">" + h + ":" + m + "</div>" + "<div class=\"seconds\">"+s+"</div>";
		document.getElementById('date').innerHTML = nazwy_dni[day_week] + ', ' + day + ' ' + nazwy_mies[month] + ' ' + year
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();