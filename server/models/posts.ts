export class Post {
	creationTs: number;
	lastModificationTs?: number;
	lastEditTs?: number;
	author?: string;
	content: string;
	privacy: string;
	comments: number;
	reactions: number;
	reacted: boolean;
}

export enum Privacy {
	private,
	friends,
	public
}