const game = {
	title: "YS",
	developer: "Falcom",
	releases: {
		"Oath In Felghana": ["USA", "Japan"],
		"Ark Of Napishtim": {
			US: "20 USD",
			JAP: "10 USD",
		},
		Origin: "30 USD",
	},
};

// Write Your Destructuring Assignment/s Here

// const { title: t, developer: d, releases: { o: [u , j], a: {u_price, j_price}, or } } = game;
const { title: t, developer: d, releases } = game;
const [o, a, origin ] = Object.keys(releases);
const [u , j] = releases[o];
const { US :u_price, JAP: j_price } = releases[a];
const or = releases[origin];


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD