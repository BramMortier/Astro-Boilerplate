import {
	OneClickBookmark,
	IntelligentSearch,
	ShareBookmarks,
	HeroIllustration
} from "@assets/images/index"

export const content = {
	hero: {
		title: "A Simple Bookmark Manager",
		titleTag: "h1",
		text: "A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
		buttons: [
			{
				text: "Get it on Chrome",
				class: ""
			},
			{
				text: "Get it on Firefox",
				class: "c-button--tertiary"
			}
		],
		image: HeroIllustration
	},
	faq: {
		title: "Frequently Asked Questions",
		text: "Here are some of our FAQs. If you have any other questions you'd like awnsered please feel free to email us.",
		questions: [
			{
				question: "What is Bookmark",
				awnser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione explicabo aspernatur accusamus illum error eos nulla iusto dicta, quo esse quasi omnis repellendus quia libero. Natus doloribus totam recusandae."
			},
			{
				question: "How can I request a new browser",
				awnser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione explicabo aspernatur accusamus illum error eos nulla iusto dicta, quo esse quasi omnis repellendus quia libero. Natus doloribus totam recusandae."
			},
			{
				question: "Is there a mobile app",
				awnser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione explicabo aspernatur accusamus illum error eos nulla iusto dicta, quo esse quasi omnis repellendus quia libero. Natus doloribus totam recusandae."
			},
			{
				question: "What about other Chromium browsers",
				awnser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione explicabo aspernatur accusamus illum error eos nulla iusto dicta, quo esse quasi omnis repellendus quia libero. Natus doloribus totam recusandae."
			}
		],
		button: {
			text: "More info"
		}
	},
	download: {
		title: "Download the extension",
		text: "We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize",
		cards: [
			{
				icon: "chrome",
				title: "Add to Chrome",
				text: "Minimum version 62",
				button: { text: "Add & install Extension" }
			},
			{
				icon: "firefox",
				title: "Add to Firefox",
				text: "Minimum version 55",
				button: { text: "Add & install Extension" }
			},
			{
				icon: "opera",
				title: "Add to Opera",
				text: "Minimum version 46",
				button: { text: "Add & install Extension" }
			}
		]
	},
	features: {
		title: "Features",
		text: "Our aim is to make it easy for you to acces your favorite websites. Your bookmarks sync between your devices so you can acces them on the go",
		tabs: [
			{
				name: "Simple Bookmarking",
				image: OneClickBookmark,
				title: "Bookmark in one click",
				text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
				button: { text: "More info" }
			},
			{
				name: "Speedy Searching",
				image: IntelligentSearch,
				title: "Intelligent search",
				text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
				button: { text: "More info" }
			},
			{
				name: "Easy Sharing",
				image: ShareBookmarks,
				title: "Share your bookmarks",
				text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
				button: { text: "More info" }
			}
		]
	}
}
