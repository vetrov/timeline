(function () {

var TL = {

    init: function () {
        var data, eventSource, json, bandInfo, timeline;

        data = Drupal.settings.similetimeline;

        // loading data for timeline
        eventSource = new Timeline.DefaultEventSource();
        json = {
            events: Drupal.settings.similetimeline.events
        }
        eventSource.loadJSON(json, document.location.href);

        // just one band
        bandInfo = [
            Timeline.createBandInfo({
                width: "100%",
                eventSource: eventSource,
                date: data.start,
                intervalUnit: Timeline.DateTime[data.units],
                intervalPixels: 400
            })
        ];

        // init timeline
        timeline = Timeline.create(document.getElementById('js-timeline'), bandInfo);
    }

};

jQuery(document).ready(function () {
    TL.init();
});

}());
