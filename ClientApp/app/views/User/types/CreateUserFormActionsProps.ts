export type CreateUserFormActionsProps = {
  readonly onClear: () => void;
  readonly onSubmit: () => void;
  readonly submitAllowed: () => boolean;
  readonly cancelAllowed: () => boolean;
}