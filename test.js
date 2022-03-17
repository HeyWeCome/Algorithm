/**
 * @param {string[]} words
 * @return {string}
 */
words = ["t","ti","tig","tige","tiger","e","en","eng","engl","engli","englis","english","h","hi","his","hist","histo","histor","history"]
// words = ["d","do","dog","p","pe","pen","peng","pengu","pengui","penguin","e","el","ele","elep","eleph","elepha","elephan","elephant"]
words = ["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"]

var longestWord = function(words) {
	words = words.sort();
	let set = new Set();
	let res = "";

	for (const item of words) {
		if (item.length == 1 || set.has(item.substring(0, item.length - 1))) {
			res = item.length > res.length ? item : res;
			set.add(item);
		}
	}

	return res;
};

console.log(longestWord(words));