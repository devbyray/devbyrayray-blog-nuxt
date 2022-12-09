import { pascalCase } from 'pascal-case'

export function convertTitle(title: string): string {
	let returnVal = ''
	switch (title) {
		case 'javascript':
			returnVal = 'JavaScript'
			break

		case 'typescript':
			returnVal = 'TypeScript'
			break

		default:
			returnVal = pascalCase(title)
			break
	}
	return returnVal
}

export function tagsForAds(tags: string[]) {
	return tags?.toString()?.replaceAll(',', '|')
}
