export type Image = {
	png: string;
	webp: string;
};

export type User = {
	image: Image;
	username: string;
};

export type Comment = {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replyingTo?: string;
};

export type CommentData = Comment & {
	replies?: Comment[];
};
