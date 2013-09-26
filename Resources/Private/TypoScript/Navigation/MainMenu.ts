lib.navigation.mainmenu = COA
lib.navigation.mainmenu{

	wrap = <nav class="mainmenu">|</nav>

	# Level 1
	10 = HMENU
	10{
		entryLevel = 0
		1 = TMENU
		1{
			wrap = <ul class="lvl1">|</ul>
			noBlur = 1
			expAll = 1
			NO.allWrap = <li>|</li>
			ACT = 1
			ACT.allWrap = <li class="act">|</li>
		}
	}
	
	# Level 2
	20 = HMENU
	20{
		special = directory
		special.value = 33965
		1 = TMENU
		1{
			wrap = <ul class="lvl2">|</ul>
			noBlur = 1
			expAll = 1
			NO{
				allWrap = <li>|</li>
				linkWrap = <span>|</span>
				ATagBeforeWrap = 1
			}
			ACT < .NO
			ACT.allWrap = <li class="act">|</li>
		}
	}
	20>

	# Level 3
	#30 < .10
	#30.entryLevel = 2
	#30.1.wrap = <ul class="lvl3"></ul>


}

lib.navigation.mainmenu > 
lib.navigation.mainmenu = TEXT
lib.navigation.mainmenu.value(
<div id="navigation">
		<div class="mainmenu"><ul class="lvl1"><li class="act"><a href="forside/"  >Forside</a></li><li><a href="oekonomi/"  >Økonomi</a></li><li><a href="loen-og-ansaettelse/"  >Løn og Ansættelse</a></li><li><a href="beskaeftigelse/"  >Beskæftigelse</a></li><li><a href="arbejdsmiljoe/"  >Arbejdsmiljø</a></li><li><a href="uddannelse/"  >Uddannelse</a></li><li><a href="ledelse/"  >Ledelse</a></li><li><a href="internationalt/"  >Internationalt</a></li></ul><ul class="lvl2"><li class="act"><a href="aktuelt/"  ><span>Aktuelt</span></a></li><li><a href="om-ftf/"  ><span>Om FTF</span></a></li><li><a href="service/"  ><span>Service til organisationer</span></a></li><li><a href="kurser/"  ><span>Kurser og konferencer</span></a></li><li><a href="regioner/"  ><span>Regioner</span></a></li><li><a href="tr/"  ><span>TR</span></a></li><li><a href="netvaerk/"  ><span>Netværk</span></a></li><li><a href="tillidsreform/"  ><span>Tillidsreform</span></a></li><li><a href="kontakt/"  ><span>Kontakt</span></a></li></ul><ul class="lvl3"><li class="act"><a href="aktuelt/ftf-analyse/"  ><span>FTF analyse</span></a></li><li><a href="aktuelt/ftf-nyhed/"  ><span>FTF nyhed</span></a></li><li><a href="aktuelt/ftf-i-medierne/"  ><span>FTF i medierne</span></a></li><li><a href="aktuelt/presserum/"  ><span>Presserum</span></a></li><li><a href="aktuelt/presseklip/?no_cache=1"  ><span>Presseklip </span></a></li><li><a href="aktuelt/notater/"  ><span>Notater</span></a></li><li><a href="aktuelt/hoeringssvar/"  ><span>Høringssvar</span></a></li><li><a href="aktuelt/ftf-dokumentation/"  ><span>FTF Dokumentation</span></a></li><li><a href="aktuelt/rss/nyheder-fra-ftf-skraeddersyet-til-hjemmesiden/"  ><span>RSS</span></a></li><li><a href="aktuelt/modtag-nyheder/?no_cache=1"  ><span>Modtag nyheder</span></a></li><li><a href="aktuelt/httpwwwftfdkom-ftfjob/"  ><span>Job</span></a></li><li><a href="aktuelt/tv/"  ><span>TV</span></a></li></ul></div>		
</div>
)