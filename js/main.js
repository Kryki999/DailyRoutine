$(document).ready(function(){
	//Calendar
	let today = new Date;
	let actualMonth = today.getMonth();
	
	let actualYear = today.getFullYear();
	$('.year').html(actualYear);
	
	let monthName = document.getElementById('month-name');
	const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	const monthsLength = [31,28,31,30,31,30,31,31,30,31,30,31];
	const monthsAs = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
		
	
	function CreateMonth(year,month){
	$('.year').html(year);
	$('#month-name').html(months[month]);
	let firstDay = new Date(year,month,1).toString().split(' ');
	console.log(firstDay);
	let x = 1;	
	for(let i=0; i<42; i++)$('.'+i).html('');	
	
	for(let i=0; i<=monthsLength[month]; i++)
		{
			if(i==0)for(let j=0; j<monthsAs.length;j++)
				if(monthsAs[j] == firstDay[0]) {
					x=j+1;
					i++;
				}		
			$('.'+x).html(i);
			x++;
		}
	}	
	CreateMonth(actualYear,actualMonth);
	
	
	let visibleMonth = actualMonth;
	let visibleYear = actualYear;
	$('.plus').click(function(){		
		visibleMonth++;
		if(visibleMonth == 12){ visibleMonth = 0; visibleYear++;}
		CreateMonth(visibleYear,visibleMonth);
		
	});
	$('.minus').click(function(){
		visibleMonth--;
		if(visibleMonth == -1){visibleMonth = 11; visibleYear--;}
		CreateMonth(visibleYear,visibleMonth);					
	});
	
	$('.add-icon').click(function(){
		let taskText = $('#text-space').val();
		$('#task-list').append('<div class="task"><input type="radio" class="task-input interaction"><div class="task-text">'+taskText+'</div></div>');
	});
});