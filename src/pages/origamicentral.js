import React from "react"


const OrigamiCentral = () => (
  <html>
	<head>
		<title>Origami Central</title>
		<style>
			body {
				background-image: url('./assets/star_bg.png');
				color: white;
				font-family: Calibri;
			}

			hr {
				max-width: 36rem;
				margin-inline-start: unset;
				
			}

			.title_primary {
				color: blue;
				font-size: 3rem;
			}

			.title_secondary {
				color: blue;
				font-family: Calibri;
				font-size: 5rem;
				text-decoration: underline;
				text-shadow: 0px 0px 1rem lightblue, 0px 0px 1rem lightblue, 0px 0px 1rem lightblue;
			}

			.title_container {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.category_title {
				font-size: 1.5rem;
				text-decoration: underline;
			}

			.category_subtext {
				margin-top: 0;
			}

			.section_title {
				font-size: 2rem;
			}
		</style>
	</head>
	<body>
		<div class="title_container"><span class="title_primary">origami</span> <span class="title_secondary">CENTRAL</span></div>
		<section>
			<span class="section_title">Characters</span>
			<ul>
				<li>
					<span class="category_title">Jedi -- $0.05 ea</span>
					<br>
					<p class="category_subtext">Obi-wan Kenobi, Anakin Skywalker, Luke Skywalker, Mace Widu, Master Yoda</p>
				</li>
				<li>
					<span class="category_title">Sith -- $0.05 ea</span>
					<br>
					<p class="category_subtext">Darth Maul, Kylo Ren, Darth Vader, Sith Trooper</p>
				</li>
				<li>
					<span class="category_title">Bounty hunters -- $0.10 ea <b>NEW!</b></span>
					<br>
					<p class="category_subtext">Boba Fett, Jango Fett, Mandalorian</p>
				</li>
			</ul>
		</section>
		<hr>
		<section>
			<span class="section_title">Kits</span>
			<ul>
				<li>
					<span class="category_title">War kit -- $0.25</span>
					<br>
					<p class="category_subtext">3 X-wings, Star Destroyer, Millenium Falcon</p>
				</li>
				<li>
					<span class="category_title">Star kit -- $0.30</span>
					<br>
					<p class="category_subtext">Young Obi-wan, Qui Gon Jinn, Darth Maul, Darth Vader </p>
				</li>
				<li>
					<span class="category_title">Ninja kit -- $0.35 <b>NEW!</b></span>
					<br>
					<p class="category_subtext">3 Throwing Stars, Belt, Headband</p>
				</li>
			</ul>
		</section>
		<hr>
		<section>
			<span class="section_title">Vehicles</span>
			<ul>
				<li><p class="category_title category_subtext">X-wing -- $0.10</p></li>
				<li><p class="category_title">Millenium Falcon -- $0.15</p></li>
				<li><p class="category_title">Star Destroyer -- $0.20</p></li>
			</ul>
		</section>
		<hr>
		<section>
			<span class="section_title">Exclusive stuff!!</span>
			<ul>
				<li>
					<span class="category_title">Finger Troopers -- $0.05 ea</span class="category_title">
					<br>
					<p class="category_subtext">Snow Trooper, Storm Trooper</p>
				</li>
				<li><p class="category_title category_subtext">Luke's belt -- $0.15</p></li>
				<li>
					<span class="category_title">Mini Lightsabers -- $0.10 ea</span>
					<br>
					<p class="category_subtext">Blue, Green, Purple,Red</p>
				</li>
			</ul>
		</section>
		<hr>
		<section>
			<span class="section_title">Comics</span>
			<ul>
				<li><p class="category_title category_subtext">Ewok's Reward comic -- $0.05</p></li>
			</ul>
		</section>
	</body>
</html>
)

export default OrigamiCentral
