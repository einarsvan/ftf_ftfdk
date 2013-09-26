lib.navigation.mobile = COA
lib.navigation.mobile{
	10 = TEXT
	10.value(
		<form>
			<input type="search" placeholder="Indtast søgeord">
			<input type="submit" value="Søg">
		</form>
		<ul>
			<li><a href="index.html">Basic example</a></li>
			<li class="Selected">
				<a href="horizontal-submenus.html">Horizontal sliding submenus example</a>
				<ul>
					<li><a href="#">First sub-item</a></li>
					<li>
						<a href="#">Second sub-item</a>
						<ul>
							<li><a href="#">First sub-sub-item</a></li>
							<li><a href="#">Second sub-sub-item</a></li>
							<li><a href="#">Third sub-sub-item</a></li>
						</ul>
					</li>
					<li><a href="#">Third sub-item</a></li>
				</ul>
			</li>
			<li><a href="vertical-submenus.html">Vertical submenus example</a></li>
			<li><a href="positions.html">Positioning the menu</a></li>
			<li><a href="advanced.html">Advanced example</a></li>
			<li><a href="onepage.html">One page scrolling example</a></li>
			<li><a href="iconbar.html">Iconbar</a></li>
			<li><a href="dragopen.html">Drag/swipe the menu open</a></li>
		</ul>
	)
}