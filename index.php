<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8" />
	<title>qtpie</title>
	<link rel="stylesheet" href="assets/css/reset.css" />
	<link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

	<div id="svgPie">
		<svg width="200" height="200" viewbox="0 0 200 200">
			<path class="Photoshop" data-pie="28" data-desc="Photoshop"/>
			<path class="Illustrator" data-pie="7" data-desc="Illustrator"/>
			<path class="InDesign" data-pie="15" data-desc="InDesign"/>
			<path class="HTML5" data-pie="22" data-desc="HTML5"/>
			<path class="CSS3" data-pie="28" data-desc="CSS3"/>
			<circle fill="#fff" r="70" transform="translate(100, 100)">
		</svg>
		<div class="inside">WAZAA !</div>
	</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/script.js"></script>
<script>
$(function(){
	qtpie.init('#svgPie');
})
</script>

</body>
</html>