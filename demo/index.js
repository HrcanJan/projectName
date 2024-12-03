treeJson = d3.json("data/data.json", function(error, treeData) {
	dTree.init(treeData,
		{
			target: "#graph",
			debug: true,
			hideMarriageNodes: true,
			marriageNodeSize: 5,
			height: 800,
			width: 1200,
			callbacks: {
				nodeClick: function(name, extra) {
					// alert('Click: ' + name);
				},
				nodeRightClick: function(name, extra) {
					// alert('Right-click: ' + name);
				},
				textRenderer: function(name, extra, textClass) {
					let displayName = name;
					let displayLastName = extra?.lastname;
					let displayMaidenName = extra && extra.maidenname ? extra.maidenname : "";
					if (extra && extra.nickname) {
						displayName = name + " (" + extra.nickname + ")";
					}
					
					let birthDate = extra && extra.birthDate ? extra.birthDate : "";
					let deathDate = extra && extra.deathDate ? extra.deathDate : "";
					let extraText = extra && extra.extraText ? extra.extraText : "";

					let ribbon = extra && extra.deathDate ? `<div class="ribbon"></div>` : "";
					
					return `<div align='center' class='${textClass}'>
								${ribbon}
								<p class="margin-top">${displayLastName}</p>
								<p>${displayName}</p>
								<p class="margin">${displayMaidenName}</p>
								<p class='emphasis'>${birthDate}</p>
								<p class='emphasis'>${deathDate}</p>
								<p class='emphasis'>${extraText}</p>
							</div>`;
				},
				marriageClick: function(extra, id) {
					// alert('Clicked marriage node' + id);
				},
				marriageRightClick: function(extra, id) {
					// alert('Right-clicked marriage node' + id);
				},
			}
		});
	});