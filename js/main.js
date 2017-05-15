$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2017-05-12',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Иванов Осмотр',
					start: '2017-05-01T10:20:00',
					color: 'DarkOrange'

				},
				{
					title: 'Иванов Лечение',
					start: '2017-05-03',
					end: '2017-05-10',
					color: 'DarkOrange'

					
				},
				{
					title: 'Петров Осмотр',
					start: '2017-05-02T11:10:00',
					color: 'OrangeRed'
				},
				{
					title: 'Петров Лечение',
					start: '2017-05-04',
					end: '2017-05-11',
					color: 'OrangeRed'
				},
				{
					title: 'Сидоров Осмотр',
					start: '2017-05-03T12:50:00',
					color: 'Gold'
				},
				{
					title: 'Сидоров Лечение',
					start: '2017-05-05',
					end: '2017-05-12',
					color: 'Gold'
				},
				{
					title: 'Егошин Осмотр',
					start: '2017-05-10T15:30:00',
					color: 'PaleGoldenrod'
				},
				{
					title: 'Егошин Лечение',
					start: '2017-05-12',
					end: '2017-05-19',
					color: 'PaleGoldenrod'
				},
				{
					title: 'Ронин Осмотр',
					start: '2017-05-17T10:30:00',
					color: 'Indigo'
				},
				{
					title: 'Ронин Лечение',
					start: '2017-05-19',
					end: '2017-06-02',
					color: 'Indigo'
				},
				{
					title: 'Креслов Осмотр',
					start: '2017-05-23T10:30:00',
					color: 'Maroon'
				},
				{
					title: 'Креслов Лечение',
					start: '2017-05-29',
					end: '2017-06-08',
					color: 'Maroon'
				}
			],
			
		});
		
	});