export type ConfirmDialogProps = {
  readonly onYesClick: () => void;
  readonly onNoClick: () => void;
  readonly isOpen: boolean;
  readonly title: string;
  readonly message: string;
}