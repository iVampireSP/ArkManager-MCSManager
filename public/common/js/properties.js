(function () {
	MCSERVER.findPropertiesShow = function (key) {

		var SuwingsLoveYou = {
			"SessionName": "会话名称（硬核翻译）",
		}

		if (SuwingsLoveYou.hasOwnProperty(key)) {
			return SuwingsLoveYou[key];
		} else {
			//Not find, Return space
			return ' ';
		}
	}
})();