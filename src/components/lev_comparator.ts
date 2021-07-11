import { NotesProps } from "types";

/**
 * Calculates the Levenshtein distance between the two parameter strings
 * @param x the first string to compare
 * @param y the second string to compare
 * @returns the Levenshtein distance between the two strings
 */
function levDist(x: string, y: string): number {
	const dp = new Array(x.length + 1);
	for (let i = 0; i <= x.length; i++) {
		dp[i] = Array(y.length + 1).fill(0);
		for (let j = 0; j <= y.length; j++) {
			if (i == 0) {
				dp[i][j] = j;
			} else if (j == 0) {
				dp[i][j] = i;
			} else {
				dp[i][j] = Math.min(
					dp[i - 1][j - 1] + (x[i - 1] === y[j - 1] ? 0 : 1),
					Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1)
				);
			}
		}
	}

	return dp[x.length][y.length];
}

/**
 * An interface that outlines any type of comparator for NotesProps
 */
export interface NotesPropsComparator {
	compare: (n1: NotesProps, n2: NotesProps) => number;
}

/**
 * A class that automates the comparison of two strings to a search term via lev distance
 */
export default class LevComparator implements NotesPropsComparator {
	compareTo: string;
	map: { [key: string]: number };

	constructor(compareTo: string) {
		this.compareTo = compareTo.toLowerCase();
		this.map = {};
		this.compare = this.compare.bind(this);
	}

	compare({ title: s1 }: NotesProps, { title: s2 }: NotesProps): number {
		let val1, val2;
		if (this.map[(s1 = s1.toLowerCase())]) {
			val1 = this.map[s1];
		} else {
			val1 = levDist(this.compareTo, s1);
			this.map[s1] = val1;
		}
		if (this.map[(s2 = s2.toLowerCase())]) {
			val2 = this.map[s2];
		} else {
			val2 = levDist(this.compareTo, s2);
			this.map[s2] = val2;
		}

		return val1 - val2;
	}
}

/**
 * Calculates the fuzzy score between the two given strings.
 * Note: taken from Apache Common's FuzzyScore class.
 * @param termLowerCase the string to compare against (the title of the notes props)
 * @param queryLowerCase the string to compare with (the search term)
 * @returns the fuzzy score between the two strings
 */
function fuzzyCompare(termLowerCase: string, queryLowerCase: string): number {
	let score: number = 0,
		termIndex: number = 0,
		previousMatchingCharacterIndex: number = -1;
	for (
		let queryIndex: number = 0;
		queryIndex < queryLowerCase.length;
		queryIndex++
	) {
		const queryChar: string = queryLowerCase.charAt(queryIndex);

		for (; termIndex < termLowerCase.length; termIndex++) {
			const termChar = termLowerCase.charAt(termIndex);

			if (queryChar === termChar) {
				score++;

				if (previousMatchingCharacterIndex + 1 == termIndex) {
					score += 2;
				}

				previousMatchingCharacterIndex = termIndex;

				break;
			}
		}
	}

	return score;
}

/**
 * A class that automates the comparison of two strings to a search term via fuzzy matching
 * Note: taken from Apache Common's FuzzyScore class.
 */
export class FuzzyComparator implements NotesPropsComparator {
	compareTo: string;
	map: { [key: string]: number };

	constructor(compareTo: string) {
		this.compareTo = compareTo.toLowerCase();
		this.map = {};
		this.compare = this.compare.bind(this);
	}

	compare({ title: s1 }: NotesProps, { title: s2 }: NotesProps): number {
		let val1, val2;
		if (this.map[(s1 = s1.toLowerCase())]) {
			val1 = this.map[s1];
		} else {
			val1 = fuzzyCompare(this.compareTo, s1);
			this.map[s1] = val1;
		}
		if (this.map[(s2 = s2.toLowerCase())]) {
			val2 = this.map[s2];
		} else {
			val2 = fuzzyCompare(this.compareTo, s2);
			this.map[s2] = val2;
		}

		return val2 - val1; // reverse so larger scores get sorted towards the front
	}
}
