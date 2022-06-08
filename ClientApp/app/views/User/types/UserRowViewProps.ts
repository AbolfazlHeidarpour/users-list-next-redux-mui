export type UserRowViewProps = {
  readonly firstName: string;
  readonly lastName: string;
  readonly mobile: string;
  readonly id: number;
  readonly handleDeleteUser: (id: number) => void;
  readonly isFavorite: (id: number) => boolean;
  readonly removeFavorite: (id: number) => void;
  readonly addFavorite: (id: number, name: string) => void;
}