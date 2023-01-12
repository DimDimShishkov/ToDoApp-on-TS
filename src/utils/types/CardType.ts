export interface CommentsType {
  id: number;
  description: string;
  createdAt: string;
  addedComments: CommentsType[];
}

export interface CardType {
  section: string;
  title: string;
  priority: string;
  id: number;
  startDate: string | null;
  finDate: string | null;
  description: string;
  addedFiles: File[];
  addedTasks: CardType[];
  addedComments: CommentsType[];
}
