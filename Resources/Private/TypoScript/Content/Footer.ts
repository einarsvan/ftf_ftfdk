/**
 * Footer
 */

lib.content.footer = COA
lib.content.footer{
	
	# Emneord
	10 = RECORDS
	10 {
		wrap = <div class="emneord"><div class="container">|</div></div>
		source = 123123213
		tables = tt_content
		dontCheckPid = 1
	}

	20 = COA
	20 {

		wrap = <footer id="footer"><div class="container">|</div></div>

		# Slogan
		10 = TEXT
		10.value (
			<p class="big">Vi er hovedorganisation for 450.000 offentligt og privat ansatte</p>
			<p>FTF er hovedorganisationen for 78 faglige organisationer.<br> 
			Vi er talerør for 450.000 mennesker, som arbejder for at skabe velfærd og vækst i samfundet.</p>
		)
		10.wrap = <div class="slogan">|</div>
		
		# Footer info
		20 = COA
		20{
			wrap = <div class="row clearfix contact">|</div>

			10 = TEXT
			10.value(
				<img src="http://www.ftf.dk/fileadmin/themes/ftf.dk.2012/images/bente.png" alt="Bente">
				<ul class="details">
					<li>Bente Sorgenfrey</li>
					<li>Formand</li>
					<li>Telefon: 3336 8801</li>
					<li>Mobil: 4045 2645</li>
					<li><a href="mailto:beso@ftf.dk">beso@ftf.dk</a></li>
			    	</ul>
			)
			10.wrap = <div class="col span_4"><div class="contact-person">|</div></div>
		
			20 = TEXT
			20.value(
				<img src="http://www.ftf.dk/fileadmin/themes/ftf.dk.2012/images/flemming.png" alt="Flemming">
				<ul class="details">
					<li>Flemming Andersen</li>
					<li>Kommunikationschef</li>
					<li>Telefon: 3336 8804</li>
					<li>Mobil: 4036 8804</li>
					<li><a href="mailto:flan@ftf.dk">flan@ftf.dk</a></li>
			    	</ul>
			)	   
			20.wrap = <div class="col span_4"><div class="contact-person">|</div></div>

			30 = TEXT
			30.value (
				<p>Omkring hjemmesiden<br>Spørgsmål til FTF.dk kan rettes til Martin Olsen eller Louise Petersen på 
				<a href="mailto:webmaster@ftf.dk">webmaster@ftf.dk</a></p>
			)
			30.wrap = <div class="col span_4"><div class="contact-person"><div class="details">|</div></div></div>
		}	    	
		
		# Address			    	
		30 = COA		    
		30{
			wrap = <address class="clearfix">|</address>
			
			10 = TEXT
			10.value = <img src="http://www.ftf.dk/fileadmin/themes/ftf.dk.2012/images/ftf-logo-blackbg.png" alt="ftf-logo-blackbg" class="logo">
			
			20 = TEXT
			20.value ( 
				<p>Niels Hemmingsens Gade 12 | postboks 1169 | 1010 København K | Telefon: 
				<span class="sectioncolor">33 36 88 00</span></p>
			)
			
			30 = COA
			30{
				wrap = <div class="socialmedia"><ul>|</ul></div>
				
				# Facebook
				10 = TEXT
				10{
					value = Facebook
					wrap = <li>|</li>
					innerWrap = <span>|</span>
					typolink.parameter = https://www.facebook.com/pages/FTF-Hovedorganisation-for-450000-offentligt-og-privat-ansatte/96137021839
					typolink.ATagParams = class="icon-facebook-2"
				}
				
				# LinkedIn
				20 < .10
				20{
					value = LinkedIn
					typolink.parameter = http://linkedin.com
					typolink.ATagParams = class="icon-linkedin"
				}
				
				# Twitter
				30 < .10
				30{
					value = Twitter
					typolink.parameter = http://twitter.com/bentesorgenfrey
					typolink.ATagParams = class="icon-twitter-2"
				}
				
				# Bentes Blog
				40 < .10
				40{
					value = Bentes Blog
					typolink.parameter = http://www.ftf.dk/bente/
					typolink.ATagParams = class="bentesblog"
				}
			}
		}
	}
}