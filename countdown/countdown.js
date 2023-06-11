
$(document).ready(function() {
$('.countdown').final_countdown({
start: '1675382400',
end: '1678329599',
now: '1675382400',
selectors: {
    value_seconds: '.clock-seconds .val',
    canvas_seconds: 'canvas_seconds',
    value_minutes: '.clock-minutes .val',
    canvas_minutes: 'canvas_minutes',
    value_hours: '.clock-hours .val',
    canvas_hours: 'canvas_hours',
    value_days: '.clock-days .val',
    canvas_days: 'canvas_days'
},
seconds: {
    borderColor: '#7995D5',
    borderWidth: '6'
},
minutes: {
    borderColor: '#ACC742',
    borderWidth: '6'
},
hours: {
    borderColor: '#ECEFCB',
    borderWidth: '6'
},
days: {
    borderColor: '#FF9900',
    borderWidth: '6'
}}, function() {
// Finish callback
});
});