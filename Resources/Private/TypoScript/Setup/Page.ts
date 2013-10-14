##
# Set up tempalates for this theme
##
page = PAGE
page{

	10 = FLUIDTEMPLATE
	10 {
		file = EXT:ftf_ftfdk/Resources/Private/Templates/Main.html
		layoutRootPath = EXT:ftf_ftfdk/Resources/Private/Templates/Layouts
		partialRootPath = EXT:ftf_ftfdk/Resources/Private/Templates/Partials
	
		variables {
			# Assign the main column with our {content}-destination
			content < styles.content.get
			banner < styles.content.get
			banner.select.where = colPos = 1
			tertiary < styles.content.get
			tertiary.select.where = colPos = 2
		}
		
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout

			# Set the default Template
			default = TEXT
			default.value = EXT:ftf_ftfdk/Resources/Private/Templates/Main.html
			2 < .default
			2.value = EXT:ftf_ftfdk/Resources/Private/Templates/2col.html
		}
	}
}


