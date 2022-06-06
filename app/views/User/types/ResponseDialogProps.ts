export type ResponseDialogProps = {
  readonly isOpen: boolean;
  readonly close: () => void;
  readonly message: string;
}