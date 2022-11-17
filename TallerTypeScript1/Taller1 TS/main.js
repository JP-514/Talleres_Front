"use strict";
exports.__esModule = true;
var data_js_1 = require("./data.js");
var seriesTbody = document.getElementById('series');
renderSeriesinTable(data_js_1.series);
function renderSeriesinTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
