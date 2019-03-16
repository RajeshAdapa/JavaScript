	var parent,hr,min,sec;

		function init() 
		{
			parent = document.getElementById("clock");

			drawClock();
			drawHands();

			hr = document.getElementById("hr");
			min = document.getElementById("min");
			sec = document.getElementById("sec");
		}

		function drawClock() 
		{
			
			var n = 12;
			var angle = 0;
			for(i=0;i<n;i++) {
				var ele = document.createElement("div");

				var child = document.createElement("div");
				child.setAttribute("class","text");

				child.style.transform="rotate(-" + angle + "deg)";
				if(i == 0)
					var text = document.createTextNode(n);	
				else
					var text = document.createTextNode(i);

				child.appendChild(text);

				ele.appendChild(child);
				ele.setAttribute("class","nums");
				ele.setAttribute("align","center");
				ele.style.transformOrigin = "bottom";
				ele.style.transform="rotate(" + angle + "deg)";

				parent.appendChild(ele);
				angle += 30;
			}
			var dot = document.createElement("div");
			dot.setAttribute("class","dot");
			parent.appendChild(dot);

			var timeText = document.createElement("div");
			timeText.setAttribute('id','time');
			parent.appendChild(timeText);

		}

		function drawHands() 
		{
			var h = document.createElement("div");
			var m = document.createElement("div");
			var s = document.createElement("div");

			h.setAttribute("class","hand hr");
			m.setAttribute("class","hand min");
			s.setAttribute("class","hand sec");

			h.setAttribute("id","hr");
			m.setAttribute("id","min");
			s.setAttribute("id","sec");

			parent.appendChild(h);
			parent.appendChild(m);
			parent.appendChild(s);

		}

		function startClock() 
		{
			
			var time = new Date();

			var hh = time.getHours();
			var mm = time.getMinutes();
			var ss = time.getSeconds();

			if(hh > 12)
				hh -= 12;

			var ha = hh * 30;
			var ma = mm * 6;
			var sa = ss * 6;

			ha = ha + (ma/12);

			hr.style.transform="rotate(" + ha + "deg)";
			min.style.transform = "rotate("+ ma + "deg)";
			sec.style.transform = "rotate("+ sa + "deg)";	
			
		}

		function currentTime()
		{
			var now = new Date();
			var hr = now.getHours();
			var min = now.getMinutes();
			var sec = now.getSeconds();

			var ctime = '';


			if(hr > 12)
				hrs = hr%12;

			if(hrs < 10)
				ctime += "0";
				ctime += hrs + ":";

			if(min < 10)
				ctime += "0" ;
				ctime += min + ":";

			if(sec < 10)
				ctime += "0";
				ctime += sec + " ";


			if(hr < 12)
				ctime += "AM";
			else
				ctime += "PM";

			time.innerText = ctime;
			time.setAttribute("title",ctime);
		}
	
		document.addEventListener('DOMContentLoaded',init);
		setInterval(startClock,1000);
		setInterval(currentTime,1000);

		document.addEventListener('DOMContentLoaded',function() 
		{
			var a1 = document.getElementById("a1_on");

			a1.addEventListener('change',function()
			{
				if(a1.checked == true)
				{
					document.getElementById("alarm1").disabled="";
				}
				else
				{
					document.getElementById("alarm1").disabled="disabled";
				}
			});

			var a2 = document.getElementById("a2_on");
			
			a2.addEventListener('change',function()
			{
				if(a2.checked == true)
					document.getElementById("alarm2").disabled="";
				else
					document.getElementById("alarm2").disabled="disabled";
			});
		});