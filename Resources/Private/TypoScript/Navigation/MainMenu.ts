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