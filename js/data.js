var data = [
	
	{
		name: 'ex1',
		department: 'DVM',
		pic: './img/Apogee-_0001s_0006_Layer-7.png',
		text: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah'

	},

	{
		name: 'ex2',
		department: 'Controlz',
		pic: './img/Apogee-_0001s_0006_Layer-7.png',
		text: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah'

	},

	{
		name: 'ex3',
		department: 'FireWallz',
		pic: './img/Apogee-_0001s_0006_Layer-7.png',
		text: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah'		

	},

	{
		name: 'ex4',
		department: 'RecaNec',
		pic: './img/Apogee-_0001s_0006_Layer-7.png',
		text: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah'		
	},

	{
		name: 'ex5',
		department: 'Sponz',
		pic: './img/Apogee-_0001s_0006_Layer-7.png',
		text: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah'

	}



];

var key = 0;

function enter(key){
			stra = data[key].name;
			strb = data[key].department;
			strc = data[key].text;
			strd = data[key].pic;
			console.log(key);
			$("#deptext").html('<div></div>');
			$("#name").html('<div></div>');
			$("#dep").html('<div></div>');
			$("#depi").fadeOut(2000);
			$("#depi").attr("src",strd);

			$("#name>div").typed({
				strings: [stra],
				typespeed: 1,
				showCursor: false,
			});	

			$("#dep>div").typed({
				strings: [strb],
				typespeed: 1,
				showCursor: false,
				startDelay: 250
			});		
			$("#deptext>div").typed({
				strings: [strc],
				typespeed: 1,
				showCursor: false,
				startDelay: 500,
			});		
			$("#depi").fadeIn(750);


}