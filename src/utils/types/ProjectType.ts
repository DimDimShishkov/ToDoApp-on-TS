import { CardType } from "./CardType";

export interface ProjectType {
  id: number;
  name: string;
  tasks: CardType[];
}
